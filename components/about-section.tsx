"use client"

import type React from "react"

import { motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { GraduationCap, Briefcase, Award, TrendingUp } from "lucide-react"
import Image from "next/image";

// Magnetic Button Component
const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.1)
    y.set((e.clientY - centerY) * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Skill Progress Bar with Advanced Animations
const SkillBar = ({ skill, index, isInView }: { skill: any; index: number; isInView: boolean }) => {
  const progressRef = useRef<HTMLDivElement>(null)
  const progress = useMotionValue(0)
  const animatedProgress = useTransform(progress, [0, skill.level], [0, skill.level])

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        progress.set(skill.level)
      }, index * 200)
      return () => clearTimeout(timer)
    }
  }, [isInView, skill.level, index])

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <MagneticButton>
            <div className="p-3 rounded-xl relative overflow-hidden" style={{ backgroundColor: `${skill.color}15` }}>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20"
                style={{ backgroundColor: skill.color }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-xl relative z-10">{skill.icon}</span>
            </div>
          </MagneticButton>
          <div>
            <motion.span className="text-slate-900 font-medium" whileHover={{ color: skill.color }}>
              {skill.name}
            </motion.span>
            <p className="text-xs text-slate-500">{skill.category}</p>
          </div>
        </div>
        <motion.span
          className="text-slate-500 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          ref={progressRef}
          className="absolute top-0 left-0 h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 2,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.1 + 2,
              ease: "easeInOut",
            }}
          />

          {/* Pulse Effect */}
          <motion.div
            className="absolute top-0 right-0 h-full w-2 opacity-80"
            style={{ backgroundColor: skill.color }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.1 + 2,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "AWS", level: 90, category: "Cloud Platforms", color: "#FF9900", icon: "☁️" },
    { name: "Microsoft Azure", level: 95, category: "Cloud Platforms", color: "#0078D4", icon: "⚡" },
    { name: "Docker", level: 85, category: "DevOps", color: "#2496ED", icon: "🐳" },
    { name: "GitHub Actions", level: 88, category: "CI/CD", color: "#2088FF", icon: "🔄" },
    { name: "Node.js", level: 82, category: "Development", color: "#339933", icon: "🚀" },
    { name: "Shell Scripting", level: 80, category: "Automation", color: "#4EAA25", icon: "💻" },
    { name: "Network Security", level: 85, category: "Security", color: "#FF6B6B", icon: "🔒" },
    { name: "Project Management", level: 90, category: "Management", color: "#6366F1", icon: "📊" },
  ]

  const experience = [
    {
      title: "Cloud Computing Technologies Post Graduate Certificate",
      company: "George Brown College, Toronto",
      period: "May 2025 - Ongoing",
      type: "Education",
      icon: GraduationCap,
      color: "#3B82F6",
      description: "Postgraduate program focusing on cloud infrastructure, security, and modern DevOps practices.",
    },
    {
      title: "Project Management Post Graduate Certificate",
      company: "Fleming College, Toronto",
      period: "Apr 2024 - Dec 2024",
      type: "Education",
      icon: GraduationCap,
      color: "#8B5CF6",
      description: "Studied core concepts in Physics, Chemistry, and Mathematics with a strong emphasis on analytical and problem-solving skills.",
    },
    {
      title: "Bachelors in Science",
      company: "University of Rajasthan",
      period: "Jul 2015 – Aug 2019",
      type: "Education",
      icon: GraduationCap,
      color: "#10B981",
      description: "Provided technical support, system configuration, and infrastructure maintenance.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const slideInFromBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Animated Intro + Profile */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Profile Image */}
          <motion.div
            variants={slideInFromLeft}
            className="flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl bg-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: 160, height: 160 }}
          >
            <Image
              src="/placeholder-user.jpg"
              alt="Himanshu Gandhi profile"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
          {/* Animated Text Reveal */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={slideInFromRight}
          >
            <motion.h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</span>
            </motion.h2>
            <motion.p className="text-xl text-slate-700 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              Hi! I’m Himanshu Gandhi, a passionate Cloud Computing Specialist and DevOps Engineer dedicated to building scalable, secure, and innovative solutions.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Quick Facts & Why Cloud */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Quick Facts Card */}
          <motion.div
            className="rounded-2xl p-6 bg-white/70 backdrop-blur-md shadow-xl border border-slate-200 flex flex-col gap-3 items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-blue-700 mb-2">Quick Facts</h3>
            <div className="flex items-center gap-2 text-slate-700"><span className="font-semibold">Location:</span> Toronto, Canada</div>
            <div className="flex items-center gap-2 text-slate-700"><span className="font-semibold">Availability:</span> Open for new opportunities</div>
            <div className="flex items-center gap-2 text-slate-700"><span className="font-semibold">Hobbies:</span> Cloud tinkering, Tech Blogging, Hiking, Chess</div>
          </motion.div>
          {/* Why I Love Cloud Computing */}
          <motion.div
            className="rounded-2xl p-6 bg-gradient-to-br from-blue-100/80 via-white/60 to-purple-100/80 shadow-xl border border-blue-200 flex flex-col gap-3 items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-blue-700 mb-2">Why I Love Cloud Computing</h3>
            <p className="text-slate-700 text-base">
              <span className="font-semibold text-blue-600">Cloud</span> empowers innovation, scalability, and global impact. I love how it enables anyone to build, deploy, and scale ideas with speed and security. The ever-evolving landscape keeps me learning and excited every day!
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Experience & Education */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            <motion.div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Education</h3>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12 border-l border-slate-200"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <MagneticButton className="absolute -left-6 top-0">
                      <motion.div
                        className="w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{
                          scale: 1.2,
                          borderColor: exp.color,
                          boxShadow: `0 10px 30px ${exp.color}30`,
                        }}
                      >
                        <exp.icon className="w-5 h-5 text-slate-600" />
                      </motion.div>
                    </MagneticButton>

                    <motion.div
                      className="bg-slate-50 p-6 rounded-xl relative overflow-hidden"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1 opacity-0"
                        style={{ backgroundColor: exp.color }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-slate-900">{exp.title}</h4>
                        <motion.span
                          className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          {exp.type}
                        </motion.span>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: "Years in IT", value: "3+", icon: TrendingUp, color: "#3B82F6" },
                { label: "Certifications", value: "8+", icon: Award, color: "#10B981" },
                { label: "Major Projects", value: "3", icon: Briefcase, color: "#F59E0B" },
                { label: "Cloud Platforms", value: "2", icon: GraduationCap, color: "#8B5CF6" },
              ].map((stat, index) => (
                <MagneticButton key={index}>
                  <motion.div
                    className="text-center p-6 bg-slate-50 rounded-xl relative overflow-hidden"
                    whileHover={{
                      y: -5,
                      backgroundColor: `${stat.color}10`,
                      borderColor: stat.color,
                    }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.8, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0"
                      style={{ backgroundColor: `${stat.color}05` }}
                      whileHover={{ opacity: 1 }}
                    />
                    <stat.icon className="w-6 h-6 mx-auto mb-3" style={{ color: stat.color }} />
                    <motion.div
                      className="text-2xl font-bold text-slate-900 mb-1"
                      whileHover={{ scale: 1.1, color: stat.color }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </motion.div>
                </MagneticButton>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 className="text-2xl font-semibold text-slate-900 mb-8">Technical Expertise</motion.h3>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </div>

            {/* Enhanced Additional Technologies */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-6">Additional Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "EC2",
                  "S3",
                  "Lambda",
                  "DynamoDB",
                  "Azure VMs",
                  "Blob Storage",
                  "Azure Functions",
                  "Active Directory",
                  "VPC",
                  "CloudWatch",
                  "Azure Monitor",
                  "Jira",
                  "Slack",
                  "Microsoft Teams",
                  "WordPress",
                ].map((tech, index) => (
                  <MagneticButton key={tech}>
                    <motion.span
                      className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 + 1.2 }}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                        boxShadow: "0 10px 20px rgba(59,130,246,0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
