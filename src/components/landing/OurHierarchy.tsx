"use client";
import React from "react";
import Image from "next/image";

const MemberCard = React.memo(
  ({ member, height }: { member: { image: string }; height?: string }) => (
    <article
      className={`group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl max-w-sm mx-auto mt-8 shadow-xl bg-[#111111] hover:shadow-[0_0_30px_#6EA8DC] transition-transform duration-300 hover:-translate-y-2 ${height}`}
    >
      {/* Image */}
      <Image
        src={member.image}
        alt="Team Member"
        fill
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        quality={75}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#6EA8DC]/20 via-transparent to-transparent" />
    </article>
  )
);

MemberCard.displayName = "MemberCard";

export function OurHierarchy() {
  const leadership = [
    { image: "/images/hierarchy/shumail.jpg" },
    { image: "/images/hierarchy/qudratullah-azeem.jpg" },
    { image: "/images/hierarchy/aroosa-khan.jpg" },
  ];

  const members = [
    { image: "/images/hierarchy/abdul-hannan.JPG" },
    { image: "/images/hierarchy/laiba-naveed.jpg" },
    { image: "/images/hierarchy/zoha-fatima.jpg" },
    { image: "/images/hierarchy/raja-rayan-ahmad.jpg" },
    { image: "/images/hierarchy/sufyan-khan.jpg" },
    { image: "/images/hierarchy/shawal-abrar.jpg" },
    { image: "/images/hierarchy/muhammad-daud.jpg" },
    { image: "/images/hierarchy/hadia-ahmed.jpg" },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Our <span className="text-[#6EA8DC] drop-shadow-[0_0_20px_#6EA8DC]">Hierarchy</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated leadership team driving Taakra forward with passion and energy.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {leadership.map((member, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="600">
              <MemberCard member={member} height="h-[32rem]" />
            </div>
          ))}
        </div>

        {/* All Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-12 sm:mt-16">
          {members.map((member, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 80} data-aos-duration="600">
              <MemberCard member={member} height="h-96" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurHierarchy;
