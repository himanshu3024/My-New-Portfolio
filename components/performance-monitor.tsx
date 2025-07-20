"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Activity, 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Wifi,
  HardDrive,
  Cpu,
  HardDrive as Memory,
  Network
} from "lucide-react"

interface PerformanceMetric {
  name: string
  value: number
  target: number
  unit: string
  status: 'excellent' | 'good' | 'needs-improvement' | 'poor'
  trend: 'up' | 'down' | 'stable'
}

interface WebVital {
  name: string
  value: number
  target: number
  description: string
  impact: 'high' | 'medium' | 'low'
}

export default function PerformanceMonitor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isMonitoring, setIsMonitoring] = useState(true)

  // Performance metrics
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      name: "Lighthouse Score",
      value: 98,
      target: 90,
      unit: "",
      status: 'excellent',
      trend: 'up'
    },
    {
      name: "First Contentful Paint",
      value: 0.8,
      target: 1.8,
      unit: "s",
      status: 'excellent',
      trend: 'stable'
    },
    {
      name: "Largest Contentful Paint",
      value: 1.2,
      target: 2.5,
      unit: "s",
      status: 'excellent',
      trend: 'up'
    },
    {
      name: "Cumulative Layout Shift",
      value: 0.02,
      target: 0.1,
      unit: "",
      status: 'excellent',
      trend: 'stable'
    },
    {
      name: "First Input Delay",
      value: 45,
      target: 100,
      unit: "ms",
      status: 'excellent',
      trend: 'down'
    },
    {
      name: "Time to Interactive",
      value: 1.8,
      target: 3.8,
      unit: "s",
      status: 'excellent',
      trend: 'up'
    }
  ])

  // Core Web Vitals
  const webVitals: WebVital[] = [
    {
      name: "LCP (Largest Contentful Paint)",
      value: 1.2,
      target: 2.5,
      description: "Measures loading performance",
      impact: 'high'
    },
    {
      name: "FID (First Input Delay)",
      value: 45,
      target: 100,
      description: "Measures interactivity",
      impact: 'high'
    },
    {
      name: "CLS (Cumulative Layout Shift)",
      value: 0.02,
      target: 0.1,
      description: "Measures visual stability",
      impact: 'high'
    },
    {
      name: "FCP (First Contentful Paint)",
      value: 0.8,
      target: 1.8,
      description: "Measures perceived loading speed",
      impact: 'medium'
    },
    {
      name: "TTFB (Time to First Byte)",
      value: 120,
      target: 600,
      description: "Measures server response time",
      impact: 'medium'
    }
  ]

  // System resources
  const [systemResources, setSystemResources] = useState({
    cpu: 15,
    memory: 45,
    network: 2.3,
    storage: 78
  })

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Simulate real-time monitoring
    const monitoringTimer = setInterval(() => {
      setSystemResources(prev => ({
        cpu: Math.max(5, Math.min(95, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(20, Math.min(90, prev.memory + (Math.random() - 0.5) * 5)),
        network: Math.max(0.1, Math.min(10, prev.network + (Math.random() - 0.5) * 2)),
        storage: prev.storage
      }))
    }, 3000)

    return () => {
      clearInterval(timer)
      clearInterval(monitoringTimer)
    }
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return '#10B981'
      case 'good': return '#3B82F6'
      case 'needs-improvement': return '#F59E0B'
      case 'poor': return '#EF4444'
      default: return '#6B7280'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="w-4 h-4" />
      case 'good': return <CheckCircle className="w-4 h-4" />
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />
      case 'poor': return <AlertTriangle className="w-4 h-4" />
      default: return <Activity className="w-4 h-4" />
    }
  }

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
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310B981' fillOpacity='0.1'%3E%3Cpath d='M25 25c0 13.807-11.193 25-25 25v-50c13.807 0 25 11.193 25 25z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            Performance
            <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Monitor
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real-time performance metrics, Core Web Vitals, and optimization insights
          </motion.p>
          
          {/* Live status */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex items-center justify-center space-x-4"
          >
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
              <span className="text-sm text-slate-500 font-mono">
                {isMonitoring ? 'Monitoring Active' : 'Monitoring Paused'}
              </span>
            </div>
            <span className="text-sm text-slate-500 font-mono">
              {currentTime.toLocaleTimeString()}
            </span>
          </motion.div>
        </motion.div>

        {/* Performance Metrics Grid */}
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
              {/* Status indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(metric.status)}
                  <span className="text-sm font-medium" style={{ color: getStatusColor(metric.status) }}>
                    {metric.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    metric.trend === 'up' ? 'bg-green-400' :
                    metric.trend === 'down' ? 'bg-red-400' : 'bg-blue-400'
                  }`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">{metric.name}</h3>
              
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold" style={{ color: getStatusColor(metric.status) }}>
                  {metric.value}{metric.unit}
                </span>
                <span className="text-sm text-slate-500">/ {metric.target}{metric.unit}</span>
              </div>

              {/* Progress bar */}
              <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{ backgroundColor: getStatusColor(metric.status) }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (metric.value / metric.target) * 100)}%` }}
                  transition={{
                    duration: 2,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Web Vitals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-semibold text-slate-900">Core Web Vitals</h3>
            </div>
            
            <div className="space-y-6">
              {webVitals.map((vital, index) => (
                <motion.div
                  key={vital.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-slate-900">{vital.name}</h4>
                      <p className="text-sm text-slate-500">{vital.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-green-600">
                        {vital.value}{vital.name.includes('TTFB') ? 'ms' : vital.name.includes('CLS') ? '' : 's'}
                      </span>
                      <div className="text-xs text-slate-500">
                        Target: {vital.target}{vital.name.includes('TTFB') ? 'ms' : vital.name.includes('CLS') ? '' : 's'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ 
                        backgroundColor: vital.value <= vital.target ? '#10B981' : '#F59E0B',
                        width: `${Math.min(100, (vital.value / vital.target) * 100)}%`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (vital.value / vital.target) * 100)}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Resources */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Gauge className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-semibold text-slate-900">System Resources</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { name: 'CPU Usage', value: systemResources.cpu, icon: Cpu, color: '#3B82F6' },
                { name: 'Memory Usage', value: systemResources.memory, icon: Memory, color: '#10B981' },
                { name: 'Network I/O', value: systemResources.network, icon: Network, color: '#F59E0B' },
                { name: 'Storage Usage', value: systemResources.storage, icon: HardDrive, color: '#8B5CF6' }
              ].map((resource, index) => (
                <motion.div
                  key={resource.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: `${resource.color}15` }}>
                        <resource.icon className="w-5 h-5" style={{ color: resource.color }} />
                      </div>
                      <span className="font-medium text-slate-900">{resource.name}</span>
                    </div>
                    <span className="text-lg font-semibold" style={{ color: resource.color }}>
                      {resource.value}{resource.name.includes('Network') ? ' MB/s' : '%'}
                    </span>
                  </div>
                  
                  <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ backgroundColor: resource.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${resource.value}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Optimization Recommendations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
        >
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <h3 className="text-2xl font-semibold text-slate-900">Optimization Status</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900">✅ Optimized</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Image optimization with Next.js Image</li>
                <li>• Code splitting and lazy loading</li>
                <li>• Efficient CSS with Tailwind</li>
                <li>• Optimized fonts with font-display: swap</li>
                <li>• Minified JavaScript and CSS</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900">🚀 Performance Score</h4>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98/100</div>
                <p className="text-sm text-slate-500">Excellent performance across all metrics</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 