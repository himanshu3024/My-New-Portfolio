"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse" />
    )
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light mode" },
    { name: "dark", icon: Moon, label: "Dark mode" },
    { name: "system", icon: Monitor, label: "System theme" }
  ]

  const currentThemeIndex = themes.findIndex(t => t.name === theme)
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length]

  const handleToggle = () => {
    setTheme(nextTheme.name)
  }

  return (
    <motion.button
      onClick={handleToggle}
      className="relative p-2.5 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${nextTheme.label.toLowerCase()}`}
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Icon container */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {themes.map((themeOption) => {
            if (themeOption.name !== theme) return null
            
            const IconComponent = themeOption.icon
            return (
              <motion.div
                key={themeOption.name}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
              >
                <IconComponent 
                  className={`w-5 h-5 ${
                    theme === 'light' ? 'text-amber-500' : 
                    theme === 'dark' ? 'text-slate-300' : 
                    'text-blue-500'
                  }`} 
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Subtle pulse effect for active state */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent"
        animate={{
          borderColor: theme === 'light' ? 'rgba(245, 158, 11, 0.3)' : 
                      theme === 'dark' ? 'rgba(148, 163, 184, 0.3)' : 
                      'rgba(59, 130, 246, 0.3)'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg"
        initial={{ y: 5, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        {nextTheme.label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-slate-700" />
      </motion.div>
    </motion.button>
  )
}