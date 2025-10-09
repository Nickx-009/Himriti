import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured. Please contact the administrator.' },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await req.json();

    const emailContent = `
      <h2>New Job Application - Himriti Public School</h2>

      <h3>Position Applied For</h3>
      <p><strong>Job Title:</strong> ${data.jobTitle}</p>
      <p><strong>Department:</strong> ${data.department}</p>

      <h3>Applicant Information</h3>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Current Location:</strong> ${data.currentLocation}</p>

      <h3>Qualifications</h3>
      <p><strong>Highest Qualification:</strong> ${data.qualification}</p>
      <p><strong>Years of Experience:</strong> ${data.experience}</p>
      ${data.resumeUrl ? `<p><strong>Resume:</strong> <a href="${data.resumeUrl}">${data.resumeUrl}</a></p>` : '<p><strong>Resume:</strong> Not provided</p>'}

      <h3>Cover Letter / Why are you a good fit?</h3>
      <p style="white-space: pre-wrap;">${data.coverLetter}</p>

      <hr>
      <p><em>This application was submitted through the Himriti Public School careers page.</em></p>
    `;

    await resend.emails.send({
      from: 'Himriti Careers <onboarding@resend.dev>',
      to: 'hello@himriti.com',
      subject: `Job Application: ${data.jobTitle} - ${data.fullName}`,
      html: emailContent,
      replyTo: data.email,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending job application email:', error);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 }
    );
  }
}
