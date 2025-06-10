const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const AWS = require('aws-sdk')

// Configure AWS SES
const ses = new AWS.SES({ region: 'ap-southeast-2' })

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, POST, GET, OPTIONS")
  next()
});

// Handle preflight requests
app.options('/contact', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, POST, GET, OPTIONS")
  res.sendStatus(200)
});

// Contact form submission endpoint
app.post('/contact', async function(req, res) {
  try {
    const { name, email, phone, service, message, preferWoman, callbackPreferred } = req.body

    console.log('Received contact form submission:', { name, email, phone, service, preferWoman, callbackPreferred })

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, service, and message are required fields'
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      })
    }

    // Prepare preferences text
    const preferences = []
    if (preferWoman) preferences.push('Prefer to speak with a woman')
    if (callbackPreferred) preferences.push('Prefer a callback over email response')
    const preferencesText = preferences.length > 0 ? `\n\nPreferences:\n${preferences.join('\n')}` : ''

    // Prepare email content
    const emailText = `
New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service of Interest: ${service}

Message:
${message}${preferencesText}

---
Sent from Insight Investigations website contact form
    `.trim()

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8f9fa;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header with Logo -->
                <tr>
                  <td style="padding: 40px 40px 20px 40px; text-align: center; background-color: #1a1a1a; border-radius: 8px 8px 0 0;">
                    <img src="https://www.insightinvestigations.co.nz/logo_extended.png" alt="Insight Investigations" style="height: 60px; width: auto;" />
                  </td>
                </tr>
                
                <!-- Main Content -->
                <tr>
                  <td style="padding: 40px 40px 30px 40px;">
                    <h1 style="margin: 0 0 30px 0; font-size: 28px; font-weight: 600; color: #1a1a1a; text-align: center;">New Contact Form Submission</h1>
                    
                    <!-- Contact Details -->
                    <div style="background-color: #f8f9fa; padding: 25px; margin: 25px 0; border-radius: 8px; border-left: 4px solid #1a1a1a;">
                      <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">Contact Details</h3>
                      <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 80px;">Name:</td>
                          <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
                          <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a1a1a; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-weight: 600; color: #374151;">Phone:</td>
                          <td style="padding: 8px 0; color: #1a1a1a;">${phone || 'Not provided'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-weight: 600; color: #374151;">Service:</td>
                          <td style="padding: 8px 0; color: #1a1a1a;">${service}</td>
                        </tr>
                      </table>
                    </div>
                    
                    <!-- Message -->
                    <div style="background-color: #ffffff; border: 1px solid #e5e7eb; padding: 25px; margin: 25px 0; border-radius: 8px;">
                      <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">Message:</h3>
                      <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    ${preferences.length > 0 ? `
                    <!-- Preferences -->
                    <div style="background-color: #f8f9fa; border: 1px solid #e5e7eb; padding: 25px; margin: 25px 0; border-radius: 8px;">
                      <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">Preferences:</h3>
                      <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.6; color: #374151;">
                        ${preferences.map(p => `<li style="margin-bottom: 8px;">${p}</li>`).join('')}
                      </ul>
                    </div>
                    ` : ''}
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
                    <p style="margin: 0; font-size: 13px; color: #9ca3af;">Sent from Insight Investigations website contact form</p>
                    <p style="margin: 10px 0 0 0; font-size: 13px; color: #9ca3af;">© 2025 Insight Investigations. All rights reserved.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // SES email parameters for notification to Luke
    const notificationParams = {
      Destination: {
        ToAddresses: [process.env.CONTACT_EMAIL || 'luke@insightinvestigations.co.nz']
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: emailHtml
          },
          Text: {
            Charset: 'UTF-8',
            Data: emailText
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `New Contact Form Submission from ${name}`
        }
      },
      Source: process.env.FROM_EMAIL || 'noreply@insightinvestigations.co.nz',
      ReplyToAddresses: ['luke@insightinvestigations.co.nz']
    }

    // Confirmation email content for sender
    const confirmationText = `
Dear ${name},

Thank you for contacting Insight Investigations. We have received your enquiry regarding ${service} and will respond within 24 hours.

Your message:
${message}${preferencesText}

If you need immediate assistance, please call us directly.

Best regards,
Luke Valentine
Insight Investigations

---
This is an automated confirmation. Please do not reply to this email.
    `.trim()

    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting Insight Investigations</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8f9fa;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header with Logo -->
                <tr>
                  <td style="padding: 40px 40px 20px 40px; text-align: center; background-color: #1a1a1a; border-radius: 8px 8px 0 0;">
                    <img src="https://www.insightinvestigations.co.nz/logo_extended.png" alt="Insight Investigations" style="height: 60px; width: auto;" />
                  </td>
                </tr>
                
                <!-- Main Content -->
                <tr>
                  <td style="padding: 40px 40px 30px 40px;">
                    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600; color: #1a1a1a; text-align: center;">Thank you for your enquiry</h1>
                    
                    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">Dear ${name},</p>
                    
                    <p style="margin: 0 0 25px 0; font-size: 16px; line-height: 1.6; color: #374151;">Thank you for contacting Insight Investigations. We have received your enquiry regarding <strong>${service}</strong> and will respond within 24 hours.</p>
                    
                    <!-- Message Box -->
                    <div style="background-color: #f8f9fa; border-left: 4px solid #1a1a1a; padding: 20px; margin: 25px 0; border-radius: 4px;">
                      <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">Your message:</h3>
                      <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4b5563; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    ${preferences.length > 0 ? `
                    <!-- Preferences Box -->
                    <div style="background-color: #f0f9ff; border-left: 4px solid #1a1a1a; padding: 20px; margin: 25px 0; border-radius: 4px;">
                      <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">Your preferences:</h3>
                      <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.6; color: #4b5563;">
                        ${preferences.map(p => `<li style="margin-bottom: 8px;">${p}</li>`).join('')}
                      </ul>
                    </div>
                    ` : ''}
                    
                    <p style="margin: 25px 0 0 0; font-size: 16px; line-height: 1.6; color: #374151;">If you need immediate assistance, please call us directly.</p>
                  </td>
                </tr>
                
                <!-- Signature -->
                <tr>
                  <td style="padding: 0 40px 40px 40px;">
                    <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
                      <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">Best regards,</p>
                      <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">Luke Valentine</p>
                      <p style="margin: 0; font-size: 15px; color: #6b7280;">Insight Investigations</p>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
                    <p style="margin: 0; font-size: 13px; color: #9ca3af;">This is an automated confirmation. Please do not reply to this email.</p>
                    <p style="margin: 10px 0 0 0; font-size: 13px; color: #9ca3af;">© 2025 Insight Investigations. All rights reserved.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Confirmation email parameters for sender
    const confirmationParams = {
      Destination: {
        ToAddresses: [email]
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: confirmationHtml
          },
          Text: {
            Charset: 'UTF-8',
            Data: confirmationText
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Thank you for contacting Insight Investigations'
        }
      },
      Source: process.env.FROM_EMAIL || 'noreply@insightinvestigations.co.nz',
      ReplyToAddresses: ['luke@insightinvestigations.co.nz']
    }

    // Send notification email to Luke
    const notificationResult = await ses.sendEmail(notificationParams).promise()
    
    // Send confirmation email to sender
    const confirmationResult = await ses.sendEmail(confirmationParams).promise()
    
    console.log('Notification email sent to Luke:', notificationResult.MessageId)
    console.log('Confirmation email sent to sender:', confirmationResult.MessageId)

    res.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
      notificationId: notificationResult.MessageId,
      confirmationId: confirmationResult.MessageId
    })

  } catch (error) {
    console.error('Error sending email:', error)
    
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later or contact us directly.',
      error: error.message
    })
  }
});

// Health check endpoint
app.get('/contact', function(req, res) {
  res.json({
    success: true,
    message: 'Contact API is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(3000, function() {
    console.log("Contact form API started")
});

module.exports = app