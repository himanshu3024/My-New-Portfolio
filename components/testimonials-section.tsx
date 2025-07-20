"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    avatar: "/placeholder-user.jpg",
    quote: "Himanshu is a dedicated and talented engineer. His cloud skills are top-notch!",
    title: "Cloud Architect, Tech Solutions Inc.",
  },
  {
    name: "John Smith",
    avatar: "/placeholder-user.jpg",
    quote: "A pleasure to work with—always delivers on time and with great quality.",
    title: "DevOps Lead, Startup Hub",
  },
  {
    name: "Emily Chen",
    avatar: "/placeholder-user.jpg",
    quote: "Himanshu's passion for learning and problem-solving is inspiring.",
    title: "Professor, University of Toronto",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Subtle Background Element */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Here’s what professors, colleagues, and collaborators say about working with me. I’m always eager to learn, grow, and help others succeed!
        </p>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
            >
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100 shadow"
              />
              <blockquote className="text-lg italic text-slate-700 mb-4">“{testimonials[index].quote}”</blockquote>
              <div className="font-semibold text-blue-700">{testimonials[index].name}</div>
              <div className="text-slate-500 text-sm">{testimonials[index].title}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-slate-200 hover:bg-blue-200 flex items-center justify-center text-blue-600 transition"
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-slate-200 hover:bg-blue-200 flex items-center justify-center text-blue-600 transition"
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-2">Want to share your experience?</h3>
          <p className="text-slate-600 mb-4">I’m always grateful for feedback and new connections. Feel free to reach out or leave a testimonial!</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
        {/* See All Testimonials Button (placeholder for future grid) */}
        <div className="mt-8">
          <button
            className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition"
            disabled
            title="More testimonials coming soon!"
          >
            See All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
}
