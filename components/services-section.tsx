"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Cloud,
  Code,
  Users,
  Shield,
  Database,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  BookOpen,
  GraduationCap,
} from "lucide-react"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: "Cloud Architecture & Solutions",
      description: "Learning to design and implement scalable cloud solutions with modern best practices.",
      icon: Cloud,
      color: "#0078D4",
      features: ["AWS & Azure Learning", "Cost-Effective Solutions", "Security Implementation", "Documentation"],
      skillLevel: "Intermediate",
      learningTime: "Currently studying",
      rating: 4.5,
      projects: 3,
      technologies: ["AWS", "Azure", "Terraform", "Docker"],
    },
    {
      title: "DevOps & CI/CD Learning",
      description: "Mastering development workflows with automated pipelines and infrastructure as code.",
      icon: Zap,
      color: "#10B981",
      features: ["GitHub Actions", "Automated Testing", "Infrastructure as Code", "Monitoring Setup"],
      skillLevel: "Learning",
      learningTime: "6 months progress",
      rating: 4.2,
      projects: 2,
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "Monitoring"],
    },
    {
      title: "Full-Stack Development",
      description: "Building modern, responsive web applications with cutting-edge technologies.",
      icon: Code,
      color: "#8B5CF6",
      features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development"],
      skillLevel: "Intermediate",
      learningTime: "1 year experience",
      rating: 4.0,
      projects: 4,
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Project Management",
      description: "Applying Agile methodologies and stakeholder management in academic and personal projects.",
      icon: Users,
      color: "#F59E0B",
      features: ["Agile/Scrum", "Risk Management", "Team Collaboration", "Timeline Planning"],
      skillLevel: "Certified",
      learningTime: "Completed program",
      rating: 4.8,
      projects: 5,
      technologies: ["Jira", "Slack", "Microsoft Project", "Agile"],
    },
    {
      title: "Database Design & Learning",
      description: "Studying efficient database schemas and optimization techniques for scalability.",
      icon: Database,
      color: "#EF4444",
      features: ["Schema Design", "Performance Learning", "Data Migration", "Backup Strategies"],
      skillLevel: "Learning",
      learningTime: "4 months progress",
      rating: 3.8,
      projects: 2,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    },
    {
      title: "Security & Compliance Studies",
      description: "Learning robust security measures and industry compliance standards.",
      icon: Shield,
      color: "#06B6D4",
      features: ["Security Fundamentals", "Compliance Learning", "Access Management", "Threat Assessment"],
      skillLevel: "Beginner",
      learningTime: "Recently started",
      rating: 4.0,
      projects: 1,
      technologies: ["Security Tools", "IAM", "Compliance", "Monitoring"],
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
    <section ref={ref} className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233B82F6' fillOpacity='1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Learning &<span className="font-semibold"> Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My current learning journey in cloud computing and development. Passionate about mastering these
            technologies and ready to dedicate everything to cloud excellence.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-5"
                style={{ backgroundColor: service.color }}
                transition={{ duration: 0.3 }}
              />

              {/* Service Icon */}
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
                style={{ backgroundColor: `${service.color}15` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <service.icon className="w-8 h-8" style={{ color: service.color }} />
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20"
                  style={{ backgroundColor: service.color }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Service Details */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 + 0.5 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Service Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-slate-900">{service.rating}</span>
                  </div>
                  <span className="text-xs text-slate-500">Self Rating</span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-900 mb-1">{service.projects}</div>
                  <span className="text-xs text-slate-500">Projects</span>
                </div>
              </div>

              {/* Learning Progress & Timeline */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-slate-900">{service.skillLevel}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-slate-600">{service.learningTime}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <motion.div animate={{ x: hoveredService === index ? 5 : 0 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-semibold text-slate-900 mb-12">
            My Learning Process
          </motion.h3>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Full connecting line that spans all steps */}
            <motion.div
              className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 z-0"
              style={{
                left: "12.5%",
                right: "12.5%",
                width: "75%",
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 1, duration: 2 }}
            />
            {[
              { step: "01", title: "Research", description: "Deep diving into documentation and best practices" },
              { step: "02", title: "Practice", description: "Building hands-on projects and experiments" },
              { step: "03", title: "Apply", description: "Implementing learned concepts in real scenarios" },
              { step: "04", title: "Share", description: "Documenting and sharing knowledge with community" },
            ].map((process, index) => (
              <motion.div key={index} variants={itemVariants} className="relative" whileHover={{ y: -5 }}>
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {process.step}
                </motion.div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{process.title}</h4>
                <p className="text-slate-600 text-sm">{process.description}</p>

                {/* Connecting Line - Now appears for all steps */}
                {index < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 z-0"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: index * 0.2 + 1, duration: 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-200"
            whileHover={{ scale: 1.02 }}
          >
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Learn Together?</h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              I'm passionate about cloud computing and always eager to collaborate, learn, and grow with fellow
              enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-medium rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
