"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Globe, Server, Cloud, ArrowUpRight, Star, Award, Database, Zap } from "lucide-react"

// Floating Action Button
const FloatingActionButton = ({ href, icon: Icon, label, color }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 rounded-full shadow-lg overflow-hidden"
    style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }}
    whileHover={{
      scale: 1.05,
      y: -2,
      backgroundColor: color,
    }}
    transition={{ duration: 0.2 }}
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
      title: "Multi-Cloud Infrastructure Platform",
      description:
        "Designed and implemented a comprehensive multi-cloud management platform using Azure, AWS, and GCP. Features include automated resource provisioning, cost optimization, and centralized monitoring with real-time dashboards.",
      technologies: [
        { name: "Azure", color: "#0078D4", icon: "☁️" },
        { name: "AWS", color: "#FF9900", icon: "⚡" },
        { name: "GCP", color: "#4285F4", icon: "🌐" },
        { name: "Terraform", color: "#7B42BC", icon: "🏗️" },
        { name: "Kubernetes", color: "#326CE5", icon: "⚓" },
        { name: "Docker", color: "#2496ED", icon: "🐳" },
        { name: "Prometheus", color: "#E6522C", icon: "📊" },
        { name: "Grafana", color: "#F46800", icon: "📈" },
      ],
      icon: Cloud,
      iconColor: "#0078D4",
      features: ["Multi-Cloud Management", "Infrastructure as Code", "Cost Optimization", "Real-time Monitoring", "Auto-scaling"],
      liveUrl: "https://cloud-platform-demo.azurewebsites.net",
      githubUrl: "https://github.com/himanshu3024/multi-cloud-platform",
      status: "Live",
      statusColor: "#10B981",
      year: "2024",
      rating: 5,
      screenshot: "/project-screenshots/cloud-platform.png",
      highlights: [
        "Reduced infrastructure costs by 40% through automated scaling",
        "Implemented zero-downtime deployments across multiple regions",
        "Built comprehensive monitoring with 99.9% uptime SLA"
      ]
    },
    {
      title: "Serverless E-Commerce Platform",
      description:
        "Built a modern, scalable e-commerce platform using Azure Functions, Cosmos DB, and Azure Static Web Apps. Features include real-time inventory management, payment processing, and AI-powered product recommendations.",
      technologies: [
        { name: "Azure Functions", color: "#0078D4", icon: "⚡" },
        { name: "Cosmos DB", color: "#0078D4", icon: "🗄️" },
        { name: "Azure Static Web Apps", color: "#0078D4", icon: "🌐" },
        { name: "Node.js", color: "#339933", icon: "🚀" },
        { name: "TypeScript", color: "#3178C6", icon: "📝" },
        { name: "Azure Cognitive Services", color: "#0078D4", icon: "🤖" },
        { name: "Azure CDN", color: "#0078D4", icon: "⚡" },
        { name: "Azure Key Vault", color: "#0078D4", icon: "🔐" },
      ],
      icon: Server,
      iconColor: "#339933",
      features: ["Serverless Architecture", "Real-time Processing", "AI Integration", "Global CDN", "Secure Payments"],
      liveUrl: "https://ecommerce-serverless.azurewebsites.net",
      githubUrl: "https://github.com/himanshu3024/serverless-ecommerce",
      status: "Live",
      statusColor: "#10B981",
      year: "2024",
      rating: 5,
      screenshot: "/project-screenshots/ecommerce.png",
      highlights: [
        "Handles 10,000+ concurrent users with sub-second response times",
        "Integrated AI-powered product recommendations increasing sales by 25%",
        "Zero server maintenance with 99.99% availability"
      ]
    },
    {
      title: "DevOps Automation Pipeline",
      description:
        "Created a comprehensive CI/CD pipeline using Azure DevOps, GitHub Actions, and Terraform. Includes automated testing, security scanning, infrastructure deployment, and monitoring integration.",
      technologies: [
        { name: "Azure DevOps", color: "#0078D4", icon: "🔄" },
        { name: "GitHub Actions", color: "#2088FF", icon: "⚙️" },
        { name: "Terraform", color: "#7B42BC", icon: "🏗️" },
        { name: "Docker", color: "#2496ED", icon: "🐳" },
        { name: "Kubernetes", color: "#326CE5", icon: "⚓" },
        { name: "SonarQube", color: "#4E9BCD", icon: "🔍" },
        { name: "Prometheus", color: "#E6522C", icon: "📊" },
        { name: "Grafana", color: "#F46800", icon: "📈" },
      ],
      icon: Zap,
      iconColor: "#FF6B6B",
      features: ["Automated CI/CD", "Infrastructure as Code", "Security Scanning", "Performance Monitoring", "Blue-Green Deployments"],
      liveUrl: "https://devops-dashboard.azurewebsites.net",
      githubUrl: "https://github.com/himanshu3024/devops-automation",
      status: "Live",
      statusColor: "#10B981",
      year: "2024",
      rating: 5,
      screenshot: "/project-screenshots/devops-pipeline.png",
      highlights: [
        "Reduced deployment time from 2 hours to 15 minutes",
        "Achieved 100% automated testing coverage",
        "Zero security vulnerabilities in production deployments"
      ]
    },
    {
      title: "Cloud-Native Data Analytics Platform",
      description:
        "Developed a real-time data analytics platform using Azure Data Factory, Azure Synapse Analytics, and Power BI. Processes millions of data points daily with advanced analytics and machine learning capabilities.",
      technologies: [
        { name: "Azure Data Factory", color: "#0078D4", icon: "🏭" },
        { name: "Azure Synapse", color: "#0078D4", icon: "🧠" },
        { name: "Power BI", color: "#F2C811", icon: "📊" },
        { name: "Azure ML", color: "#0078D4", icon: "🤖" },
        { name: "Python", color: "#3776AB", icon: "🐍" },
        { name: "Apache Spark", color: "#E25A1C", icon: "🔥" },
        { name: "Azure Event Hubs", color: "#0078D4", icon: "📡" },
        { name: "Azure Data Lake", color: "#0078D4", icon: "🏞️" },
      ],
      icon: Database,
      iconColor: "#06B6D4",
      features: ["Real-time Analytics", "Machine Learning", "Data Visualization", "Scalable Processing", "Advanced Insights"],
      liveUrl: "https://analytics-platform.azurewebsites.net",
      githubUrl: "https://github.com/himanshu3024/data-analytics-platform",
      status: "In Development",
      statusColor: "#F59E0B",
      year: "2024",
      rating: 4,
      screenshot: "/project-screenshots/analytics.png",
      highlights: [
        "Processes 1M+ data points per hour with sub-second latency",
        "Built predictive models with 95% accuracy",
        "Real-time dashboards with 50+ KPIs"
      ]
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
        {/* Projects Section Header */}
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
            that demonstrate modern development practices and multi-cloud expertise.
          </motion.p>
        </motion.div>

        {/* Projects Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={slideInFromLeft}
              className="group relative card-modern overflow-hidden flex flex-col shadow-2xl border-2 border-transparent hover:border-blue-400/60 transition-all duration-300 p-8 min-h-[480px] md:min-h-[520px]"
              whileHover={{ scale: 1.03, boxShadow: "0 16px 48px 0 rgba(30,41,59,0.16)" }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={project.title + " screenshot"}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <project.icon className="w-16 h-16 mx-auto opacity-50" style={{ color: project.iconColor }} />
                    <p className="text-sm text-slate-500">Project Screenshot</p>
                  </div>
                )}
                {/* Status badge */}
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white shadow"
                  style={{ backgroundColor: project.statusColor }}
                >
                  {project.status}
                </span>
                <span className="absolute top-3 right-3 text-xs text-slate-700 bg-white/80 rounded-full px-2 py-1 shadow">{project.year}</span>
              </div>
              {/* Card Content */}
              <div className="flex-1 flex flex-col gap-5 text-base md:text-lg">
                <div className="flex items-center gap-3 mb-1">
                  <project.icon className="w-7 h-7" style={{ color: project.iconColor }} />
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center ml-auto gap-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-base mb-2">{project.description}</p>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium text-white shadow-md flex items-center gap-1"
                      style={{ backgroundColor: tech.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.08 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      <span>{tech.icon}</span>
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
                {/* Key Achievements */}
                <ul className="space-y-1 mb-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.07, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Globe className="w-5 h-5" />
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-5 py-2 bg-slate-900 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.07, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
