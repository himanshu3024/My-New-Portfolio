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

    // Simulate database save
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Simulate email notification
    await new Promise((resolve) => setTimeout(resolve, 300))

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