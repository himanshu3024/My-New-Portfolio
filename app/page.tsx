"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import FloatingNavigation from "@/components/floating-navigation"
import TestimonialsSection from "@/components/testimonials-section"
import JourneyTimeline from "@/components/journey-timeline"
import ServicesSection from "@/components/services-section"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Smooth scroll progress indicator
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    // Enhanced smooth scrolling
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "auto", // Change from "smooth" to "auto" for faster scrolling
            block: "start",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <motion.div ref={containerRef} className="relative min-h-screen">
      {/* Floating Navigation */}
      <FloatingNavigation />

      {/* Main Content */}
      <main className="relative">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="journey">
          <JourneyTimeline />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="certifications">
          <CertificationsSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ 
          scaleX,
          transition: 'transform 0.01s linear' // Add this for smoother scrolling
        }}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Himanshu Gandhi</h3>
              <TypedText text="Cloud Computing Student passionate about building scalable solutions with modern technologies." />
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-slate-400 hover:text-white transition-colors">
                  About
                </a>
                <a href="#projects" className="block text-slate-400 hover:text-white transition-colors">
                  Projects
                </a>
                <a href="#certifications" className="block text-slate-400 hover:text-white transition-colors">
                  Certifications
                </a>
                <a href="#contact" className="block text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a
                  href="mailto:gandhi111000@hotmail.com"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  gandhi111000@hotmail.com
                </a>
                <a href="tel:437-267-3965" className="block text-slate-400 hover:text-white transition-colors">
                  437-267-3965
                </a>
                <p className="text-slate-400">Toronto, Canada</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Himanshu Gandhi. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/himanshu3024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-gandhi-891204160/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}



export function TypedText({ text }: { text: string }) {
  return (
    <motion.p 
      className="text-slate-400 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }} // Slightly faster container fade-in
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.005, // Extremely fast character appearance
            delay: index * 0.005, // Much shorter delay between characters
            ease: "linear"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  )
}