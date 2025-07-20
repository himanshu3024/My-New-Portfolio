"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  X,
  Minimize2,
  Maximize2,
  Loader2
} from "lucide-react"

interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  type: 'text' | 'code' | 'link'
}

interface QuickResponse {
  text: string
  category: string
}

export default function AIChatbot() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your cloud computing assistant. I can help you learn about cloud technologies, answer questions about my portfolio, or assist with cloud concepts. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickResponses: QuickResponse[] = [
    { text: "Tell me about your AWS experience", category: "skills" },
    { text: "Show me your projects", category: "projects" },
    { text: "What cloud certifications do you have?", category: "certifications" },
    { text: "Explain serverless architecture", category: "learning" },
    { text: "How do you handle security?", category: "security" },
    { text: "What's your learning path?", category: "journey" }
  ]

  const botResponses: { [key: string]: string } = {
    "aws": "I'm currently learning AWS and have hands-on experience with EC2, S3, Lambda, and CloudFormation. I've completed the AWS Cloud Practitioner preparation and am working towards the Solutions Architect Associate certification. My projects include deploying web applications and implementing CI/CD pipelines.",
    "azure": "I'm specializing in Microsoft Azure through my postgraduate program at George Brown College. I have experience with Azure Virtual Machines, App Services, Functions, and Azure DevOps. I'm preparing for the Azure Administrator Associate certification.",
    "projects": "Here are some of my key projects:\n\n1. **Portfolio Website** - Deployed on Azure Static Web Apps with serverless backend\n2. **E-commerce Platform** - Full-stack application with containerization\n3. **DevOps Pipeline** - Automated CI/CD with GitHub Actions\n4. **Cloud Infrastructure** - Infrastructure as Code with Terraform\n\nWould you like me to explain any specific project in detail?",
    "certifications": "I'm currently preparing for several cloud certifications:\n\n• **AWS Cloud Practitioner** - In progress\n• **Azure Administrator Associate** - In progress\n• **Google Cloud Professional Cloud Architect** - Planned\n• **Project Management Professional (PMP)** - Completed foundation\n\nI believe in continuous learning and practical application of cloud technologies.",
    "serverless": "Serverless architecture is a cloud computing model where the cloud provider manages the infrastructure and automatically allocates resources as needed. Key benefits include:\n\n• **Cost Efficiency** - Pay only for actual usage\n• **Scalability** - Automatic scaling based on demand\n• **Reduced Management** - No server maintenance required\n• **Faster Development** - Focus on business logic\n\nI've worked with AWS Lambda and Azure Functions for various projects.",
    "security": "Security is crucial in cloud computing. My approach includes:\n\n• **Identity & Access Management (IAM)** - Principle of least privilege\n• **Network Security** - VPCs, Security Groups, and Network ACLs\n• **Data Encryption** - At rest and in transit\n• **Compliance** - Following industry standards and best practices\n• **Monitoring** - Real-time security monitoring and alerting\n\nI'm learning about security frameworks like SOC2, ISO 27001, and cloud-specific security tools.",
    "learning": "My learning journey follows a structured approach:\n\n1. **Foundation** - Cloud computing fundamentals and concepts\n2. **Platforms** - AWS, Azure, and GCP hands-on experience\n3. **DevOps** - CI/CD, containerization, and automation\n4. **Architecture** - Design patterns and best practices\n5. **Security** - Cloud security and compliance\n6. **Specialization** - Advanced topics and certifications\n\nI believe in learning by doing and applying concepts to real-world projects.",
    "contact": "You can reach me through multiple channels:\n\n• **Email**: gandhi111000@hotmail.com\n• **Phone**: +1-437-267-3965\n• **LinkedIn**: linkedin.com/in/himanshu-gandhi\n• **GitHub**: github.com/himanshu3024\n\nI'm always open to discussing cloud opportunities, collaborations, or technical questions!",
    "default": "I'm here to help with cloud computing questions, portfolio information, or technical discussions. You can ask me about:\n\n• My cloud experience and skills\n• Projects and achievements\n• Learning resources and certifications\n• Cloud architecture and best practices\n• Career advice and opportunities\n\nWhat specific topic would you like to explore?"
  }

  const generateResponse = async (userInput: string): Promise<string> => {
    setIsTyping(true)
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
    
    const lowerInput = userInput.toLowerCase()
    
    // Simple keyword matching (in a real app, this would be AI-powered)
    if (lowerInput.includes('aws') || lowerInput.includes('amazon')) {
      return botResponses['aws']
    } else if (lowerInput.includes('azure') || lowerInput.includes('microsoft')) {
      return botResponses['azure']
    } else if (lowerInput.includes('project')) {
      return botResponses['projects']
    } else if (lowerInput.includes('certification') || lowerInput.includes('cert')) {
      return botResponses['certifications']
    } else if (lowerInput.includes('serverless')) {
      return botResponses['serverless']
    } else if (lowerInput.includes('security') || lowerInput.includes('secure')) {
      return botResponses['security']
    } else if (lowerInput.includes('learn') || lowerInput.includes('journey')) {
      return botResponses['learning']
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach')) {
      return botResponses['contact']
    } else {
      return botResponses['default']
    }
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    setInputText("")

    const response = await generateResponse(inputText)
    
    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const handleQuickResponse = async (response: QuickResponse) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: response.text,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])

    const botResponse = await generateResponse(response.text)
    
    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-20 left-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Cloud Assistant</h3>
                  <p className="text-sm opacity-90">AI-powered cloud computing help</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => setIsMinimized(!isMinimized)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </motion.button>
              </div>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-900'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="bg-slate-100 text-slate-900 p-3 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">AI is typing...</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Quick Responses */}
              <div className="p-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 mb-2">Quick responses:</p>
                <div className="flex flex-wrap gap-2">
                  {quickResponses.map((response, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-full transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {response.text}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage()
                      }
                    }}
                    placeholder="Ask me about cloud computing..."
                    className="flex-1 p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </>
  )
} 