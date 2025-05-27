"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send, Calendar, ArrowUpRight } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      username: "@himanshu",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
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
    <section ref={ref} className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
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
                    className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300 group"
                    whileHover={{ y: -2 }}
                  >
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
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
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300 group"
                    whileHover={{ y: -2 }}
                  >
                    <social.icon className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-slate-900 font-medium text-sm">{social.label}</p>
                      <p className="text-slate-500 text-xs">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={itemVariants} className="p-6 bg-green-50 rounded-xl border border-green-200">
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

          {/* Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send a Message</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="networking">Networking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project, opportunity, or how we can work together..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
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
                href="https://www.linkedin.com/in/himanshu-gandhi-891204160/"
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
