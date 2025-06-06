"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Briefcase,
  Award,
  Code,
  Cloud,
  Target,
  Rocket,
  MapPin,
  TrendingUp,
  Star,
  Eye,
  Calendar,
  Zap,
  Trophy,
  Users,
} from "lucide-react"

export default function JourneyTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeYear, setActiveYear] = useState(2024)

  const timelineEvents = [
    {
      year: 2024,
      title: "Cloud Computing Specialization",
      subtitle: "George Brown College",
      type: "education",
      icon: Cloud,
      color: "#0078D4",
      location: "Toronto, Canada",
      description:
        "Currently pursuing advanced postgraduate program in Cloud Computing Technologies, diving deep into AWS, Azure, and modern DevOps practices.",
      achievements: [
        "Azure Administrator Certification Prep",
        "AWS Cloud Practitioner Prep",
        "Serverless Architecture Projects",
      ],
      technologies: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform"],
      status: "ongoing",
    },
    {
      year: 2023,
      title: "Project Management Excellence",
      subtitle: "Fleming College",
      type: "education",
      icon: Target,
      color: "#10B981",
      location: "Toronto, Canada",
      description:
        "Completed comprehensive Project Management program, learning Agile methodologies and stakeholder management for tech projects.",
      achievements: ["Google Project Management Certificate", "Agile & Scrum Mastery", "Risk Management"],
      technologies: ["Jira", "Slack", "Microsoft Project", "Agile", "Scrum"],
      status: "completed",
    },
    {
      year: 2022,
      title: "Customer Service Representative",
      subtitle: "ETS. Africainde",
      type: "work",
      icon: Briefcase,
      color: "#F59E0B",
      location: "Pointe-Noire, Rep. of Congo",
      description:
        "Provided customer support by resolving inquiries, assisting with transactions, and ensuring a positive client experience through efficient communication and issue resolution.",
      achievements: ["Recognized for consistently achieving high customer satisfaction scores through prompt issue resolution and personalized service."],
      skills: ["Client Relationship Management", "CRM Software Handling", "Communication", "Problem Solving & Troubleshooting", "Process Improvement Awareness"],
      status: "completed",
    },
    {
      year: 2018,
      title: "IT Support & Infrastructure",
      subtitle: "Rajasthan Computer Academy",
      type: "work",
      icon: Briefcase,
      color: "#EF4444",
      location: "Rajasthan, India",
      description:
        "Started my tech journey with hands-on IT support experience, building strong technical foundations and problem-solving skills.",
      achievements: ["System Administration", "Network Configuration", "Technical Support"],
      technologies: ["Windows Server", "Networking", "Hardware", "Troubleshooting"],
      status: "completed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing":
        return "#3B82F6"
      case "completed":
        return "#10B981"
      case "planned":
        return "#8B5CF6"
      default:
        return "#6B7280"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "ongoing":
        return "In Progress"
      case "completed":
        return "Completed"
      case "planned":
        return "Goal"
      default:
        return "Unknown"
    }
  }

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
    <section ref={ref} className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            My
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Journey
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From IT support to cloud computing expertise - a student's journey of continuous learning, growth, and
            dedication to cloud technologies.
          </motion.p>
        </motion.div>

        {/* Year Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {timelineEvents.map((event) => (
            <motion.button
              key={event.year}
              onClick={() => setActiveYear(event.year)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeYear === event.year
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {event.year}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            style={{ height: `${timelineEvents.length * 400}px` }}
            initial={{ height: 0 }}
            animate={isInView ? { height: `${timelineEvents.length * 400}px` } : { height: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-28">
            {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  className={`relative flex items-center flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                {/* Timeline Node - Hidden on mobile */}
                <motion.div
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow-xl items-center justify-center z-10"
                  style={{ backgroundColor: event.color }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <event.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Event Card */}
                <motion.div
                  className={`w-full md:w-5/12 ${
                    // Mobile: no margin, Desktop: alternating margins
                    "mx-0 md:" + (index % 2 === 0 ? "mr-auto pr-16" : "ml-auto pl-16")
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div
                    className={`p-4 bg-white rounded-2xl shadow-lg border border-slate-200 relative overflow-hidden ${
                      activeYear === event.year ? "ring-2 ring-blue-500" : ""
                    }`}
                    style={{
                      borderLeft: `4px solid ${event.color}`,
                    }}
                  >
                    {/* Status Badge */}
                    <motion.div
                      className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: getStatusColor(event.status) }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {getStatusText(event.status)}
                    </motion.div>

                    {/* Year Badge */}
                    <motion.div
                      className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-bold mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {event.year}
                    </motion.div>

                    {/* Event Details */}
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{event.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{event.subtitle}</p>

                    <div className="flex items-center space-x-2 text-slate-500 text-sm mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-3 text-sm">{event.description}</p>

                    {/* Achievements - Compact */}
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Key Achievements</h4>
                      <div className="space-y-1">
                        {event.achievements.slice(0, 2).map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: event.color }} />
                            <span className="text-xs text-slate-600">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies/Skills - Compact */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">
                        {event.technologies ? 'Technologies' : 'Skills'}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {(event.technologies || event.skills)?.slice(0, 4).map((item, i) => (
                          <motion.span
                            key={i}
                            className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded-full"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: event.color,
                              color: "white",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 + 0.8 }}
                          >
                            {item}
                          </motion.span>
                        ))}
                        {(event.technologies || event.skills)?.length > 4 && (
                          <motion.span
                            className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            +{(event.technologies || event.skills).length - 4} more
                          </motion.span>
                        )}
                      </div>
                    </div>

                    
                    
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section - New Addition */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 mb-16"
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
            <motion.div
              className="relative p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl border border-blue-200 shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233B82F6' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
                animate={{
                  backgroundPosition: ["0px 0px", "60px 60px"],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Vision Icon */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <Eye className="w-10 h-10 text-white" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0"
                  whileHover={{ opacity: 0.3, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Vision Content */}
              <motion.h3
                className="text-3xl font-bold text-slate-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                My Vision
              </motion.h3>

              <motion.p
                className="text-lg text-slate-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                To become a <span className="font-semibold text-blue-600">Cloud Solutions Architect</span> who designs
                and implements enterprise-scale cloud infrastructures that transform businesses and drive innovation.
              </motion.p>

              {/* Vision Goals */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {[
                  { icon: Cloud, title: "Multi-Cloud Expertise", desc: "Master AWS, Azure, and GCP" },
                  { icon: Rocket, title: "Enterprise Solutions", desc: "Design scalable architectures" },
                  { icon: Star, title: "Innovation Leader", desc: "Drive cloud transformation" },
                ].map((goal, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/70 rounded-2xl border border-white/50"
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                  >
                    <goal.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">{goal.title}</h4>
                    <p className="text-slate-600 text-xs">{goal.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Commitment Statement */}
              <motion.div
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
              >
                💪 Ready to dedicate everything to achieve this vision
              </motion.div>

              {/* Floating Elements */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-20"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
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
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Years of Learning", value: "6+", icon: TrendingUp, color: "#3B82F6" },
            { label: "Certifications", value: "8+", icon: Award, color: "#10B981" },
            { label: "Technologies", value: "20+", icon: Code, color: "#F59E0B" },
            { label: "Projects", value: "15+", icon: Rocket, color: "#8B5CF6" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-slate-50 rounded-2xl"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-slate-900 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 1, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Roadmap Section - NEW JAW-DROPPING SECTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-light text-slate-900 mb-6 text-center"
          >
            Future
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Roadmap
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center mb-12"
          >
            Strategic milestones and ambitious goals that showcase my commitment to becoming a cloud computing leader.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                timeline: "Next 6 Months",
                title: "Cloud Certifications",
                description: "AWS Solutions Architect Associate & Azure DevOps Engineer Expert",
                icon: Trophy,
                color: "#3B82F6",
                priority: "High",
                impact: "Career Ready",
              },
              {
                timeline: "6-12 Months",
                title: "Enterprise Projects",
                description: "Lead multi-cloud migration projects and infrastructure automation",
                icon: Rocket,
                color: "#10B981",
                priority: "Critical",
                impact: "Industry Experience",
              },
              {
                timeline: "1-2 Years",
                title: "Team Leadership",
                description: "Mentor junior developers and lead cloud transformation initiatives",
                icon: Users,
                color: "#F59E0B",
                priority: "Strategic",
                impact: "Leadership Skills",
              },
              {
                timeline: "2-3 Years",
                title: "Innovation Hub",
                description: "Architect cutting-edge solutions and contribute to open-source projects",
                icon: Zap,
                color: "#8B5CF6",
                priority: "Visionary",
                impact: "Industry Impact",
              },
            ].map((roadmap, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="p-6 bg-white rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden"
                  whileHover={{
                    boxShadow: `0 25px 50px ${roadmap.color}20`,
                    borderColor: roadmap.color,
                  }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5"
                    style={{ backgroundColor: roadmap.color }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Timeline Badge */}
                  <motion.div
                    className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {roadmap.timeline}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 relative"
                    style={{ backgroundColor: `${roadmap.color}15` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <roadmap.icon className="w-8 h-8" style={{ color: roadmap.color }} />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {roadmap.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{roadmap.description}</p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Priority:</span>
                      <motion.span
                        className="text-xs font-medium px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: roadmap.color }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {roadmap.priority}
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Impact:</span>
                      <span className="text-xs font-medium text-slate-700">{roadmap.impact}</span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <motion.div
                    className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: roadmap.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${25 + index * 20}%` }}
                      transition={{ delay: index * 0.2 + 1, duration: 1.5 }}
                    />
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60"
                    style={{ backgroundColor: roadmap.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.div
              className="inline-block p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <Calendar className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Ready to Start Immediately</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Committed to delivering exceptional results from day one while pursuing these ambitious goals.
                </p>
                <motion.div
                  className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                  🚀 Let's build the future together
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
