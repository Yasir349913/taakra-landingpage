"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source
            src="https://res.cloudinary.com/drtuxwpar/video/upload/v1770916122/AQPfPl7f6qi2xbcMxz6tWsxw89td5G9LR6s-2Ua-vq8xhVtlxHbjYjtpZ2QkKFrChHRkJm_4TJLZ6xsfV54SYrKB-EJj3LXVTKoaSg6db1d1sQ_jpjnlt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight tracking-tight text-white"
        >
          <span className="block text-[#6EA8DC] drop-shadow-[0_0_35px_#6EA8DC]">
            TAAKRA 2026
          </span>
          <span className="block mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
            UCP’s Biggest Competitive Festival
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          A platform where talent meets competition. Experience high-energy battles, creativity, innovation, and unforgettable moments.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#register"
            className="group bg-[#6EA8DC] text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:shadow-[0_0_35px_#6EA8DC] transition duration-300"
          >
            Register Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            href="#competitions"
            className="px-8 py-4 rounded-full border border-[#6EA8DC] text-[#6EA8DC] font-semibold text-lg hover:bg-[#6EA8DC] hover:text-black transition duration-300"
          >
            View Competitions
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeHero;
