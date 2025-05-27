"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Star, CheckCircle, Trophy, GraduationCap, Shield } from "lucide-react"

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "AZ-104 Microsoft Azure Administrator",
      issuer: "LinkedIn Learning",
      date: "2024",
      level: "Professional",
      icon: Award,
      color: "#0078D4",
      brandIcon: "🔷",
      skills: ["Azure VMs", "Storage Management", "Networking", "Identity Management"],
      status: "Cert Prep Completed",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "LinkedIn Learning",
      date: "2024",
      level: "Foundational",
      icon: Trophy,
      color: "#FF9900",
      brandIcon: "☁️",
      skills: ["AWS Fundamentals", "Cloud Concepts", "Security", "Pricing"],
      status: "Cert Prep Completed",
    },
    {
      title: "Google Cloud Data Analytics Professional",
      issuer: "Coursera",
      date: "2024",
      level: "Professional",
      icon: Star,
      color: "#4285F4",
      brandIcon: "📊",
      skills: ["BigQuery", "Data Pipeline", "Machine Learning", "Analytics"],
      status: "Certified",
    },
    {
      title: "Google Cloud Cybersecurity Professional",
      issuer: "Coursera",
      date: "2024",
      level: "Professional",
      icon: Shield,
      color: "#34A853",
      brandIcon: "🔒",
      skills: ["Security Operations", "Incident Response", "Risk Management", "Compliance"],
      status: "Certified",
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Coursera",
      date: "2023",
      level: "Professional",
      icon: CheckCircle,
      color: "#EA4335",
      brandIcon: "📈",
      skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
      status: "Certified",
    },
    {
      title: "Google Project Management Professional",
      issuer: "Coursera",
      date: "2023",
      level: "Professional",
      icon: GraduationCap,
      color: "#FBBC04",
      brandIcon: "📋",
      skills: ["Agile", "Scrum", "Risk Management", "Stakeholder Management"],
      status: "Certified",
    },
  ]

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
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Certifications &<span className="font-semibold"> Learning</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through industry-recognized certifications across cloud
            platforms, data analytics, cybersecurity, and project management.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Professional Certificates", value: "6" },
            { label: "Cloud Platforms", value: "3" },
            { label: "Learning Hours", value: "200+" },
            { label: "Active Learning", value: "2024" },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center p-6 bg-slate-50 rounded-xl">
              <motion.div
                className="text-3xl font-bold text-slate-900 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Certification Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl relative" style={{ backgroundColor: `${cert.color}15` }}>
                    <cert.icon className="w-6 h-6" style={{ color: cert.color }} />
                    <span className="absolute -top-1 -right-1 text-lg">{cert.brandIcon}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end space-y-2">
                  <div className="text-xs text-slate-500">{cert.date}</div>
                  <div
                    className={`text-xs font-medium px-2 py-1 rounded-full text-white`}
                    style={{
                      backgroundColor: cert.status === "Certified" ? "#10B981" : cert.color,
                    }}
                  >
                    {cert.status}
                  </div>
                  {/* Move verification badge here instead of absolute positioning */}
                  {cert.status === "Certified" && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Certification Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-slate-500 text-sm mb-4">{cert.issuer}</p>

              {/* Level Badge */}
              <div className="mb-4">
                <span className="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                  {cert.level}
                </span>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Path */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">Current Learning Path</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "AWS Solutions Architect Associate",
              "Azure DevOps Engineer Expert",
              "Kubernetes Administrator (CKA)",
              "Terraform Associate",
            ].map((cert, index) => (
              <motion.div
                key={cert}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 1 }}
              >
                <span className="text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Learning Progress
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
