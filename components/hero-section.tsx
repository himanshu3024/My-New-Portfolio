"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Download, ExternalLink, ArrowDown, MapPin, Mail, Phone, Cloud, Server, Database, Shield, Zap, Globe, Cpu } from "lucide-react"

// Particle System Component
const ParticleSystem = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      delay: number
    }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"][Math.floor(Math.random() * 4)],
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Multi-Line Typewriter Effect with FASTER typing
const MultiLineTypewriter = ({ lines, delay = 0 }: { lines: string[]; delay?: number }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentLine = lines[currentLineIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing - FASTER: 8ms typing
          if (currentCharIndex < currentLine.length) {
            setDisplayText(currentLine.substring(0, currentCharIndex + 1))
            setCurrentCharIndex((prev) => prev + 1)
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 1500) // Reduced pause
          }
        } else {
          // Deleting - FASTER: 5ms deleting
          if (currentCharIndex > 0) {
            setDisplayText(currentLine.substring(0, currentCharIndex - 1))
            setCurrentCharIndex((prev) => prev - 1)
          } else {
            setIsDeleting(false)
            setCurrentLineIndex((prev) => (prev + 1) % lines.length)
          }
        }
      },
      isDeleting ? 5 : 8, // MUCH FASTER: 8ms typing, 5ms deleting
    )

    return () => clearTimeout(timer)
  }, [currentCharIndex, currentLineIndex, isDeleting, lines])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
        className="text-blue-500"
      >
        |
      </motion.span>
    </span>
  )
}

// Cloud Tech Icons Component
const CloudTechIcon = ({
  icon: Icon,
  color,
  position,
  delay,
  label,
}: { 
  icon: any; 
  color: string; 
  position: { x: number; y: number }; 
  delay: number;
  label: string;
}) => (
  <motion.div
    className="absolute w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl cursor-pointer group"
    style={{
      left: `${position.x}%`,
      top: `${position.y}%`,
      backgroundColor: `${color}15`,
      border: `2px solid ${color}30`,
    }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay: delay,
    }}
    whileHover={{
      scale: 1.2,
      rotate: 360,
      boxShadow: `0 20px 40px ${color}40`,
    }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-8 h-8" style={{ color }} />
    <motion.div
      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
      initial={{ y: 5 }}
      whileHover={{ y: 0 }}
    >
      {label}
    </motion.div>
  </motion.div>
)

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  // Enhanced cloud-focused typewriter lines
  const typewriterLines = [
    "Cloud Computing Specialist crafting scalable solutions with AWS & Azure",
    "Passionate about serverless architectures and DevOps automation",
    "Building the future of cloud infrastructure, one deployment at a time",
    "Transforming businesses through innovative cloud technologies",
    "Expert in containerization, Kubernetes, and microservices",
    "Specializing in Azure DevOps, CI/CD pipelines, and infrastructure as code",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
      },
    },
  }

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-16"
    >
      {/* Live Metrics Overlay */}
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-200">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-600">Live</span>
          </div>
          <div className="text-slate-500">|</div>
          <div className="text-slate-600">
            <span className="font-mono">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <ParticleSystem />

      {/* Cloud Tech Icons - 7 cloud-related icons */}
      <CloudTechIcon
        icon={Cloud}
        color="#3B82F6"
        position={{ x: 10, y: 20 }}
        delay={0}
        label="Cloud Computing"
      />
      <CloudTechIcon
        icon={Server}
        color="#8B5CF6"
        position={{ x: 85, y: 15 }}
        delay={1}
        label="Server Management"
      />
      <CloudTechIcon
        icon={Database}
        color="#06B6D4"
        position={{ x: 15, y: 70 }}
        delay={2}
        label="Database"
      />
      <CloudTechIcon
        icon={Shield}
        color="#10B981"
        position={{ x: 80, y: 75 }}
        delay={3}
        label="Security"
      />
      <CloudTechIcon
        icon={Zap}
        color="#F59E0B"
        position={{ x: 50, y: 10 }}
        delay={4}
        label="Performance"
      />
      <CloudTechIcon
        icon={Globe}
        color="#EF4444"
        position={{ x: 5, y: 50 }}
        delay={5}
        label="Global Scale"
      />
      <CloudTechIcon
        icon={Cpu}
        color="#8B5CF6"
        position={{ x: 90, y: 50 }}
        delay={6}
        label="Infrastructure"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Hero Badge */}
          <motion.div variants={slideInUp} className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
            <Cloud className="w-4 h-4" />
            <span>Cloud Computing Specialist</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={slideInUp} className="text-5xl md:text-7xl font-light text-slate-900 leading-tight">
            Hi, I'm{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Himanshu Gandhi
            </span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div variants={slideInUp} className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            <MultiLineTypewriter lines={typewriterLines} />
          </motion.div>

          {/* Description */}
          <motion.p variants={slideInUp} className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Passionate cloud computing professional with expertise in AWS, Azure, and Google Cloud Platform. 
            Specializing in scalable architectures, DevOps automation, and infrastructure as code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={slideInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-medium rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Projects</span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={slideInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Toronto, Canada</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>gandhi111000@hotmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+1 (437) 267-3965</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  )
}
