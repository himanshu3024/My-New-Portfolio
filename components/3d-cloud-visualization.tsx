"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  Cpu,
  Network,
  HardDrive,
  Wifi,
  Lock,
  Activity
} from "lucide-react"

interface CloudNode {
  id: string
  type: string
  icon: any
  color: string
  position: { x: number; y: number; z: number }
  connections: string[]
  status: 'active' | 'inactive' | 'warning'
  data: {
    cpu: number
    memory: number
    network: number
    storage: number
  }
}

export default function Cloud3DVisualization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [isRotating, setIsRotating] = useState(true)

  const cloudNodes: CloudNode[] = [
    {
      id: "internet",
      type: "Internet",
      icon: Globe,
      color: "#06B6D4",
      position: { x: 50, y: 10, z: 0 },
      connections: ["load-balancer"],
      status: "active",
      data: { cpu: 5, memory: 10, network: 95, storage: 5 }
    },
    {
      id: "load-balancer",
      type: "Load Balancer",
      icon: Network,
      color: "#3B82F6",
      position: { x: 50, y: 25, z: 0 },
      connections: ["internet", "web-server-1", "web-server-2", "security"],
      status: "active",
      data: { cpu: 15, memory: 30, network: 85, storage: 20 }
    },
    {
      id: "security",
      type: "Security Gateway",
      icon: Shield,
      color: "#EF4444",
      position: { x: 50, y: 40, z: 0 },
      connections: ["load-balancer", "web-server-1", "web-server-2"],
      status: "active",
      data: { cpu: 10, memory: 25, network: 90, storage: 5 }
    },
    {
      id: "web-server-1",
      type: "Web Server 1",
      icon: Server,
      color: "#10B981",
      position: { x: 30, y: 55, z: 20 },
      connections: ["security", "database", "cache"],
      status: "active",
      data: { cpu: 45, memory: 60, network: 40, storage: 35 }
    },
    {
      id: "web-server-2",
      type: "Web Server 2",
      icon: Server,
      color: "#10B981",
      position: { x: 70, y: 55, z: -20 },
      connections: ["security", "database", "cache"],
      status: "active",
      data: { cpu: 38, memory: 55, network: 42, storage: 30 }
    },
    {
      id: "cache",
      type: "Redis Cache",
      icon: Zap,
      color: "#F59E0B",
      position: { x: 50, y: 70, z: 0 },
      connections: ["web-server-1", "web-server-2", "database"],
      status: "active",
      data: { cpu: 20, memory: 45, network: 60, storage: 15 }
    },
    {
      id: "database",
      type: "PostgreSQL DB",
      icon: Database,
      color: "#8B5CF6",
      position: { x: 50, y: 85, z: 0 },
      connections: ["web-server-1", "web-server-2", "cache", "backup"],
      status: "active",
      data: { cpu: 25, memory: 80, network: 30, storage: 75 }
    },
    {
      id: "backup",
      type: "Backup Storage",
      icon: HardDrive,
      color: "#6B7280",
      position: { x: 50, y: 95, z: 0 },
      connections: ["database"],
      status: "active",
      data: { cpu: 5, memory: 15, network: 20, storage: 90 }
    }
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

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  const getConnectionPath = (from: CloudNode, to: CloudNode) => {
    const fromPos = from.position
    const toPos = to.position
    
    return `M ${fromPos.x} ${fromPos.y} L ${toPos.x} ${toPos.y}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#10B981'
      case 'warning': return '#F59E0B'
      case 'inactive': return '#EF4444'
      default: return '#6B7280'
    }
  }

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={nodeVariants} className="text-4xl md:text-5xl font-light text-white mb-6">
            3D Cloud
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Infrastructure
            </span>
          </motion.h2>
          <motion.p variants={nodeVariants} className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Interactive 3D visualization of cloud architecture and infrastructure components
          </motion.p>
        </motion.div>

        {/* 3D Visualization Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative h-96 md:h-[500px] bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden"
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {cloudNodes.map((node) =>
              node.connections.map((connectionId) => {
                const targetNode = cloudNodes.find(n => n.id === connectionId)
                if (!targetNode) return null
                
                return (
                  <motion.path
                    key={`${node.id}-${connectionId}`}
                    d={getConnectionPath(node, targetNode)}
                    stroke={node.color}
                    strokeWidth="3"
                    fill="none"
                    opacity="0.6"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-10"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </motion.path>
                )
              })
            )}
          </svg>

          {/* Cloud Nodes */}
          {cloudNodes.map((node, index) => (
            <motion.div
              key={node.id}
              variants={nodeVariants}
              className={`absolute cursor-pointer group ${
                hoveredNode === node.id ? 'z-20' : 'z-10'
              }`}
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: `translate(-50%, -50%) translateZ(${node.position.z}px)`,
              }}
              whileHover={{ scale: 1.2, z: 50 }}
              onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              onHoverStart={() => setHoveredNode(node.id)}
              onHoverEnd={() => setHoveredNode(null)}
            >
              {/* Node Container */}
              <motion.div
                className={`relative p-4 rounded-2xl shadow-2xl border-2 transition-all duration-300 ${
                  selectedNode === node.id 
                    ? 'border-white shadow-white/20' 
                    : 'border-slate-600 hover:border-white/50'
                }`}
                style={{
                  backgroundColor: `${node.color}15`,
                  backdropFilter: 'blur(10px)',
                }}
                animate={{
                  rotateY: isRotating ? [0, 360] : 0,
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {/* Status Indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-800"
                     style={{ backgroundColor: getStatusColor(node.status) }} />
                
                {/* Icon */}
                <node.icon className="w-8 h-8" style={{ color: node.color }} />
                
                {/* Node Label */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {node.type}
                </motion.div>
              </motion.div>

              {/* Detailed Info Panel */}
              {selectedNode === node.id && (
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-slate-900 text-white p-4 rounded-lg shadow-2xl border border-slate-700 min-w-48"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                >
                  <h4 className="font-semibold mb-3 text-center">{node.type}</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>CPU</span>
                        <span>{node.data.cpu}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: node.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${node.data.cpu}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Memory</span>
                        <span>{node.data.memory}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: node.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${node.data.memory}%` }}
                          transition={{ duration: 1, delay: 0.4 }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Network</span>
                        <span>{node.data.network}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: node.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${node.data.network}%` }}
                          transition={{ duration: 1, delay: 0.6 }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Storage</span>
                        <span>{node.data.storage}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: node.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${node.data.storage}%` }}
                          transition={{ duration: 1, delay: 0.8 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mt-8 space-x-4"
        >
          <motion.button
            onClick={() => setIsRotating(!isRotating)}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Activity className="w-4 h-4" />
            <span>{isRotating ? 'Pause' : 'Start'} Rotation</span>
          </motion.button>
          
          <motion.button
            onClick={() => setSelectedNode(null)}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear Selection
          </motion.button>
        </motion.div>

        {/* Legend */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid md:grid-cols-4 gap-6"
        >
          {[
            { color: '#06B6D4', label: 'Internet', description: 'External network connection' },
            { color: '#3B82F6', label: 'Load Balancer', description: 'Distributes traffic across servers' },
            { color: '#EF4444', label: 'Security Gateway', description: 'Protects infrastructure' },
            { color: '#10B981', label: 'Web Servers', description: 'Handles application requests' },
            { color: '#F59E0B', label: 'Redis Cache', description: 'Improves response times' },
            { color: '#8B5CF6', label: 'PostgreSQL DB', description: 'Stores and manages data' },
            { color: '#6B7280', label: 'Backup Storage', description: 'Data backup and recovery' },
            { color: '#06B6D4', label: 'Monitoring', description: 'Tracks system health' }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={nodeVariants}
              className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700"
            >
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
              <div>
                <h4 className="text-white font-medium">{item.label}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 