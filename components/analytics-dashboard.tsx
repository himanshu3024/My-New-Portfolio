"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Zap, 
  Shield, 
  DollarSign,
  Clock,
  Users,
  Code,
  Cloud,
  Database,
  Server
} from "lucide-react"

interface Metric {
  label: string
  value: string | number
  change: number
  icon: any
  color: string
  unit?: string
}

interface ChartData {
  name: string
  value: number
  color: string
}

export default function AnalyticsDashboard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  // Real-time metrics
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: "Portfolio Performance",
      value: 98.5,
      change: 2.3,
      icon: TrendingUp,
      color: "#10B981",
      unit: "%"
    },
    {
      label: "Cloud Projects",
      value: 12,
      change: 1,
      icon: Cloud,
      color: "#3B82F6"
    },
    {
      label: "Learning Hours",
      value: 847,
      change: 23,
      icon: Clock,
      color: "#8B5CF6"
    },
    {
      label: "Cost Savings",
      value: 2340,
      change: -5.2,
      icon: DollarSign,
      color: "#F59E0B",
      unit: "$"
    },
    {
      label: "Security Score",
      value: 95,
      change: 1.5,
      icon: Shield,
      color: "#EF4444",
      unit: "%"
    },
    {
      label: "API Response Time",
      value: 127,
      change: -12,
      icon: Zap,
      color: "#06B6D4",
      unit: "ms"
    }
  ])

  // Chart data for skills
  const skillData: ChartData[] = [
    { name: "AWS", value: 90, color: "#FF9900" },
    { name: "Azure", value: 95, color: "#0078D4" },
    { name: "Docker", value: 85, color: "#2496ED" },
    { name: "Kubernetes", value: 78, color: "#326CE5" },
    { name: "Terraform", value: 82, color: "#7B42BC" },
    { name: "GitHub Actions", value: 88, color: "#2088FF" }
  ]

  // Performance data
  const performanceData = [
    { metric: "Lighthouse Score", value: 98, target: 90, color: "#10B981" },
    { metric: "Core Web Vitals", value: 95, target: 85, color: "#3B82F6" },
    { metric: "Accessibility", value: 100, target: 90, color: "#8B5CF6" },
    { metric: "SEO", value: 97, target: 85, color: "#F59E0B" }
  ]

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearInterval(timer)
      clearTimeout(loadingTimer)
    }
  }, [])

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
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233B82F6' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Live
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Analytics
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real-time performance metrics, learning progress, and cloud computing insights
          </motion.p>
          
          {/* Live timestamp */}
          <motion.div
            variants={itemVariants}
            className="mt-4 text-sm text-slate-500 font-mono"
          >
            Last updated: {currentTime.toLocaleTimeString()}
          </motion.div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-5"
                style={{ backgroundColor: metric.color }}
                transition={{ duration: 0.3 }}
              />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${metric.color}15` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{metric.label}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold" style={{ color: metric.color }}>
                        {metric.value}{metric.unit}
                      </span>
                      <motion.div
                        className={`flex items-center text-sm font-medium ${
                          metric.change >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {metric.change >= 0 ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        {Math.abs(metric.change)}%
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{ backgroundColor: metric.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (metric.value as number))}%` }}
                  transition={{
                    duration: 2,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.1 + 2,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Charts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Skills Radar Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Cloud Skills Progress</h3>
            <div className="space-y-4">
              {skillData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-24 text-sm font-medium text-slate-700">{skill.name}</div>
                  <div className="flex-1 relative h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  </div>
                  <div className="w-12 text-sm font-semibold" style={{ color: skill.color }}>
                    {skill.value}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Performance Metrics</h3>
            <div className="space-y-6">
              {performanceData.map((item, index) => (
                <motion.div
                  key={item.metric}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">{item.metric}</span>
                    <span className="text-sm font-semibold" style={{ color: item.color }}>
                      {item.value}/{item.target}
                    </span>
                  </div>
                  <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / item.target) * 100}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Real-time Activity Feed */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Live Activity Feed</h3>
          <div className="space-y-4">
            {[
              { action: "Completed AWS Cloud Practitioner practice exam", time: "2 minutes ago", icon: Cloud, color: "#FF9900" },
              { action: "Updated portfolio with new project", time: "15 minutes ago", icon: Code, color: "#3B82F6" },
              { action: "Deployed new Azure Function", time: "1 hour ago", icon: Server, color: "#0078D4" },
              { action: "Optimized Docker container", time: "3 hours ago", icon: Database, color: "#2496ED" },
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${activity.color}15` }}>
                  <activity.icon className="w-5 h-5" style={{ color: activity.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 