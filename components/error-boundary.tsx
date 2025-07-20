"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
    this.setState({ error, errorInfo })
    
    // Log error to analytics service
    this.logError(error, errorInfo)
  }

  private logError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real app, you would send this to your error tracking service
    // like Sentry, LogRocket, or Azure Application Insights
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    }
    
    console.log("Error logged:", errorData)
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  private handleGoHome = () => {
    window.location.href = "/"
  }

  private handleContact = () => {
    window.location.href = "mailto:gandhi111000@hotmail.com"
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/30 flex items-center justify-center p-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Error Icon */}
            <motion.div
              className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            >
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </motion.div>

            {/* Error Message */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Oops! Something went wrong
            </motion.h1>

            <motion.p
              className="text-lg text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We encountered an unexpected error while loading this page. 
              Don't worry, our team has been notified and we're working to fix it.
            </motion.p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div
                className="bg-slate-100 rounded-lg p-4 mb-8 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-semibold text-slate-900 mb-2">Error Details:</h3>
                <p className="text-sm text-slate-700 mb-2">{this.state.error.message}</p>
                <details className="text-xs text-slate-600">
                  <summary className="cursor-pointer hover:text-slate-800">Stack Trace</summary>
                  <pre className="mt-2 whitespace-pre-wrap overflow-x-auto">
                    {this.state.error.stack}
                  </pre>
                </details>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={this.handleRetry}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </motion.button>

              <motion.button
                onClick={this.handleGoHome}
                className="px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </motion.button>

              <motion.button
                onClick={this.handleContact}
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Support</span>
              </motion.button>
            </motion.div>

            {/* Additional Help */}
            <motion.div
              className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-700 text-sm">
                If this problem persists, please contact me directly at{" "}
                <a href="mailto:gandhi111000@hotmail.com" className="underline hover:text-blue-900">
                  gandhi111000@hotmail.com
                </a>
                {" "}or call{" "}
                <a href="tel:437-267-3965" className="underline hover:text-blue-900">
                  +1 (437) 267-3965
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

// Hook for functional components
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null)

  const handleError = React.useCallback((error: Error) => {
    console.error("Error caught by useErrorHandler:", error)
    setError(error)
  }, [])

  const clearError = React.useCallback(() => {
    setError(null)
  }, [])

  return { error, handleError, clearError }
}

// Higher-order component for error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    )
  }
} 