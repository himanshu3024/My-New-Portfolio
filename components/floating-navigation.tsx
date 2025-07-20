"use client"

import { useState, useEffect } from "react"
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Award, Mail, Menu, X, Sun, Moon, Download, Github, Linkedin } from "lucide-react"

export default function ModernNavbar() {
=======
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { Home, User, Briefcase, Award, Mail, Menu, X, TrendingUp, Target, Users } from "lucide-react"
import { DarkModeToggle } from "./dark-mode-toggle"

// Enhanced Navigation Item Component
const NavItem = ({ item, isActive, onClick, index }: any) => {
  const y = useMotionValue(0)
  const scale = useTransform(y, [-50, 0, 50], [0.8, 1, 0.8])

  return (
    <motion.button
      onClick={onClick}
      className={`relative p-4 rounded-2xl transition-all duration-300 group ${
        isActive 
          ? "bg-slate-900 dark:bg-slate-600 text-white shadow-lg" 
          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
      }`}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
      style={{ scale }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon with pulse effect */}
      <motion.div
        className="relative z-10"
        animate={isActive ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <item.icon className="w-6 h-6" />
      </motion.div>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
          layoutId="activeIndicator"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {/* Enhanced Tooltip */}
      <motion.div
        className="absolute left-full ml-6 top-1/2 transform -translate-y-1/2 bg-slate-900 dark:bg-slate-700 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl"
        initial={{ x: -10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        {item.label}
        <motion.div
          className="absolute right-full top-1/2 transform -translate-y-1/2 border-6 border-transparent border-r-slate-900 dark:border-r-slate-700"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: isActive
            ? "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
        }}
      />
    </motion.button>
  )
}

export default function FloatingNavigation() {
>>>>>>> 944fcff7a7434dcb442d1fa29bddaa77c08f2fe1
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "journey", label: "Journey", icon: Award },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <>
<<<<<<< HEAD
      {/* Modern Glassmorphism Navbar */}
=======
      {/* Dark Mode Toggle - Mobile (when menu is closed) */}
      {!isOpen && (
        <motion.div
          className="fixed top-6 right-20 z-50 md:hidden"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DarkModeToggle />
        </motion.div>
      )}

      {/* Enhanced Mobile Menu Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 md:hidden p-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Dark Mode Toggle - Desktop */}
      <motion.div
        className="fixed right-6 top-6 z-50 hidden md:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <DarkModeToggle />
      </motion.div>

      {/* Enhanced Desktop Navigation - Positioned from top */}
>>>>>>> 944fcff7a7434dcb442d1fa29bddaa77c08f2fe1
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-lg">H</span>
              </motion.div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">Himanshu Gandhi</h1>
                <p className="text-xs text-slate-500">Cloud Specialist</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
=======
        <motion.div
          className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 p-4 flex flex-col space-y-4 shadow-2xl relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
              index={index}
            />
          ))}

          {/* Vertical progress indicator */}
          <motion.div
            className="absolute left-2 top-4 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-20"
            style={{
              height: `${((navItems.findIndex((item) => item.id === activeSection) + 1) / navItems.length) * 80}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </motion.div>
      </motion.nav>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute top-20 right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 p-6 space-y-3 shadow-2xl min-w-[200px]"
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dark Mode Toggle in Mobile Menu */}
              <motion.div
                className="flex justify-center pb-3 border-b border-slate-200 dark:border-slate-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <DarkModeToggle />
              </motion.div>

              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-4 w-full p-4 rounded-2xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-slate-900 dark:bg-slate-600 text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
>>>>>>> 944fcff7a7434dcb442d1fa29bddaa77c08f2fe1
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4 text-slate-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4 text-slate-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Resume Download */}
              <motion.button
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </motion.button>

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <motion.a
                  href="https://github.com/himanshu3024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/himanshu-gandhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-slate-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-slate-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 w-full p-3 text-left text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Theme</span>
                    <motion.button
                      onClick={toggleDarkMode}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}
