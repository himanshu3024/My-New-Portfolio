"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Linkedin, Building } from "lucide-react"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Cloud Computing Professor",
      company: "George Brown College",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Himanshu is one of the most dedicated students I've taught. His passion for cloud computing is evident in every project he submits. He consistently goes above and beyond course requirements.",
      linkedinUrl: "#",
      projectType: "Academic Excellence",
    },
    {
      name: "James Wilson",
      role: "Study Group Leader",
      company: "Fleming College Alumni",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with Himanshu on group projects has been amazing. His project management skills and ability to coordinate team efforts made our capstone project a huge success.",
      linkedinUrl: "#",
      projectType: "Team Collaboration",
    },
    {
      name: "Maria Rodriguez",
      role: "Peer Mentor",
      company: "Cloud Computing Cohort",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Himanshu's dedication to learning cloud technologies is inspiring. He's always the first to help classmates and shares his knowledge generously. A true team player.",
      linkedinUrl: "#",
      projectType: "Peer Learning",
    },
    {
      name: "Alex Chen",
      role: "Lab Partner",
      company: "George Brown College",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "His technical skills and problem-solving approach are impressive. Himanshu can debug complex cloud configurations and always finds innovative solutions to challenging problems.",
      linkedinUrl: "#",
      projectType: "Technical Collaboration",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            What Peers
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Say
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Feedback from professors, classmates, and study partners who have witnessed my dedication to cloud computing
            and collaborative learning.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <motion.div
            key={currentTestimonial}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote Icon */}
            <motion.div
              className="absolute top-8 left-8 p-4 bg-blue-50 rounded-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Quote className="w-8 h-8 text-blue-600" />
            </motion.div>

            {/* Rating Stars */}
            <div className="flex justify-center mb-8">
              {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <motion.blockquote
              className="text-xl md:text-2xl text-slate-700 text-center leading-relaxed mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              "{testimonials[currentTestimonial].text}"
            </motion.blockquote>

            {/* Author Info */}
            <motion.div
              className="flex items-center justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-slate-900">{testimonials[currentTestimonial].name}</h4>
                <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</p>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  <Building className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-500 text-sm">{testimonials[currentTestimonial].company}</span>
                </div>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {testimonials[currentTestimonial].projectType}
                </span>
              </div>
              <motion.a
                href={testimonials[currentTestimonial].linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </motion.a>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-white rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-white rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center space-x-3 mb-16"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-blue-600 w-8" : "bg-slate-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 bg-white rounded-2xl border border-slate-200 cursor-pointer transition-all duration-300 ${
                index === currentTestimonial ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h5 className="font-semibold text-slate-900 text-sm">{testimonial.name}</h5>
                  <p className="text-slate-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm line-clamp-3">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Want to Collaborate?</h3>
            <p className="text-slate-600 mb-4">I'm always excited to work on cloud projects and learn from others.</p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Connect</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
