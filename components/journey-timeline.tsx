"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, Award, Code, Cloud, Target, Rocket, MapPin, TrendingUp, Star, Eye } from "lucide-react"

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
      title: "Data Analytics & Cybersecurity",
      subtitle: "Google Career Certificates",
      type: "certification",
      icon: Award,
      color: "#F59E0B",
      location: "Remote Learning",
      description:
        "Earned multiple professional certificates in Data Analytics and Cybersecurity, building foundation for cloud security expertise.",
      achievements: ["Google Data Analytics Certificate", "Google Cybersecurity Certificate", "SQL Proficiency"],
      technologies: ["Python", "SQL", "Tableau", "R", "Security Tools"],
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
          {/* FIXED: Timeline Line - Now properly extends through all events */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full"
            style={{
              top: "60px",
              height: `${(timelineEvents.length - 1) * 400 + 200}px`, // FIXED: Proper height calculation
            }}
            initial={{ height: 0 }}
            animate={
              isInView
                ? {
                    height: `${(timelineEvents.length - 1) * 400 + 200}px`,
                  }
                : { height: 0 }
            }
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-28">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`relative flex items-center flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
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

                    {/* Technologies - Compact */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.technologies.slice(0, 4).map((tech, i) => (
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
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 rounded-2xl"
                      style={{ backgroundColor: `${event.color}05` }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
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
              {/* Vision Icon */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <Eye className="w-10 h-10 text-white" />
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
      </div>
    </section>
  )
}
