"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, title: "Day 1", image: "/images/events/day1.png" },
  { id: 2, title: "Day 2", image: "/images/events/day2.png" },
  { id: 3, title: "Day 3", image: "/images/events/day3.png" },
  { id: 4, title: "Day 4", image: "/images/events/day4.png" },
  { id: 5, title: "Day 5", image: "/images/events/day5.png" },
];

export default function EventFlow() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // 🔥 Auto Play once mounted
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
   <section id="eventflow" className="relative w-full py-24 bg-[#0D0D0D] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            TAAKRA{" "}
            <span className="text-[#6EA8DC] drop-shadow-[0_0_30px_#6EA8DC]">
              EVENT FLOW
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Experience 5 days of competition, creativity, and celebration.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl">

          {/* Slides Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`min-w-full relative flex items-center justify-center bg-black transition-transform duration-700 ${
                  current === index ? "scale-100" : "scale-95"
                }`}
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-4xl font-bold text-[#6EA8DC] drop-shadow-[0_0_25px_#6EA8DC]">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#6EA8DC] hover:text-black text-white p-3 rounded-full transition duration-300 backdrop-blur-md hover:scale-110"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#6EA8DC] hover:text-black text-white p-3 rounded-full transition duration-300 backdrop-blur-md hover:scale-110"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 transition-all duration-300 rounded-full ${
                current === index
                  ? "w-10 bg-[#6EA8DC] shadow-[0_0_15px_#6EA8DC] animate-pulse"
                  : "w-3 bg-gray-600 hover:w-5 hover:bg-[#6EA8DC]/70"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
