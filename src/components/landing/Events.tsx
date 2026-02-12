"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

const competitionsData = [
  { id: 1, image: "/images/events/first.jpg" },
  { id: 2, image: "/images/events/second.jpg" },
  { id: 3, image: "/images/events/third.jpg" },
  { id: 4, image: "/images/events/fourth.jpeg" },
  { id: 5, image: "/images/events/fifth.png" },
  { id: 6, image: "/images/events/sixth.jpg" },
];

function Competitions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="competitions"
      className="relative w-full py-24 bg-[#0D0D0D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            TAAKRA{" "}
            <span className="text-[#6EA8DC] drop-shadow-[0_0_20px_#6EA8DC]">
              COMPETITIONS
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Compete. Conquer. Celebrate. Experience the ultimate competitive
            spirit at UCP.
          </p>
        </div>

        {/* Scrolling Cards */}
        <div
          className={cn(
            "relative w-full overflow-hidden",
            "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
          )}
        >
          <ul
            className={cn(
              "flex gap-12 w-max py-4 hover:[animation-play-state:paused]",
              isMounted && "animate-scroll"
            )}
          >
            {competitionsData.concat(competitionsData).map((comp, idx) => (
            <li key={`${comp.id}-${idx}`} className="shrink-0">
  <div className="group w-[300px] bg-[#181818] rounded-2xl overflow-hidden border border-white/10 hover:border-[#6EA8DC] transition duration-300 hover:shadow-[0_0_25px_#6EA8DC]/30">

    {/* Image */}
    <div className="relative w-full aspect-[5/4] overflow-hidden">
      <Image
        src={comp.image}
        alt={`Competition ${comp.id}`}
        fill
        sizes="300px"
        className="object-cover group-hover:scale-110 transition duration-500"
      />
    </div>

  </div>
</li>

            ))}
          </ul>
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Competitions;
