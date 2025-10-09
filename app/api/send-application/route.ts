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
      <h2>New Student Application - Himriti</h2>

      <h3>Student Information</h3>
      <p><strong>Name:</strong> ${data.studentFirstName} ${data.studentLastName}</p>
      <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Grade Applying For:</strong> ${data.gradeApplyingFor}</p>
      ${data.previousSchool ? `<p><strong>Previous School:</strong> ${data.previousSchool}</p>` : ''}

      <h3>Parent/Guardian Information</h3>
      <p><strong>Name:</strong> ${data.parentFirstName} ${data.parentLastName}</p>
      <p><strong>Relationship:</strong> ${data.relationship}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}

      <h3>Address</h3>
      <p>${data.address}</p>
      <p>${data.city}, ${data.state} - ${data.pincode}</p>

      <h3>Emergency Contact</h3>
      <p><strong>Name:</strong> ${data.emergencyContactName}</p>
      <p><strong>Phone:</strong> ${data.emergencyContactPhone}</p>

      <h3>Medical Information</h3>
      ${data.medicalConditions ? `<p><strong>Medical Conditions:</strong> ${data.medicalConditions}</p>` : '<p><strong>Medical Conditions:</strong> None specified</p>'}
      ${data.allergies ? `<p><strong>Allergies:</strong> ${data.allergies}</p>` : '<p><strong>Allergies:</strong> None specified</p>'}
      ${data.specialNeeds ? `<p><strong>Special Needs:</strong> ${data.specialNeeds}</p>` : '<p><strong>Special Needs:</strong> None specified</p>'}

      <h3>Additional Information</h3>
      ${data.extracurricular ? `<p><strong>Extracurricular Interests:</strong> ${data.extracurricular}</p>` : ''}
      <p><strong>Why Himriti?</strong> ${data.whyHimriti}</p>

      <hr>
      <p><em>This application was submitted through the Himriti website.</em></p>
    `;

    await resend.emails.send({
      from: 'Himriti Applications <onboarding@resend.dev>',
      to: 'hello@himriti.com',
      subject: `New Application: ${data.studentFirstName} ${data.studentLastName} - ${data.gradeApplyingFor}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending application email:', error);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 }
    );
  }
}
