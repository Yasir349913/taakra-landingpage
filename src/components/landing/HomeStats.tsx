"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = "",
  duration = 2000,
  inView,
}) => {
  const [count, setCount] = useState<number>(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOut * target);

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, inView]);

  return (
    <span className="text-[#6EA8DC] drop-shadow-[0_0_25px_#6EA8DC]">
      {count}
      {suffix}
    </span>
  );
};

const HomeStats: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      number: 5000,
      suffix: "+",
      title: "Participants",
    },
    {
      number: 50,
      suffix: "+",
      title: "Competitions",
    },
    {
      number: 20,
      suffix: "+",
      title: "Universities",
    },
    {
      number: 5,
      suffix: "",
      title: "Days of Energy",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref}>

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              TAAKRA IN{" "}
              <span className="text-[#6EA8DC] drop-shadow-[0_0_20px_#6EA8DC]">
                NUMBERS
              </span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#181818] border border-white/10 rounded-2xl p-10 text-center hover:border-[#6EA8DC] transition duration-300 hover:shadow-[0_0_30px_#6EA8DC]/30"
              >
                <div className="text-6xl md:text-7xl font-extrabold mb-4">
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                    duration={2000}
                    inView={inView}
                  />
                </div>

                <div className="text-white text-lg font-semibold tracking-wide">
                  {stat.title}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomeStats;
