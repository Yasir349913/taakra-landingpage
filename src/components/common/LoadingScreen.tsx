"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    const timer = setTimeout(() => {
      setVisible(false);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    }, 800); // slightly longer for smoother animation

    return () => {
      clearTimeout(timer);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999]"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2d8] via-[#f0f6ec] to-[#ffffff]" />

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              {/* Logo */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative w-24 h-24 mx-auto mb-6"
              >
                <Image
                  src="/images/logos/taakra logo.png"
                  alt="Taakra Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold mb-2"
              >
                <span className="text-black">Taakra </span>
                <span className="bg-gradient-to-r from-[#3d6b1f] via-[#4a7c2a] to-[#3d6b1f] bg-clip-text text-transparent">
                  UCP
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-700 text-sm sm:text-base mb-8"
              >
                Discover. Connect. Grow.
              </motion.p>

              {/* Spinner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center"
              >
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 border-4 border-[#3d6b1f]/20 rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 border-4 border-transparent border-t-[#3d6b1f] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden z-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-[#3d6b1f]/20 rounded-full"
                style={{
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 17) % 100}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
