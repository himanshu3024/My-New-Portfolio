import { NextRequest, NextResponse } from "next/server"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

type ResponseData = {
  success: boolean
  message: string
  data?: any
}

export async function POST(request: NextRequest): Promise<NextResponse<ResponseData>> {
  try {
    const { name, email, subject, message }: ContactFormData = await request.json()

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      )
    }

    // Enhanced logging with detailed analytics
    const submissionData = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
      referer: request.headers.get("referer") || "direct",
      language: request.headers.get("accept-language") || "en",
    }

    console.log("Contact form submission:", submissionData)

    // Get SendGrid API key from environment
    const sendGridApiKey = process.env.SENDGRID_API_KEY
    
    console.log("🔍 Debug - Environment check:")
    console.log("🔍 SENDGRID_API_KEY:", sendGridApiKey ? "Found" : "Not found")
    console.log("🔍 RESEND_API_KEY:", process.env.RESEND_API_KEY ? "Found" : "Not found")
    console.log("🔍 NODE_ENV:", process.env.NODE_ENV)
    
    if (!sendGridApiKey) {
      console.warn("SendGrid API key not found in environment variables")
    }

    // Simulate database save
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Send email notification - Skip SendGrid due to Hotmail blocking, use Resend directly
    console.log("🚫 Skipping SendGrid due to Hotmail blocking - using Resend instead")
    await sendViaResend(submissionData)

    // Helper function to send via Resend
    async function sendViaResend(data: any) {
      const resendApiKey = process.env.RESEND_API_KEY
      
      console.log("🔍 Debug - RESEND_API_KEY:", resendApiKey ? "Found" : "Not found")
      console.log("🔍 Debug - All env vars:", Object.keys(process.env).filter(key => key.includes('RESEND')))
      
      if (!resendApiKey) {
        console.log("📧 Resend not configured - sign up at https://resend.com for free email service")
        console.log("💡 Make sure RESEND_API_KEY is in your .env file")
        return
      }

      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["varunrockx@gmail.com"],
            subject: `Portfolio Contact: ${data.subject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${data.name}</p>
                  <p><strong>Email:</strong> ${data.email}</p>
                  <p><strong>Subject:</strong> ${data.subject}</p>
                  <p><strong>Message:</strong></p>
                  <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3B82F6;">
                    ${data.message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                <div style="font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                  <p><strong>Submission Details:</strong></p>
                  <p>Time: ${data.timestamp}</p>
                  <p>IP Address: ${data.ip}</p>
                  <p>User Agent: ${data.userAgent}</p>
                </div>
              </div>
            `,
            reply_to: data.email
          })
        })

        if (response.ok) {
          console.log("✅ Email sent successfully via Resend")
    } else {
          console.error("Resend error:", await response.text())
        }
      } catch (error) {
        console.error("Resend error:", error)
      }
    }

    // Simulate analytics tracking
    await new Promise((resolve) => setTimeout(resolve, 200))

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours.",
      data: {
        submittedAt: new Date().toISOString(),
        reference: `REF-${Date.now()}`,
      },
    })
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET(): Promise<NextResponse<ResponseData>> {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed. Use POST.",
    },
    { status: 405 }
  )
} 