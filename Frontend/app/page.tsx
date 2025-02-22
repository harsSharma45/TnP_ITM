"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const words = [
  // "Innovation",
  // "Excellence",
  // "Leadership",
  // "Technology",
  // "Success"
  "reality",
  "depression",
  "misery",
  "1.2 LPA"
];

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    const timeout = setTimeout(() => {
      setShowButtons(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0A0118] text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118] via-[#1A0B2E] to-[#0A0118] opacity-80" />

      {/* Particle Effect */}
      <div className="absolute inset-0">
        <div className="particles-container">
          {[...Array(70)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-10"
          >
            {/* Title Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-6"
            >
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-light text-[#9D71FD]"
              >
                Welcome to the On-Campus No Placement
              </motion.h2>
              <motion.h1 
                className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9D71FD] via-[#7C3AED] to-[#4C1D95]"
              >
                BBDITM
              </motion.h1>
              <motion.div 
                className="text-3xl md:text-4xl font-medium text-[#E5E7EB] tracking-wide"
              >
                Online Seva Kendra
              </motion.div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed"
            >
              Bridging Dreams with Destiny | blah blah blah...
            </motion.p>

            {/* Animated Words */}
            <div className="h-20 flex items-center justify-center">
              <motion.div
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#9D71FD] to-[#7C3AED] bg-clip-text text-transparent"
              >
                {words[currentWord]}
              </motion.div>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: showButtons ? 1 : 0, 
                y: showButtons ? 0 : 20 
              }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-2xl mx-auto"
            >
              <Link href="/login" className="w-full md:w-1/2 max-w-[280px]">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#9D71FD] to-[#7C3AED] 
                    hover:from-[#7C3AED] hover:to-[#9D71FD] transition-all duration-300
                    text-white shadow-lg shadow-[#7C3AED]/25"
                >
                  <span className="text-xl font-medium">
                    Student Portal
                  </span>
                </motion.button>
              </Link>
              <Link href="/admin/login" className="w-full md:w-1/2 max-w-[280px]">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 rounded-xl bg-[#0A0118] border-2 border-[#9D71FD]
                    hover:bg-[#9D71FD]/10 transition-all duration-300
                    text-[#9D71FD] shadow-lg shadow-[#7C3AED]/25"
                >
                  <span className="text-xl font-medium">
                    Admin Portal
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

