// Email service with multiple providers
import { NextRequest } from "next/server"

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
  ip: string
  userAgent: string
}

export class EmailService {
  private static instance: EmailService

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService()
    }
    return EmailService.instance
  }

  async sendContactFormEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    // Try SendGrid first
    const sendGridResult = await this.sendViaSendGrid(data)
    if (sendGridResult.success) {
      return sendGridResult
    }

    // Fallback to Resend (free tier available)
    const resendResult = await this.sendViaResend(data)
    if (resendResult.success) {
      return resendResult
    }

    // Fallback to EmailJS (client-side, free tier)
    const emailJSResult = await this.sendViaEmailJS(data)
    if (emailJSResult.success) {
      return emailJSResult
    }

    return {
      success: false,
      message: "All email services failed. Check console logs for details."
    }
  }

  private async sendViaSendGrid(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    const sendGridApiKey = process.env.SENDGRID_API_KEY
    
    if (!sendGridApiKey || sendGridApiKey === "YOUR_SENDGRID_API_KEY_HERE" || sendGridApiKey === "SENDGRID_API_KEY") {
      return { success: false, message: "SendGrid not configured - please use a real API key" }
    }

    try {
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${sendGridApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: "gandhi111000@hotmail.com", name: "Himanshu Gandhi" }],
            subject: `Portfolio Contact: ${data.subject}`
          }],
          from: { email: "gandhi111000@hotmail.com", name: "Portfolio Contact Form" },
          reply_to: { email: data.email, name: data.name },
          content: [{
            type: "text/html",
            value: this.generateEmailHTML(data)
          }]
        })
      })

      if (response.ok) {
        console.log("✅ Email sent via SendGrid")
        return { success: true, message: "Email sent successfully via SendGrid" }
      } else {
        console.error("SendGrid error:", await response.text())
        return { success: false, message: "SendGrid failed" }
      }
    } catch (error) {
      console.error("SendGrid error:", error)
      return { success: false, message: "SendGrid error" }
    }
  }

  private async sendViaResend(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    const resendApiKey = process.env.RESEND_API_KEY
    
    if (!resendApiKey) {
      return { success: false, message: "Resend not configured" }
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
          to: ["gandhi111000@hotmail.com"],
          subject: `Portfolio Contact: ${data.subject}`,
          html: this.generateEmailHTML(data),
          reply_to: data.email
        })
      })

      if (response.ok) {
        console.log("✅ Email sent via Resend")
        return { success: true, message: "Email sent successfully via Resend" }
      } else {
        console.error("Resend error:", await response.text())
        return { success: false, message: "Resend failed" }
      }
    } catch (error) {
      console.error("Resend error:", error)
      return { success: false, message: "Resend error" }
    }
  }

  private async sendViaEmailJS(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    // EmailJS is a client-side service, so we'll return instructions
    console.log("📧 EmailJS instructions:")
    console.log("1. Sign up at https://www.emailjs.com/")
    console.log("2. Create a service (Gmail, Outlook, etc.)")
    console.log("3. Add your EmailJS public key to environment variables")
    console.log("4. Update the contact form to use EmailJS client-side")
    
    return { success: false, message: "EmailJS requires client-side setup" }
  }

  private generateEmailHTML(data: ContactFormData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #3B82F6; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #3B82F6; }
          .footer { background: #f1f5f9; padding: 15px; border-radius: 0 0 8px 8px; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🚨 New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p><strong>Submission Details:</strong></p>
            <p>Time: ${data.timestamp}</p>
            <p>IP Address: ${data.ip}</p>
            <p>User Agent: ${data.userAgent}</p>
          </div>
        </div>
      </body>
      </html>
    `
  }
} 