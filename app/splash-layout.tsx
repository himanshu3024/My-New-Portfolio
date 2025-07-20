"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-900"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7 } }}
            aria-label="Loading splash screen"
          >
            <motion.div
              className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center shadow-2xl border-4 border-white/20"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [0.7, 1.1, 1], opacity: 1, rotate: [0, 360] }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              <motion.span
                className="text-5xl font-extrabold bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                HG
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 0.5s' }}>{children}</div>
    </>
  );
} 