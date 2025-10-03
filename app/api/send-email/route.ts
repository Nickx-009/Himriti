import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with better error handling
let resend: Resend | null = null;

try {
  if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
} catch (error) {
  console.error('Failed to initialize Resend:', error);
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is properly configured
    if (!resend) {
      console.error('Resend not configured - missing RESEND_API_KEY');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at himritihigh@gmail.com' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { parentName, email, phoneNumber, gradeLevel, inquiryType, message } = body;

    // Validate required fields
    if (!parentName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Himriti Public School <onboarding@resend.dev>',
      to: ['himritihigh@gmail.com'],
      replyTo: email, // Allow direct reply to the parent
      subject: `New Contact Form Submission - ${inquiryType || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f514c; border-bottom: 2px solid #1f514c; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #faf7f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0;">Contact Information</h3>
            <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phoneNumber ? `<p><strong>Phone Number:</strong> ${phoneNumber}</p>` : ''}
            ${gradeLevel ? `<p><strong>Student Grade Level:</strong> ${gradeLevel}</p>` : ''}
            ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #2d3748; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #4a5568;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e6fffa; border-left: 4px solid #1f514c; border-radius: 4px;">
            <p style="margin: 0; color: #2d3748; font-size: 14px;">
              This message was sent from the Himriti Public School website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Contact Information:
        Parent/Guardian Name: ${parentName}
        Email: ${email}
        ${phoneNumber ? `Phone Number: ${phoneNumber}` : ''}
        ${gradeLevel ? `Student Grade Level: ${gradeLevel}` : ''}
        ${inquiryType ? `Inquiry Type: ${inquiryType}` : ''}
        
        Message:
        ${message}
        
        This message was sent from the Himriti Public School website contact form.
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}