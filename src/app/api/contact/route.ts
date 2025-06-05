import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, preferWoman, callbackPreferred } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Construct email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service}
Message: ${message}

Preferences:
- Prefers to speak with a woman: ${preferWoman ? 'Yes' : 'No'}
- Prefers callback over email: ${callbackPreferred ? 'Yes' : 'No'}
    `.trim()

    // Email configuration
    const msg = {
      to: process.env.CONTACT_FORM_TO_EMAIL, // Your business email
      from: process.env.CONTACT_FORM_FROM_EMAIL, // Verified sender email
      subject: `New Inquiry: ${service} - ${name}`,
      text: emailContent,
      replyTo: email,
    }

    // Send email
    await sgMail.send(msg)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 