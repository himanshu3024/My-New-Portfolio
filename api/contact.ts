import type { NextApiRequest, NextApiResponse } from "next"

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

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Use POST.",
    })
  }

  try {
    const { name, email, subject, message }: ContactFormData = req.body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      })
    }

    // Here you would typically:
    // 1. Save to database (Azure SQL, Cosmos DB, etc.)
    // 2. Send email notification
    // 3. Log the submission

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return res.status(200).json({
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours.",
      data: {
        submittedAt: new Date().toISOString(),
        reference: `REF-${Date.now()}`,
      },
    })
  } catch (error) {
    console.error("Contact form error:", error)

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    })
  }
}
