"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Download, ExternalLink, ArrowDown, MapPin, Mail, Phone } from "lucide-react"

// Cursor Follower Component
const CursorFollower = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 opacity-60 blur-sm"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  )
}

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

// Typewriter Effect Component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      delay + currentIndex * 100,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="text-blue-500"
      >
        |
      </motion.span>
    </span>
  )
}

// Tech Icons Component with Enhanced Animations
const TechIcon = ({
  icon,
  color,
  position,
  delay,
}: { icon: string; color: string; position: { x: number; y: number }; delay: number }) => (
  <motion.div
    className="absolute w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl cursor-pointer"
    style={{
      left: `${position.x}%`,
      top: `${position.y}%`,
      backgroundColor: `${color}15`,
      border: `2px solid ${color}30`,
    }}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay: delay,
    }}
    whileHover={{
      scale: 1.3,
      rotate: 360,
      boxShadow: `0 20px 40px ${color}40`,
    }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.img
      src={icon || "/placeholder.svg"}
      alt="Tech"
      className="w-10 h-10"
      whileHover={{ rotate: -360 }}
      transition={{ duration: 0.6 }}
    />
  </motion.div>
)

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
      },
    },
  }

  const slideInLeft = {
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

  const slideInRight = {
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

  const slideInUp = {
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

  const skills = [
    { name: "AWS", color: "#FF9900", icon: "☁️" },
    { name: "Microsoft Azure", color: "#0078D4", icon: "⚡" },
    { name: "Node.js", color: "#339933", icon: "🚀" },
    { name: "Docker", color: "#2496ED", icon: "🐳" },
    { name: "GitHub Actions", color: "#2088FF", icon: "🔄" },
    { name: "Project Management", color: "#6366F1", icon: "📊" },
  ]

  const techIcons = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#FF9900",
      position: { x: 15, y: 20 },
      delay: 0,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      color: "#0078D4",
      position: { x: 85, y: 25 },
      delay: 1,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      position: { x: 10, y: 70 },
      delay: 2,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
      position: { x: 90, y: 75 },
      delay: 3,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      position: { x: 20, y: 45 },
      delay: 4,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
      position: { x: 80, y: 50 },
      delay: 5,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      color: "#326CE5",
      position: { x: 25, y: 15 },
      delay: 6,
    },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      {/* Custom Cursor */}
      <CursorFollower />

      {/* Particle System */}
      <ParticleSystem />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59,130,246) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Morphing Background Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1.2, 1],
          opacity: [0.3, 0.8, 0.5, 0.3],
          borderRadius: ["50%", "30%", "50%", "40%"],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.5, 1.2],
          opacity: [0.4, 0.9, 0.6, 0.4],
          borderRadius: ["40%", "50%", "30%", "50%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Enhanced Floating Tech Icons - Hidden on mobile */}
      <div className="hidden md:block">
        {techIcons.map((tech, index) => (
          <TechIcon key={index} {...tech} />
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"
        animate={{
          y: [0, -50, 0],
          x: [0, 25, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-32 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rotate-45 opacity-50"
        animate={{
          y: [0, 40, 0],
          rotate: [45, 135, 45],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-8 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={slideInUp} className="mb-12">
          <motion.div
            className="inline-block mb-6"
            style={{
              transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-sm font-medium rounded-full border border-green-200 shadow-lg">
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span>Available for opportunities</span>
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 mb-6 tracking-tight"
            variants={slideInLeft}
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Himanshu
            </motion.span>
            <br />
            <motion.span
              className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Gandhi
            </motion.span>
          </motion.h1>

          <motion.div
            variants={slideInRight}
            className="text-xl md:text-2xl text-slate-600 font-light mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            <TypewriterText
              text="Cloud Computing Specialist crafting scalable solutions with AWS & Azure"
              delay={500}
            />
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div variants={slideInUp} className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 mb-12">
            {[
              { icon: Mail, text: "gandhi111000@hotmail.com", color: "#3B82F6" },
              { icon: Phone, text: "437-267-3965", color: "#10B981" },
              { icon: MapPin, text: "Toronto, Canada", color: "#8B5CF6" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full border border-slate-200 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: `0 10px 30px ${item.color}20`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 1 }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Pills */}
        <motion.div variants={slideInUp} className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative px-6 py-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 text-sm font-medium shadow-lg overflow-hidden cursor-pointer"
              style={{
                borderColor: `${skill.color}30`,
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                backgroundColor: skill.color,
                color: "white",
                borderColor: skill.color,
                boxShadow: `0 20px 40px ${skill.color}40`,
              }}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 + 1.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, transparent, ${skill.color})`,
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="relative z-10 mr-2">{skill.icon}</span>
              <span className="relative z-10">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div variants={slideInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a
            href="#projects"
            className="group relative px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium rounded-full overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <span>View My Work</span>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.a>

          <motion.button
            className="group relative px-10 py-5 border-2 border-slate-300 text-slate-700 font-medium rounded-full overflow-hidden shadow-lg"
            whileHover={{
              scale: 1.05,
              y: -8,
              borderColor: "#3B82F6",
              color: "#3B82F6",
              boxShadow: "0 25px 50px rgba(59,130,246,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced Quick Links */}
        <motion.div variants={slideInUp} className="flex justify-center space-x-10 mt-16">
          {[
            { name: "GitHub", url: "https://github.com/himanshu3024" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/himanshu-gandhi-891204160/" },
            { name: "Portfolio", url: "https://yellow-forest-08fad6510.6.azurestaticapps.net/", icon: ExternalLink },
          ].map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium flex items-center space-x-1"
              whileHover={{
                y: -3,
                scale: 1.1,
                color: "#3B82F6",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 1.8 }}
            >
              <span>{link.name}</span>
              {link.icon && <link.icon className="w-3 h-3" />}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-8 h-12 border-2 border-slate-300 rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            className="w-2 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-50"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
