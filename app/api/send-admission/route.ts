import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { admissionFormSchema, type AdmissionFormData } from '@/lib/validation/admission';
import { GRADE_OPTIONS, RELATIONSHIP_OPTIONS, REFERRAL_SOURCE_OPTIONS } from '@/types/admission';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

// Rate limiting configuration
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 admission applications per 15 minutes per IP

// Initialize Resend client
let resend: Resend | null = null;

try {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
  } else if (!process.env.RESEND_API_KEY.startsWith('re_')) {
    console.error('Invalid RESEND_API_KEY format. Should start with "re_"');
  } else {
    resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Resend client initialized successfully for admission applications');
  }
} catch (error) {
  console.error('Failed to initialize Resend client:', error);
}

/**
 * Rate limiting function
 */
function checkRateLimit(clientIP: string): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  clientData.count++;
  return true;
}

/**
 * Sanitize HTML content
 */
function sanitizeContent(content: string): string {
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Generate application reference number
 */
function generateApplicationRef(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `HPS-${timestamp}-${random}`.toUpperCase();
}

/**
 * Generate HTML email for school administration
 */
function generateAdminEmailHTML(data: AdmissionFormData, applicationRef: string): string {
  const sanitizedData = {
    student: {
      fullName: sanitizeContent(data.student.fullName),
      gradeApplyingFor: data.student.gradeApplyingFor ? sanitizeContent(data.student.gradeApplyingFor) : null,
      currentSchool: data.student.currentSchool ? sanitizeContent(data.student.currentSchool) : null,
      studentEmail: data.student.studentEmail ? sanitizeContent(data.student.studentEmail) : null,
    },
    parent: {
      primaryParentName: sanitizeContent(data.parent.primaryParentName),
      relationshipToStudent: data.parent.relationshipToStudent ? sanitizeContent(data.parent.relationshipToStudent) : null,
      email: sanitizeContent(data.parent.email),
      phoneNumber: data.parent.phoneNumber ? sanitizeContent(data.parent.phoneNumber) : null,
      secondaryContactName: data.parent.secondaryContactName ? sanitizeContent(data.parent.secondaryContactName) : null,
      secondaryContactPhone: data.parent.secondaryContactPhone ? sanitizeContent(data.parent.secondaryContactPhone) : null,
    },
    address: {
      homeAddress: data.address.homeAddress ? sanitizeContent(data.address.homeAddress) : null,
      city: data.address.city ? sanitizeContent(data.address.city) : null,
      stateProvince: data.address.stateProvince ? sanitizeContent(data.address.stateProvince) : null,
      zipPostalCode: data.address.zipPostalCode ? sanitizeContent(data.address.zipPostalCode) : null,
      country: data.address.country ? sanitizeContent(data.address.country) : null,
    },
    academic: {
      reasonForApplication: sanitizeContent(data.academic.reasonForApplication).replace(/\n/g, '<br>'),
      specialNeeds: data.academic.specialNeeds ? sanitizeContent(data.academic.specialNeeds).replace(/\n/g, '<br>') : null,
    },
    additional: {
      howDidYouHear: data.additional.howDidYouHear ? sanitizeContent(data.additional.howDidYouHear) : null,
      emergencyContactName: data.additional.emergencyContactName ? sanitizeContent(data.additional.emergencyContactName) : null,
      emergencyContactPhone: data.additional.emergencyContactPhone ? sanitizeContent(data.additional.emergencyContactPhone) : null,
    }
  };

  const gradeLabel = GRADE_OPTIONS.find(g => g.value === data.student.gradeApplyingFor)?.label || 'Not specified';
  const relationshipLabel = RELATIONSHIP_OPTIONS.find(r => r.value === data.parent.relationshipToStudent)?.label || 'Not specified';
  const referralLabel = REFERRAL_SOURCE_OPTIONS.find(s => s.value === data.additional.howDidYouHear)?.label || 'Not specified';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Admission Application - Himriti Public School</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 700px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #1f514c, #2d5a27); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; }
        .ref-number { background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; display: inline-block; margin-top: 15px; font-weight: 600; }
        .content { padding: 40px 30px; }
        .priority-badge { display: inline-block; background-color: #d4831f; color: white; padding: 6px 16px; border-radius: 25px; font-size: 14px; font-weight: 600; margin-bottom: 20px; }
        .section { background-color: #faf7f2; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 5px solid #1f514c; }
        .section h3 { color: #1f514c; margin-top: 0; margin-bottom: 20px; font-size: 20px; font-weight: 600; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .info-item { margin-bottom: 15px; }
        .info-label { font-weight: 600; color: #2d3748; display: block; margin-bottom: 4px; }
        .info-value { color: #4a5568; font-size: 15px; }
        .statement-section { background-color: #ffffff; padding: 25px; border: 2px solid #e2e8f0; border-radius: 12px; margin: 25px 0; }
        .statement-content { line-height: 1.8; color: #4a5568; font-size: 16px; }
        .footer { background-color: #2d3748; color: white; padding: 25px; text-align: center; }
        .footer p { margin: 0; opacity: 0.9; font-size: 14px; }
        .action-required { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .action-required h4 { color: #856404; margin-top: 0; }
        @media (max-width: 600px) {
          .info-grid { grid-template-columns: 1fr; }
          .content { padding: 20px; }
          .header { padding: 30px 20px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏔️ Himriti Public School</h1>
          <p>New Admission Application Received</p>
          <div class="ref-number">Application #${applicationRef}</div>
        </div>
        
        <div class="content">
          <div class="priority-badge">Grade ${gradeLabel} Application</div>
          
          <div class="section">
            <h3>👨‍🎓 Student Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Student Name:</span>
                <span class="info-value">${sanitizedData.student.fullName}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Grade Applying For:</span>
                <span class="info-value">${gradeLabel}</span>
              </div>
              ${sanitizedData.student.currentSchool ? `
              <div class="info-item">
                <span class="info-label">Current School:</span>
                <span class="info-value">${sanitizedData.student.currentSchool}</span>
              </div>` : ''}
              ${sanitizedData.student.studentEmail ? `
              <div class="info-item">
                <span class="info-label">Student Email:</span>
                <span class="info-value">${sanitizedData.student.studentEmail}</span>
              </div>` : ''}
            </div>
          </div>
          
          <div class="section">
            <h3>👨‍👩‍👧‍👦 Parent/Guardian Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">Primary Parent/Guardian:</span>
                <span class="info-value">${sanitizedData.parent.primaryParentName}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Relationship:</span>
                <span class="info-value">${relationshipLabel}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email Address:</span>
                <span class="info-value">${sanitizedData.parent.email}</span>
              </div>
              ${sanitizedData.parent.phoneNumber ? `
              <div class="info-item">
                <span class="info-label">Phone Number:</span>
                <span class="info-value">${sanitizedData.parent.phoneNumber}</span>
              </div>` : ''}
              ${sanitizedData.parent.secondaryContactName ? `
              <div class="info-item">
                <span class="info-label">Secondary Contact:</span>
                <span class="info-value">${sanitizedData.parent.secondaryContactName}</span>
              </div>` : ''}
              ${sanitizedData.parent.secondaryContactPhone ? `
              <div class="info-item">
                <span class="info-label">Secondary Phone:</span>
                <span class="info-value">${sanitizedData.parent.secondaryContactPhone}</span>
              </div>` : ''}
            </div>
          </div>
          
          ${sanitizedData.address.homeAddress ? `
          <div class="section">
            <h3>🏠 Address Information</h3>
            <div class="info-item">
              <span class="info-label">Home Address:</span>
              <span class="info-value">${sanitizedData.address.homeAddress}</span>
            </div>
            <div class="info-grid">
              ${sanitizedData.address.city ? `
              <div class="info-item">
                <span class="info-label">City:</span>
                <span class="info-value">${sanitizedData.address.city}</span>
              </div>` : ''}
              ${sanitizedData.address.stateProvince ? `
              <div class="info-item">
                <span class="info-label">State/Province:</span>
                <span class="info-value">${sanitizedData.address.stateProvince}</span>
              </div>` : ''}
              ${sanitizedData.address.zipPostalCode ? `
              <div class="info-item">
                <span class="info-label">ZIP/Postal Code:</span>
                <span class="info-value">${sanitizedData.address.zipPostalCode}</span>
              </div>` : ''}
              ${sanitizedData.address.country ? `
              <div class="info-item">
                <span class="info-label">Country:</span>
                <span class="info-value">${sanitizedData.address.country}</span>
              </div>` : ''}
            </div>
          </div>` : ''}
          
          <div class="statement-section">
            <h3>📝 Personal Statement</h3>
            <div class="statement-content">${sanitizedData.academic.reasonForApplication}</div>
          </div>
          
          ${sanitizedData.academic.specialNeeds ? `
          <div class="section">
            <h3>🏥 Special Needs & Accommodations</h3>
            <div class="statement-content">${sanitizedData.academic.specialNeeds}</div>
          </div>` : ''}
          
          <div class="section">
            <h3>ℹ️ Additional Information</h3>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-label">How they heard about us:</span>
                <span class="info-value">${referralLabel}</span>
              </div>
              ${sanitizedData.additional.emergencyContactName ? `
              <div class="info-item">
                <span class="info-label">Emergency Contact:</span>
                <span class="info-value">${sanitizedData.additional.emergencyContactName}</span>
              </div>` : ''}
              ${sanitizedData.additional.emergencyContactPhone ? `
              <div class="info-item">
                <span class="info-label">Emergency Phone:</span>
                <span class="info-value">${sanitizedData.additional.emergencyContactPhone}</span>
              </div>` : ''}
              <div class="info-item">
                <span class="info-label">Application Submitted:</span>
                <span class="info-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
              </div>
            </div>
          </div>
          
          <div class="action-required">
            <h4>📋 Next Steps Required:</h4>
            <ul>
              <li>Review application within 48 hours</li>
              <li>Schedule student assessment and family interview</li>
              <li>Request additional documents if needed</li>
              <li>Send admission decision by email</li>
            </ul>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Application Reference:</strong> ${applicationRef}</p>
          <p>This application was submitted through the Himriti Public School website.</p>
          <p>Please respond to the family within 48 hours to maintain our commitment to excellent service.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate HTML email for applicant family
 */
function generateApplicantEmailHTML(data: AdmissionFormData, applicationRef: string): string {
  const gradeLabel = GRADE_OPTIONS.find(g => g.value === data.student.gradeApplyingFor)?.label || 'Not specified';
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Application Received - Himriti Public School</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #1f514c, #2d5a27); color: white; padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; }
        .success-icon { font-size: 48px; margin: 20px 0; }
        .content { padding: 40px 30px; }
        .highlight-box { background: linear-gradient(135deg, #faf7f2, #f0f9ff); padding: 25px; border-radius: 12px; text-align: center; margin: 25px 0; border: 2px solid #1f514c; }
        .ref-number { font-size: 24px; font-weight: 700; color: #1f514c; margin: 10px 0; }
        .next-steps { background-color: #faf7f2; padding: 25px; border-radius: 12px; margin: 25px 0; }
        .next-steps h3 { color: #1f514c; margin-top: 0; }
        .step-item { display: flex; align-items: flex-start; margin: 15px 0; }
        .step-number { background: #1f514c; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0; }
        .contact-info { background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { background-color: #2d3748; color: white; padding: 25px; text-align: center; }
        .footer p { margin: 5px 0; opacity: 0.9; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="success-icon">✅</div>
          <h1>Application Received!</h1>
          <p>Thank you for applying to Himriti Public School</p>
        </div>
        
        <div class="content">
          <div class="highlight-box">
            <h2>Dear ${sanitizeContent(data.parent.primaryParentName)},</h2>
            <p>We have successfully received the admission application for <strong>${sanitizeContent(data.student.fullName)}</strong> for <strong>${gradeLabel}</strong>.</p>
            <div class="ref-number">Application #${applicationRef}</div>
            <p><em>Please save this reference number for your records.</em></p>
          </div>
          
          <div class="next-steps">
            <h3>📋 What Happens Next?</h3>
            <div class="step-item">
              <div class="step-number">1</div>
              <div>
                <strong>Application Review (1-2 business days)</strong><br>
                Our admissions team will review your application and all submitted documents.
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div>
                <strong>Assessment & Interview Scheduling (3-5 business days)</strong><br>
                We'll contact you to schedule a student assessment and family interview session.
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div>
                <strong>Admission Decision (Within 2 weeks)</strong><br>
                You'll receive our admission decision via email and phone call.
              </div>
            </div>
            <div class="step-item">
              <div class="step-number">4</div>
              <div>
                <strong>Enrollment Process (If accepted)</strong><br>
                Complete enrollment paperwork and secure your child's place for April 2026.
              </div>
            </div>
          </div>
          
          <div class="contact-info">
            <h3>📞 Need Help or Have Questions?</h3>
            <p><strong>Email:</strong> himritihigh@gmail.com</p>
            <p><strong>Phone:</strong> +91 90154 17203</p>
            <p><strong>WhatsApp:</strong> +91 90154 17203</p>
            <p><strong>Office Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM IST</p>
          </div>
          
          <p>We're excited about the possibility of welcoming ${sanitizeContent(data.student.fullName)} to the Himriti family. Our school opens in April 2026, and we're building something truly special in the heart of the Himalayas.</p>
          
          <p>Thank you for choosing Himriti Public School for your child's educational journey.</p>
          
          <p>Warm regards,<br>
          <strong>The Admissions Team</strong><br>
          Himriti Public School</p>
        </div>
        
        <div class="footer">
          <p><strong>Himriti Public School</strong></p>
          <p>Rampur Bushahr, Shimla, Himachal Pradesh - 172001</p>
          <p>Application Reference: ${applicationRef}</p>
          <p><em>Embracing Heritage, Inspiring Future</em></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text email for school administration
 */
function generateAdminEmailText(data: AdmissionFormData, applicationRef: string): string {
  const gradeLabel = GRADE_OPTIONS.find(g => g.value === data.student.gradeApplyingFor)?.label || 'Not specified';
  const relationshipLabel = RELATIONSHIP_OPTIONS.find(r => r.value === data.parent.relationshipToStudent)?.label || 'Not specified';
  const referralLabel = REFERRAL_SOURCE_OPTIONS.find(s => s.value === data.additional.howDidYouHear)?.label || 'Not specified';

  return `
HIMRITI PUBLIC SCHOOL - NEW ADMISSION APPLICATION
Application Reference: ${applicationRef}

STUDENT INFORMATION:
====================
Student Name: ${data.student.fullName}
Grade Applying For: ${gradeLabel}
${data.student.currentSchool ? `Current School: ${data.student.currentSchool}` : ''}
${data.student.studentEmail ? `Student Email: ${data.student.studentEmail}` : ''}

PARENT/GUARDIAN INFORMATION:
============================
Primary Parent/Guardian: ${data.parent.primaryParentName}
Relationship: ${relationshipLabel}
Email: ${data.parent.email}
${data.parent.phoneNumber ? `Phone: ${data.parent.phoneNumber}` : ''}
${data.parent.secondaryContactName ? `Secondary Contact: ${data.parent.secondaryContactName}` : ''}
${data.parent.secondaryContactPhone ? `Secondary Phone: ${data.parent.secondaryContactPhone}` : ''}

${data.address.homeAddress ? `ADDRESS INFORMATION:
====================
Home Address: ${data.address.homeAddress}
${data.address.city ? `City: ${data.address.city}` : ''}
${data.address.stateProvince ? `State/Province: ${data.address.stateProvince}` : ''}
${data.address.zipPostalCode ? `ZIP/Postal Code: ${data.address.zipPostalCode}` : ''}
${data.address.country ? `Country: ${data.address.country}` : ''}
` : ''}

PERSONAL STATEMENT:
===================
${data.academic.reasonForApplication}

${data.academic.specialNeeds ? `SPECIAL NEEDS & ACCOMMODATIONS:
================================
${data.academic.specialNeeds}
` : ''}

ADDITIONAL INFORMATION:
=======================
How they heard about us: ${referralLabel}
${data.additional.emergencyContactName ? `Emergency Contact: ${data.additional.emergencyContactName}` : ''}
${data.additional.emergencyContactPhone ? `Emergency Phone: ${data.additional.emergencyContactPhone}` : ''}
Application Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

NEXT STEPS:
===========
1. Review application within 48 hours
2. Schedule student assessment and family interview
3. Request additional documents if needed
4. Send admission decision by email

---
This application was submitted through the Himriti Public School website.
Please respond to the family within 48 hours to maintain our commitment to excellent service.
  `.trim();
}

/**
 * Generate plain text email for applicant family
 */
function generateApplicantEmailText(data: AdmissionFormData, applicationRef: string): string {
  const gradeLabel = GRADE_OPTIONS.find(g => g.value === data.student.gradeApplyingFor)?.label || 'Not specified';
  
  return `
HIMRITI PUBLIC SCHOOL - APPLICATION RECEIVED

Dear ${data.parent.primaryParentName},

We have successfully received the admission application for ${data.student.fullName} for ${gradeLabel}.

Application Reference: ${applicationRef}
Please save this reference number for your records.

WHAT HAPPENS NEXT?

1. Application Review (1-2 business days)
   Our admissions team will review your application and all submitted documents.

2. Assessment & Interview Scheduling (3-5 business days)
   We'll contact you to schedule a student assessment and family interview session.

3. Admission Decision (Within 2 weeks)
   You'll receive our admission decision via email and phone call.

4. Enrollment Process (If accepted)
   Complete enrollment paperwork and secure your child's place for April 2026.

CONTACT INFORMATION:
Email: himritihigh@gmail.com
Phone: +91 90154 17203
WhatsApp: +91 90154 17203
Office Hours: Monday-Friday, 9:00 AM - 5:00 PM IST

We're excited about the possibility of welcoming ${data.student.fullName} to the Himriti family. Our school opens in April 2026, and we're building something truly special in the heart of the Himalayas.

Thank you for choosing Himriti Public School for your child's educational journey.

Warm regards,
The Admissions Team
Himriti Public School

Rampur Bushahr, Shimla, Himachal Pradesh - 172001
Application Reference: ${applicationRef}
"Embracing Heritage, Inspiring Future"
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
      console.warn(`Rate limit exceeded for admission application from IP: ${clientIP}`);
      return NextResponse.json(
        { 
          error: 'Too many admission applications. Please wait before submitting another application.',
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
      console.error('Invalid JSON in admission application request:', error);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate input data against admission schema
    const validationResult = admissionFormSchema.safeParse(body);
    if (!validationResult.success) {
      console.warn('Admission application validation failed:', validationResult.error.errors);
      return NextResponse.json(
        { 
          error: 'Invalid application data',
          details: validationResult.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;
    const applicationRef = generateApplicationRef();
    const gradeLabel = GRADE_OPTIONS.find(g => g.value === validatedData.student.gradeApplyingFor)?.label || 'Not specified';

    // Generate email content
    const adminHtmlContent = generateAdminEmailHTML(validatedData, applicationRef);
    const adminTextContent = generateAdminEmailText(validatedData, applicationRef);
    const applicantHtmlContent = generateApplicantEmailHTML(validatedData, applicationRef);
    const applicantTextContent = generateApplicantEmailText(validatedData, applicationRef);

    // Send email to school administration
    console.log(`Sending admission application to school administration for: ${validatedData.student.fullName}`);
    
    const adminEmailData = {
      from: 'Himriti Public School Admissions <admissions@himriti.com>',
      to: ['himritihigh@gmail.com'],
      replyTo: validatedData.parent.email,
      subject: `New Admission Application: ${gradeLabel} - ${validatedData.student.fullName} [${applicationRef}]`,
      html: adminHtmlContent,
      text: adminTextContent,
      headers: {
        'X-Priority': '2', // High priority
        'X-Mailer': 'Himriti Public School Admissions System',
        'X-Source-IP': clientIP,
        'X-Application-Ref': applicationRef,
      },
      tags: [
        { name: 'source', value: 'admission-application' },
        { name: 'grade', value: validatedData.student.gradeApplyingFor || 'unknown' },
        { name: 'recipient', value: 'school-admin' }
      ]
    };

    const { data: adminEmailResult, error: adminEmailError } = await resend.emails.send(adminEmailData);

    if (adminEmailError) {
      console.error('Failed to send admin email:', adminEmailError);
      return NextResponse.json(
        { error: 'Failed to send application to school. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    // Send confirmation email to applicant family
    console.log(`Sending confirmation email to applicant family: ${validatedData.parent.email}`);
    
    const applicantEmailData = {
      from: 'Himriti Public School Admissions <admissions@himriti.com>',
      to: [validatedData.parent.email],
      subject: `Application Received - ${validatedData.student.fullName} for ${gradeLabel} [${applicationRef}]`,
      html: applicantHtmlContent,
      text: applicantTextContent,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Himriti Public School Admissions System',
        'X-Application-Ref': applicationRef,
      },
      tags: [
        { name: 'source', value: 'admission-confirmation' },
        { name: 'grade', value: validatedData.student.gradeApplyingFor || 'unknown' },
        { name: 'recipient', value: 'applicant-family' }
      ]
    };

    const { data: applicantEmailResult, error: applicantEmailError } = await resend.emails.send(applicantEmailData);

    if (applicantEmailError) {
      console.warn('Failed to send confirmation email to family:', applicantEmailError);
      // Don't fail the entire request if family email fails, but log it
    }

    // Log successful submission
    const processingTime = Date.now() - startTime;
    console.log(`Admission application processed successfully:`, {
      applicationRef,
      studentName: validatedData.student.fullName,
      grade: gradeLabel,
      parentEmail: validatedData.parent.email,
      adminEmailId: adminEmailResult?.id,
      applicantEmailId: applicantEmailResult?.id,
      processingTime: `${processingTime}ms`,
      timestamp: new Date().toISOString(),
      clientIP: clientIP
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Admission application submitted successfully! You will receive a confirmation email shortly.',
        applicationRef,
        adminEmailId: adminEmailResult?.id,
        applicantEmailId: applicantEmailResult?.id,
        processingTime: processingTime
      },
      { status: 200 }
    );

  } catch (error) {
    // Log unexpected errors
    const processingTime = Date.now() - startTime;
    console.error('Unexpected error in admission application API:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      processingTime: `${processingTime}ms`
    });

    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your application. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle unsupported HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit admission applications.' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit admission applications.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit admission applications.' },
    { status: 405 }
  );
}