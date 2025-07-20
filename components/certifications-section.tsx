"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Star, CheckCircle, Trophy, GraduationCap, Shield, Clock, ExternalLink, Calendar, BookOpen, Target } from "lucide-react"

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "AZ-104 Microsoft Azure Administrator",
      issuer: "Microsoft",
      date: "2024",
      level: "Professional",
      icon: Award,
      color: "#0078D4",
      brandIcon: "🔷",
      skills: ["Azure VMs", "Storage Management", "Networking", "Identity Management"],
      status: "In Progress",
      progress: 75,
      estimatedCompletion: "Q2 2024",
      studyHours: "40/60",
      verificationUrl: "https://www.credly.com/badges/azure-admin",
      credentialId: "AZ-104-2024-001",
      difficulty: "Intermediate",
      examDuration: "180 minutes",
      passingScore: "700/1000"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      level: "Foundational",
      icon: Trophy,
      color: "#FF9900",
      brandIcon: "☁️",
      skills: ["AWS Fundamentals", "Cloud Concepts", "Security", "Pricing"],
      status: "In Progress",
      progress: 60,
      estimatedCompletion: "Q2 2024",
      studyHours: "25/40",
      verificationUrl: "https://aws.amazon.com/verification",
      credentialId: "AWS-CP-2024-001",
      difficulty: "Beginner",
      examDuration: "90 minutes",
      passingScore: "700/1000"
    },
    {
      title: "Google Cloud Data Analytics Professional",
      issuer: "Google Cloud",
      date: "2024",
      level: "Professional",
      icon: Star,
      color: "#4285F4",
      brandIcon: "📊",
      skills: ["BigQuery", "Data Pipeline", "Machine Learning", "Analytics"],
      status: "In Progress",
      progress: 45,
      estimatedCompletion: "Q3 2024",
      studyHours: "30/80",
      verificationUrl: "https://www.credential.net/gcp-data",
      credentialId: "GCP-DA-2024-001",
      difficulty: "Advanced",
      examDuration: "120 minutes",
      passingScore: "80%"
    },
    {
      title: "Google Cloud Cybersecurity Professional",
      issuer: "Google Cloud",
      date: "2024",
      level: "Professional",
      icon: Shield,
      color: "#34A853",
      brandIcon: "🔒",
      skills: ["Security Operations", "Incident Response", "Risk Management", "Compliance"],
      status: "In Progress",
      progress: 30,
      estimatedCompletion: "Q3 2024",
      studyHours: "20/70",
      verificationUrl: "https://www.credential.net/gcp-security",
      credentialId: "GCP-CS-2024-001",
      difficulty: "Advanced",
      examDuration: "120 minutes",
      passingScore: "80%"
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Google",
      date: "2024",
      level: "Professional",
      icon: CheckCircle,
      color: "#EA4335",
      brandIcon: "📈",
      skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
      status: "In Progress",
      progress: 85,
      estimatedCompletion: "Q1 2024",
      studyHours: "50/60",
      verificationUrl: "https://www.credential.net/google-data",
      credentialId: "GDA-2024-001",
      difficulty: "Intermediate",
      examDuration: "90 minutes",
      passingScore: "80%"
    },
    {
      title: "Google Project Management Professional",
      issuer: "Google",
      date: "2024",
      level: "Professional",
      icon: GraduationCap,
      color: "#FBBC04",
      brandIcon: "📋",
      skills: ["Agile", "Scrum", "Risk Management", "Stakeholder Management"],
      status: "In Progress",
      progress: 90,
      estimatedCompletion: "Q1 2024",
      studyHours: "45/50",
      verificationUrl: "https://www.credential.net/google-pm",
      credentialId: "GPM-2024-001",
      difficulty: "Intermediate",
      examDuration: "90 minutes",
      passingScore: "80%"
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
            Professional<span className="font-semibold"> Certifications</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Currently preparing for industry-recognized certifications across cloud platforms, data analytics, 
            cybersecurity, and project management to enhance my professional expertise.
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
            { label: "Certifications", value: "6", icon: Award },
            { label: "Cloud Platforms", value: "3", icon: Star },
            { label: "Study Hours", value: "150+", icon: BookOpen },
            { label: "Target Date", value: "2024", icon: Target },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
              <motion.div
                className="text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
              >
                <stat.icon className="w-8 h-8 mr-2 text-blue-600" />
                {stat.value}
              </motion.div>
              <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
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
              className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}, transparent)`,
                }}
              />

              {/* Header Section */}
              <div className="relative z-10">
                {/* Certification Icon & Status */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-4 rounded-2xl relative shadow-lg" style={{ backgroundColor: `${cert.color}15` }}>
                      <cert.icon className="w-8 h-8" style={{ color: cert.color }} />
                      <span className="absolute -top-2 -right-2 text-xl">{cert.brandIcon}</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end space-y-2">
                    <div className="text-xs text-slate-500 font-medium">{cert.date}</div>
                    <div
                      className={`text-xs font-semibold px-3 py-1 rounded-full text-white flex items-center space-x-1 shadow-lg`}
                      style={{
                        backgroundColor: cert.status === "Certified" ? "#10B981" : "#F59E0B",
                      }}
                    >
                      <Clock className="w-3 h-3" />
                      <span>{cert.status}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600 font-medium">Progress</span>
                    <span className="text-slate-900 font-semibold">{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ backgroundColor: cert.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${cert.progress}%` }}
                      transition={{ delay: index * 0.1 + 1, duration: 1 }}
                    />
                  </div>
                </div>

                {/* Certification Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer & Level */}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-600 font-medium">{cert.issuer}</p>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                    {cert.level}
                  </span>
                </div>

                {/* Study Progress */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-700">Study Hours</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">{cert.studyHours}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-semibold text-slate-700">Target</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">{cert.estimatedCompletion}</p>
                  </div>
                </div>

                {/* Exam Details */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4 mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Exam Details</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-600">Duration:</span>
                      <p className="font-semibold text-slate-900">{cert.examDuration}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Passing Score:</span>
                      <p className="font-semibold text-slate-900">{cert.passingScore}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Difficulty:</span>
                      <p className="font-semibold text-slate-900">{cert.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-slate-600">Credential ID:</span>
                      <p className="font-semibold text-slate-900 truncate">{cert.credentialId}</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-slate-900">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white text-slate-700 text-xs rounded-full border border-slate-200 font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Verify</span>
                  </motion.a>
                  
                  <motion.button
                    className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Achieve Excellence</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Committed to continuous learning and professional development. These certifications will validate my expertise 
            and demonstrate my dedication to staying current with industry best practices.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Study Progress
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
