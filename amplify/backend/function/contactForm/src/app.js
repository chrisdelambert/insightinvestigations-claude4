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
    const { name, email, phone, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields'
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

    // Prepare email content
    const emailText = `
New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
Sent from Insight Investigations website contact form
    `.trim()

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr>
      <p><em>Sent from Insight Investigations website contact form</em></p>
    `

    // SES email parameters
    const params = {
      Destination: {
        ToAddresses: [process.env.CONTACT_EMAIL || 'info@insightinvestigations.co.nz']
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
      ReplyToAddresses: [email]
    }

    // Send email via SES
    const result = await ses.sendEmail(params).promise()
    
    console.log('Email sent successfully:', result.MessageId)

    res.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
      messageId: result.MessageId
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