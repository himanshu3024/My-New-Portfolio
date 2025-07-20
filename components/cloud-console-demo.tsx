"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Terminal, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Cloud,
  Play,
  Square,
  RotateCcw,
  Settings,
  Eye,
  EyeOff,
  Copy,
  Check
} from "lucide-react"

interface ConsoleCommand {
  command: string
  output: string
  type: 'success' | 'error' | 'info'
  timestamp: Date
}

interface CloudResource {
  id: string
  name: string
  type: string
  status: 'running' | 'stopped' | 'error'
  region: string
  cost: number
}

export default function CloudConsoleDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isRunning, setIsRunning] = useState(false)
  const [showOutput, setShowOutput] = useState(true)
  const [copied, setCopied] = useState(false)
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<ConsoleCommand[]>([])
  const [cloudResources, setCloudResources] = useState<CloudResource[]>([
    {
      id: "i-1234567890abcdef0",
      name: "web-server-01",
      type: "EC2 Instance",
      status: "running",
      region: "us-east-1",
      cost: 0.12
    },
    {
      id: "vol-0987654321fedcba0",
      name: "web-server-01-vol",
      type: "EBS Volume",
      status: "running",
      region: "us-east-1",
      cost: 0.08
    },
    {
      id: "sg-1234567890abcdef0",
      name: "web-server-sg",
      type: "Security Group",
      status: "running",
      region: "us-east-1",
      cost: 0.00
    }
  ])

  const predefinedCommands = [
    "aws ec2 describe-instances",
    "aws s3 ls",
    "aws cloudformation list-stacks",
    "terraform plan",
    "docker ps",
    "kubectl get pods"
  ]

  const executeCommand = (cmd: string) => {
    const newCommand: ConsoleCommand = {
      command: cmd,
      output: generateOutput(cmd),
      type: 'success',
      timestamp: new Date()
    }
    
    setCommandHistory(prev => [...prev, newCommand])
    setCurrentCommand("")
  }

  const generateOutput = (cmd: string): string => {
    const outputs: { [key: string]: string } = {
      "aws ec2 describe-instances": `{
  "Reservations": [
    {
      "Instances": [
        {
          "InstanceId": "i-1234567890abcdef0",
          "InstanceType": "t3.micro",
          "State": {
            "Name": "running"
          },
          "PublicIpAddress": "52.23.45.67",
          "LaunchTime": "2024-01-15T10:30:00.000Z"
        }
      ]
    }
  ]
}`,
      "aws s3 ls": `2024-01-15 14:30:00 my-portfolio-bucket
2024-01-15 14:25:00 backup-storage
2024-01-15 14:20:00 static-assets`,
      "aws cloudformation list-stacks": `{
  "StackSummaries": [
    {
      "StackName": "Portfolio-Infrastructure",
      "StackStatus": "CREATE_COMPLETE",
      "CreationTime": "2024-01-15T10:00:00.000Z"
    }
  ]
}`,
      "terraform plan": `Terraform will perform the following actions:

  # aws_instance.web_server will be created
  + resource "aws_instance" "web_server" {
      + ami           = "ami-12345678"
      + instance_type = "t3.micro"
      + tags          = {
          + "Name" = "Web Server"
        }
    }

Plan: 1 to add, 0 to change, 0 to destroy.`,
      "docker ps": `CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
abc123def456   nginx     "/docker-entrypoint.…"   2 hours ago   Up 2 hours   0.0.0.0:80->80/tcp   web-server`,
      "kubectl get pods": `NAME                     READY   STATUS    RESTARTS   AGE
web-app-7d8f9c6b4-x2y3z   1/1     Running   0          2h
api-server-5e6f7g8h9-i1j2k   1/1     Running   0          1h`
    }

    return outputs[cmd] || `Command '${cmd}' not found. Type 'help' for available commands.`
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
    <section ref={ref} className="py-24 px-6 bg-slate-900 relative overflow-hidden">
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fillOpacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light text-white mb-6">
            Interactive
            <span className="font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Cloud Console
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience real cloud management with this interactive AWS/Azure console simulation
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Console Terminal */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Terminal className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Cloud Console</h3>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                  onClick={() => setShowOutput(!showOutput)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showOutput ? <EyeOff className="w-4 h-4 text-slate-300" /> : <Eye className="w-4 h-4 text-slate-300" />}
                </motion.button>
                <motion.button
                  className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                  onClick={() => setCommandHistory([])}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="w-4 h-4 text-slate-300" />
                </motion.button>
              </div>
            </div>

            {/* Console Output */}
            <div className="bg-slate-900 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm">
              {showOutput && (
                <div className="space-y-2">
                  {commandHistory.map((cmd, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-green-400">$</span>
                        <span className="text-white">{cmd.command}</span>
                        <motion.button
                          className="text-slate-400 hover:text-white transition-colors"
                          onClick={() => copyToClipboard(cmd.command)}
                          whileHover={{ scale: 1.1 }}
                        >
                          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </motion.button>
                      </div>
                      <div className="text-slate-300 ml-4 whitespace-pre-wrap">{cmd.output}</div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {/* Command Input */}
              <div className="flex items-center space-x-2 mt-4">
                <span className="text-green-400">$</span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && currentCommand.trim()) {
                      executeCommand(currentCommand.trim())
                    }
                  }}
                  placeholder="Enter cloud command..."
                  className="flex-1 bg-transparent text-white outline-none border-none"
                />
              </div>
            </div>

            {/* Quick Commands */}
            <div className="mt-4">
              <p className="text-sm text-slate-400 mb-2">Quick Commands:</p>
              <div className="flex flex-wrap gap-2">
                {predefinedCommands.map((cmd, index) => (
                  <motion.button
                    key={index}
                    onClick={() => executeCommand(cmd)}
                    className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cmd.split(' ')[1]}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cloud Resources Dashboard */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Cloud className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Cloud Resources</h3>
              </div>
              <motion.button
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4 mr-2 inline" />
                Deploy
              </motion.button>
            </div>

            {/* Resources List */}
            <div className="space-y-4">
              {cloudResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        resource.status === 'running' ? 'bg-green-400' :
                        resource.status === 'stopped' ? 'bg-yellow-400' : 'bg-red-400'
                      }`} />
                      <div>
                        <h4 className="text-white font-medium">{resource.name}</h4>
                        <p className="text-slate-400 text-sm">{resource.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm">{resource.region}</p>
                      <p className="text-green-400 text-sm">${resource.cost}/hr</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cost Summary */}
            <div className="mt-6 p-4 bg-slate-700 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Total Cost (24h):</span>
                <span className="text-green-400 font-semibold">
                  ${(cloudResources.reduce((sum, r) => sum + r.cost, 0) * 24).toFixed(2)}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: Server,
              title: "Real-time Monitoring",
              description: "Live resource monitoring with instant updates"
            },
            {
              icon: Shield,
              title: "Security Controls",
              description: "IAM policies and security group management"
            },
            {
              icon: Zap,
              title: "Auto-scaling",
              description: "Automatic resource scaling based on demand"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 