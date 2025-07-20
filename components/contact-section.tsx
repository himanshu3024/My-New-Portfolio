"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Send,
  Calendar,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { toast } from "react-hot-toast";
// Local API route for contact form submission
async function submitContactForm(formData: any) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "Failed to submit form. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export default function EnhancedContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gandhi111000@hotmail.com",
      href: "mailto:gandhi111000@hotmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "437-267-3965",
      href: "tel:437-267-3965",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Toronto, Canada",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/himanshu-gandhi-891204160/",
      username: "@himanshu-gandhi",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/himanshu3024",
      username: "@himanshu3024",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      url: "#",
      username: "Live Portfolio",
    },
    {
      icon: Calendar,
      label: "Schedule",
      url: "#",
      username: "Book a Call",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await submitContactForm({
        ...formData,
        timestamp: new Date().toISOString(),
      })

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you for your message! I'll get back to you within 24 hours.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
        toast.success("Message sent! I'll get back to you soon.")
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Let's
            <span className="font-semibold"> Connect</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss cloud solutions, collaborate on innovative projects, or explore new opportunities? I'm
            always excited to connect with fellow professionals and potential collaborators.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-slate-900 mb-8">
              Get In Touch
            </motion.h3>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <motion.a
                    href={info.href}
                    className="flex items-center space-x-4 p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ y: -2, scale: 1.03 }}
                  >
                    <motion.div className="p-3 bg-blue-50 rounded-lg" whileHover={{ rotate: 12 }}>
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    <div>
                      <h4 className="text-slate-900 font-medium">{info.label}</h4>
                      <p className="text-slate-600">{info.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 ml-auto" />
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-semibold text-slate-900">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ y: -2, scale: 1.03 }}
                  >
                    <motion.div whileHover={{ rotate: 12 }}>
                      <social.icon className="w-5 h-5 text-slate-600" />
                    </motion.div>
                    <div>
                      <p className="text-slate-900 font-medium text-sm">{social.label}</p>
                      <p className="text-slate-500 text-xs">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={itemVariants} className="p-6 bg-green-50/80 backdrop-blur-md rounded-2xl border border-green-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-700 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-green-600 text-sm mb-3">
                Currently seeking full-time positions in cloud computing, DevOps, and project management roles.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Remote Work", "Toronto Area", "Contract", "Full-time"].map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-slate-900 mb-1">24h</div>
                <div className="text-slate-600 text-sm">Response Time</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-slate-900 mb-1">EST</div>
                <div className="text-slate-600 text-sm">Time Zone</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-8 space-y-8"
              autoComplete="off"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send a Message</h3>

              {/* Status Messages */}
              {submitStatus.type && (
                <motion.div
                  className={`p-4 rounded-lg flex items-center space-x-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Floating label input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 pt-6 pb-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-white peer"
                    required
                    autoComplete="name"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-4 top-2 text-slate-500 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-700 pointer-events-none bg-white px-1 rounded">
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 pt-6 pb-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-white peer"
                    required
                    autoComplete="email"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-4 top-2 text-slate-500 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-700 pointer-events-none bg-white px-1 rounded">
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 pt-6 pb-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-white peer"
                  required
                  placeholder=" "
                />
                <label htmlFor="subject" className="absolute left-4 top-2 text-slate-500 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-700 pointer-events-none bg-white px-1 rounded">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 pt-6 pb-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 bg-white min-h-[120px] peer"
                  required
                  rows={5}
                  placeholder=" "
                />
                <label htmlFor="message" className="absolute left-4 top-2 text-slate-500 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-700 pointer-events-none bg-white px-1 rounded">
                  Message
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2"><Send className="w-5 h-5 animate-spin" /> Sending...</span>
                ) : submitStatus.type === "success" ? (
                  <span className="flex items-center gap-2 text-green-200"><CheckCircle className="w-5 h-5" /> Sent!</span>
                ) : (
                  <span className="flex items-center gap-2"><Send className="w-5 h-5" /> Send Message</span>
                )}
              </motion.button>

              <p className="text-slate-500 text-sm text-center">
                I'll get back to you within 24 hours. Looking forward to connecting!
              </p>
            </motion.form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <motion.div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-slate-600 mb-8">
              Whether you're looking for a cloud computing professional, need project management expertise, or want to
              collaborate on innovative solutions, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:gandhi111000@hotmail.com"
                className="px-6 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Email Me Directly
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/himanshu-gandhi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-full hover:border-slate-900 hover:text-slate-900 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
