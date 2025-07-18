"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Globe, Server, Cloud, ArrowUpRight, Star } from "lucide-react"

// Floating Action Button
const FloatingActionButton = ({ href, icon: Icon, label, color }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 rounded-full shadow-lg overflow-hidden"
    style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }}
    whileHover={{
      scale: 1.05, // Reduced scale
      y: -2, // Reduced lift
      backgroundColor: color,
    }}
    transition={{ duration: 0.2 }} // Faster transition
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-6 h-6 relative z-10 group-hover:text-white transition-colors" style={{ color }} />
  </motion.a>
)

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Portfolio Website with Azure CI/CD",
      description:
        "Developed and deployed a responsive personal portfolio using Azure Static Web Apps with automated GitHub Actions CI/CD pipeline for seamless deployments.",
      technologies: [
        { name: "HTML", color: "#E34F26", icon: "🌐" },
        { name: "CSS", color: "#1572B6", icon: "🎨" },
        { name: "JavaScript", color: "#F7DF1E", icon: "⚡" },
        { name: "Azure Static Web Apps", color: "#0078D4", icon: "☁️" },
        { name: "GitHub Actions", color: "#2088FF", icon: "🔄" },
      ],
      icon: Globe,
      iconColor: "#0078D4",
      features: ["Responsive Design", "CI/CD Pipeline", "Azure Hosting", "Git Version Control"],
      liveUrl: "https://yellow-forest-08fad6510.6.azurestaticapps.net/",
      githubUrl: "https://github.com/himanshu3024/My-New-Portfolio",
      status: "Live",
      statusColor: "#10B981",
      year: "2024",
      rating: 5,
    },
    {
      title: "Scalable E-Commerce Platform",
      description:
        "Built a comprehensive e-commerce solution with RESTful APIs using Node.js & Express, integrated with Azure SQL Database and deployed on Azure App Service.",
      technologies: [
        { name: "Node.js", color: "#339933", icon: "🚀" },
        { name: "Express", color: "#000000", icon: "⚡" },
        { name: "Azure SQL", color: "#0078D4", icon: "🗄️" },
        { name: "Azure App Service", color: "#0078D4", icon: "☁️" },
        { name: "Postman", color: "#FF6C37", icon: "🔧" },
      ],
      icon: Server,
      iconColor: "#339933",
      features: ["RESTful APIs", "Database Integration", "Scalable Architecture", "Azure Deployment"],
      liveUrl: "#",
      githubUrl: "https://github.com/himanshu3024/E-Commerce-Website",
      status: "In Development",
      statusColor: "#F59E0B",
      year: "2024",
      rating: 4,
    },
    {
      title: "Serverless Web App with Azure Functions",
      description:
        "Created a serverless application using Azure Static Web Apps for frontend and Azure Functions for backend, with optional Cosmos DB integration for data persistence.",
      technologies: [
        { name: "Azure Functions", color: "#0078D4", icon: "⚡" },
        { name: "HTML", color: "#E34F26", icon: "🌐" },
        { name: "CSS", color: "#1572B6", icon: "🎨" },
        { name: "JavaScript", color: "#F7DF1E", icon: "⚡" },
        { name: "GitHub Actions", color: "#2088FF", icon: "🔄" },
        { name: "Cosmos DB", color: "#0078D4", icon: "🗄️" },
      ],
      icon: Cloud,
      iconColor: "#FF6B6B",
      features: ["Serverless Architecture", "Event-driven", "Auto-scaling", "Cost Optimization"],
      liveUrl: "https://zealous-island-09cd2980f.6.azurestaticapps.net",
      githubUrl: "#",
      status: "Live",
      statusColor: "#10B981",
      year: "2024",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
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

  return (
    <section ref={ref} className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 variants={slideInFromBottom} className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Featured
            <motion.span
              className="font-semibold"
              whileHover={{
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Projects
            </motion.span>
          </motion.h2>
          <motion.p variants={slideInFromBottom} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of cloud-native applications, from serverless architectures to full-stack solutions
            that demonstrate modern development practices and Azure expertise.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={slideInFromLeft}
              className="group relative"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-200 transition-all duration-300"
                whileHover={{
                  y: -4, // Reduced from -8
                  scale: 1.01, // Reduced from 1.02
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)", // Lighter shadow
                }}
                transition={{ duration: 0.2 }} // Faster transition
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5"
                  style={{
                    background: `linear-gradient(135deg, ${project.iconColor}, transparent)`,
                  }}
                  transition={{ duration: 0.2 }} // Faster transition
                />

                {/* Mobile: Vertical Layout, Desktop: Horizontal Layout */}
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-start relative z-10">
                  {/* Project Info */}
                  <div className="w-full lg:col-span-2 space-y-4 lg:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className="p-3 lg:p-4 rounded-2xl relative overflow-hidden"
                          style={{ backgroundColor: `${project.iconColor}15` }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 360,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.div
                            className="absolute inset-0 opacity-0"
                            style={{ backgroundColor: project.iconColor }}
                            whileHover={{ opacity: 0.1 }}
                          />
                          <project.icon
                            className="w-6 lg:w-8 h-6 lg:h-8 relative z-10"
                            style={{ color: project.iconColor }}
                          />
                        </motion.div>
                        <div>
                          <motion.h3
                            className="text-lg lg:text-2xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            {project.title}
                          </motion.h3>
                          <div className="flex flex-wrap items-center gap-2 lg:gap-3 mt-2">
                            <span className="text-slate-500 text-sm">{project.year}</span>
                            <motion.span
                              className="px-2 lg:px-3 py-1 text-xs font-medium rounded-full text-white"
                              style={{ backgroundColor: project.statusColor }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {project.status}
                            </motion.span>
                            <div className="flex items-center space-x-1">
                              {Array.from({ length: project.rating }).map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 + 0.5 }}
                                >
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3 self-start">
                        {project.githubUrl && (
                          <FloatingActionButton href={project.githubUrl} icon={Github} label="View Code" color="#333" />
                        )}
                        {project.liveUrl && (
                          <FloatingActionButton
                            href={project.liveUrl}
                            icon={ExternalLink}
                            label="Live Demo"
                            color={project.iconColor}
                          />
                        )}
                      </div>
                    </div>

                    <motion.p
                      className="text-slate-600 leading-relaxed text-sm lg:text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Enhanced Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3 lg:mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 bg-slate-50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 + 0.5 }}
                            whileHover={{
                              x: 5,
                              backgroundColor: `${project.iconColor}10`,
                            }}
                          >
                            <motion.div
                              className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full"
                              style={{ backgroundColor: project.iconColor }}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                            <span className="text-xs lg:text-sm text-slate-600">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Project Links */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group"
                          whileHover={{ x: 10 }}
                        >
                          <span>View Live Demo</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-slate-500 hover:text-slate-700 font-medium text-sm"
                          whileHover={{ x: 10 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Technologies - Now below content on mobile */}
                  <div className="w-full lg:w-auto space-y-4 lg:space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3 lg:mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="inline-flex items-center space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-medium border transition-all duration-200"
                            style={{
                              backgroundColor: `${tech.color}10`,
                              borderColor: `${tech.color}30`,
                              color: tech.color,
                            }}
                            whileHover={{
                              scale: 1.02, // Reduced scale
                              y: -2, // Reduced lift
                              backgroundColor: tech.color,
                              color: "white",
                            }}
                            transition={{ duration: 0.2 }} // Faster transition
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r opacity-0"
                              style={{ background: `linear-gradient(90deg, ${tech.color}, transparent)` }}
                              whileHover={{ opacity: 0.2 }}
                            />
                            <span className="relative z-10">{tech.icon}</span>
                            <span className="relative z-10">{tech.name}</span>
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Project Metrics */}
                    <motion.div
                      className="p-3 lg:p-4 bg-slate-50 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <h5 className="text-sm font-semibold text-slate-900 mb-3">Project Highlights</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Completion</span>
                          <span className="font-medium text-slate-900">
                            {project.status === "Live" ? "100%" : "75%"}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Tech Stack</span>
                          <span className="font-medium text-slate-900">{project.technologies.length} tools</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Rating</span>
                          <div className="flex items-center space-x-1">
                            <span className="font-medium text-slate-900">{project.rating}</span>
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${project.iconColor}10, transparent)`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          variants={slideInFromBottom}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <motion.div className="relative inline-block" whileHover={{ scale: 1.05 }}>
            <motion.a
              href="https://github.com/himanshu3024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium rounded-full shadow-2xl relative overflow-hidden group"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View All Projects</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.a>

            {/* Floating particles around button */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-60"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + (i % 2) * 60}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
