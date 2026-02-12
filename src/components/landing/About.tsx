"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 bg-[#121212] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              About{" "}
              <span className="text-[#6EA8DC] drop-shadow-[0_0_20px_#6EA8DC]">
                TAAKRA
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              TAAKRA is UCP’s ultimate competitive festival — a platform where
              passion meets performance. It brings together the brightest minds,
              boldest innovators, and fiercest competitors under one stage.
            </p>

            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              From high-energy tech battles to creative showdowns and strategic
              business challenges, TAAKRA is designed to test limits, build
              confidence, and create unforgettable moments.
            </p>

            {/* Highlight Points */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              <div className="bg-[#181818] p-6 rounded-xl border border-white/10 hover:border-[#6EA8DC] transition duration-300 hover:shadow-[0_0_20px_#6EA8DC]/30">
                <h3 className="text-[#6EA8DC] font-bold text-lg mb-2">
                  50+ Competitions
                </h3>
                <p className="text-gray-400 text-sm">
                  A wide range of technical, creative, and strategic contests.
                </p>
              </div>

              <div className="bg-[#181818] p-6 rounded-xl border border-white/10 hover:border-[#6EA8DC] transition duration-300 hover:shadow-[0_0_20px_#6EA8DC]/30">
                <h3 className="text-[#6EA8DC] font-bold text-lg mb-2">
                  5000+ Participants
                </h3>
                <p className="text-gray-400 text-sm">
                  Students competing from multiple universities.
                </p>
              </div>

              <div className="bg-[#181818] p-6 rounded-xl border border-white/10 hover:border-[#6EA8DC] transition duration-300 hover:shadow-[0_0_20px_#6EA8DC]/30">
                <h3 className="text-[#6EA8DC] font-bold text-lg mb-2">
                  5 Days of Energy
                </h3>
                <p className="text-gray-400 text-sm">
                  Non-stop excitement, learning, and celebration.
                </p>
              </div>

              <div className="bg-[#181818] p-6 rounded-xl border border-white/10 hover:border-[#6EA8DC] transition duration-300 hover:shadow-[0_0_20px_#6EA8DC]/30">
                <h3 className="text-[#6EA8DC] font-bold text-lg mb-2">
                  Massive Prize Pool
                </h3>
                <p className="text-gray-400 text-sm">
                  Compete to win big and showcase your talent.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/img/about-taakra.jpg"
              alt="Taakra Event"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/30 transition" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
