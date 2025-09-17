import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Input validation schema using Zod
const contactFormSchema = z.object({
  parentName: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().optional(),
  gradeLevel: z.string().optional(),
  inquiryType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
});

// Rate limiting configuration (simple in-memory store for demo)
// In production, use Redis or similar persistent storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 emails per 15 minutes per IP

// Initialize Resend client with proper error handling
let resend: Resend | null = null;

try {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
  } else if (!process.env.RESEND_API_KEY.startsWith('re_')) {
    console.error('Invalid RESEND_API_KEY format. Should start with "re_"');
  } else {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Resend client initialized successfully');
  }
} catch (error) {
  console.error('Failed to initialize Resend client:', error);
}

/**
 * Rate limiting function to prevent spam
 * @param clientIP - Client IP address
 * @returns boolean indicating if request is allowed
 */
function checkRateLimit(clientIP: string): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    // Reset or initialize rate limit for this IP
    rateLimitMap.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  // Increment count
  clientData.count++;
  return true;
}

/**
 * Sanitize HTML content to prevent XSS
 * @param content - Raw content string
 * @returns Sanitized content
 */
function sanitizeContent(content: string): string {
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Generate HTML email template
 * @param data - Form data
 * @returns HTML email content
 */
function generateEmailHTML(data: any): string {
  const sanitizedData = {
    parentName: sanitizeContent(data.parentName),
    email: sanitizeContent(data.email),
    phoneNumber: data.phoneNumber ? sanitizeContent(data.phoneNumber) : null,
    gradeLevel: data.gradeLevel ? sanitizeContent(data.gradeLevel) : null,
    inquiryType: data.inquiryType ? sanitizeContent(data.inquiryType) : null,
    message: sanitizeContent(data.message).replace(/\n/g, '<br>')
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - Himriti Public School</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #1f514c, #2d5a27); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .header p { margin: 5px 0 0 0; opacity: 0.9; font-size: 14px; }
        .content { padding: 30px 20px; }
        .info-section { background-color: #faf7f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1f514c; }
        .info-section h3 { color: #1f514c; margin-top: 0; margin-bottom: 15px; font-size: 18px; }
        .info-item { margin-bottom: 12px; }
        .info-label { font-weight: 600; color: #2d3748; display: inline-block; min-width: 140px; }
        .info-value { color: #4a5568; }
        .message-section { background-color: #ffffff; padding: 20px; border: 2px solid #e2e8f0; border-radius: 8px; margin: 20px 0; }
        .message-section h3 { color: #2d3748; margin-top: 0; margin-bottom: 15px; font-size: 18px; }
        .message-content { line-height: 1.8; color: #4a5568; font-size: 15px; }
        .footer { background-color: #2d3748; color: white; padding: 20px; text-align: center; font-size: 12px; }
        .footer p { margin: 0; opacity: 0.8; }
        .priority-badge { display: inline-block; background-color: #d4831f; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏔️ Himriti Public School</h1>
          <p>New Contact Form Submission</p>
        </div>
        
        <div class="content">
          ${sanitizedData.inquiryType ? `<div class="priority-badge">${sanitizedData.inquiryType}</div>` : ''}
          
          <div class="info-section">
            <h3>📋 Contact Information</h3>
            <div class="info-item">
              <span class="info-label">Parent/Guardian:</span>
              <span class="info-value">${sanitizedData.parentName}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Email Address:</span>
              <span class="info-value">${sanitizedData.email}</span>
            </div>
            ${sanitizedData.phoneNumber ? `
            <div class="info-item">
              <span class="info-label">Phone Number:</span>
              <span class="info-value">${sanitizedData.phoneNumber}</span>
            </div>` : ''}
            ${sanitizedData.gradeLevel ? `
            <div class="info-item">
              <span class="info-label">Grade Level:</span>
              <span class="info-value">${sanitizedData.gradeLevel}</span>
            </div>` : ''}
            <div class="info-item">
              <span class="info-label">Submitted:</span>
              <span class="info-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
            </div>
          </div>
          
          <div class="message-section">
            <h3>💬 Message</h3>
            <div class="message-content">${sanitizedData.message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from the Himriti Public School website contact form.</p>
          <p>Please respond within 24 hours to maintain our commitment to excellent customer service.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text email content
 * @param data - Form data
 * @returns Plain text email content
 */
function generateEmailText(data: any): string {
  return `
HIMRITI PUBLIC SCHOOL - NEW CONTACT FORM SUBMISSION

Contact Information:
====================
Parent/Guardian Name: ${data.parentName}
Email Address: ${data.email}
${data.phoneNumber ? `Phone Number: ${data.phoneNumber}` : ''}
${data.gradeLevel ? `Student Grade Level: ${data.gradeLevel}` : ''}
${data.inquiryType ? `Inquiry Type: ${data.inquiryType}` : ''}
Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

Message:
========
${data.message}

---
This message was sent from the Himriti Public School website contact form.
Please respond within 24 hours to maintain our commitment to excellent customer service.
  `.trim();
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Check rate limiting
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { 
          error: 'Too many requests. Please wait before sending another message.',
          retryAfter: Math.ceil(RATE_LIMIT_WINDOW / 1000 / 60) // minutes
        },
        { status: 429 }
      );
    }

    // Check if Resend is properly configured
    if (!resend) {
      console.error('Resend client not initialized - API key missing or invalid');
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable. Please try again later or contact us directly.' },
        { status: 503 }
      );
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error('Invalid JSON in request body:', error);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate input data
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      console.warn('Validation failed:', validationResult.error.errors);
      return NextResponse.json(
        { 
          error: 'Invalid input data',
          details: validationResult.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // Generate email content
    const htmlContent = generateEmailHTML(validatedData);
    const textContent = generateEmailText(validatedData);

    // Prepare email data
    const emailData = {
      from: 'Himriti Public School <noreply@himriti.com>',
      to: ['himritihigh@gmail.com'],
      replyTo: validatedData.email,
      subject: `New Contact Form Submission${validatedData.inquiryType ? ` - ${validatedData.inquiryType}` : ''} - ${validatedData.parentName}`,
      html: htmlContent,
      text: textContent,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Himriti Public School Website',
        'X-Source-IP': clientIP,
      },
      tags: [
        { name: 'source', value: 'contact-form' },
        { name: 'inquiry-type', value: validatedData.inquiryType || 'general' }
      ]
    };

    // Send email using Resend
    console.log(`Attempting to send email for: ${validatedData.parentName} (${validatedData.email})`);
    
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend API error:', {
        error: error,
        timestamp: new Date().toISOString(),
        clientIP: clientIP,
        userEmail: validatedData.email
      });

      // Handle specific Resend errors
      if (error.message?.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Email service rate limit reached. Please try again in a few minutes.' },
          { status: 429 }
        );
      }

      if (error.message?.includes('invalid')) {
        return NextResponse.json(
          { error: 'Invalid email configuration. Please contact support.' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // Log successful email send
    const processingTime = Date.now() - startTime;
    console.log(`Email sent successfully:`, {
      emailId: data?.id,
      recipient: validatedData.email,
      parentName: validatedData.parentName,
      inquiryType: validatedData.inquiryType || 'general',
      processingTime: `${processingTime}ms`,
      timestamp: new Date().toISOString(),
      clientIP: clientIP
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Email sent successfully! We\'ll get back to you within 24 hours.',
        emailId: data?.id,
        processingTime: processingTime
      },
      { status: 200 }
    );

  } catch (error) {
    // Log unexpected errors
    const processingTime = Date.now() - startTime;
    console.error('Unexpected error in send-email API:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      processingTime: `${processingTime}ms`
    });

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle unsupported HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send emails.' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send emails.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send emails.' },
    { status: 405 }
  );
}