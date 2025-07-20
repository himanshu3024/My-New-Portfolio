"use client"

import { motion } from "framer-motion"
import { Loader2, AlertCircle, CheckCircle, RefreshCw } from "lucide-react"

interface LoadingStateProps {
  message?: string
  size?: "sm" | "md" | "lg"
}

interface ErrorStateProps {
  message: string
  onRetry?: () => void
}

interface SuccessStateProps {
  message: string
  onContinue?: () => void
}

export function LoadingState({ message = "Loading...", size = "md" }: LoadingStateProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-4 p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Loader2 className={`${sizeClasses[size]} text-blue-600`} />
      </motion.div>
      <motion.p
        className="text-slate-600 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.p>
    </motion.div>
  )
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-4 p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <AlertCircle className="w-12 h-12 text-red-500" />
      </motion.div>
      <motion.p
        className="text-slate-700 text-center max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {message}
      </motion.p>
      {onRetry && (
        <motion.button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </motion.button>
      )}
    </motion.div>
  )
}

export function SuccessState({ message, onContinue }: SuccessStateProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-4 p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <CheckCircle className="w-12 h-12 text-green-500" />
      </motion.div>
      <motion.p
        className="text-slate-700 text-center max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {message}
      </motion.p>
      {onContinue && (
        <motion.button
          onClick={onContinue}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Continue
        </motion.button>
      )}
    </motion.div>
  )
}

// Skeleton loading component
export function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`bg-slate-200 rounded animate-pulse ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )
}

// Shimmer effect component
export function ShimmerEffect({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
} 