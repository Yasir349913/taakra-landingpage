"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import Image from 'next/image';

const clientsImg = [
    {
        name: "ACM",
        imgPath: "/images/logos/acm.jfif"
    },
    {
        name: "CSS",
        imgPath: "/images/logos/css.jpg"
    },
    {
        name: "Debating Society",
        imgPath: "/images/logos/depating.jfif"
    },
    {
        name: "IEC",
        imgPath: "/images/logos/iec.png"
    },
    {
        name: "MLSA",
        imgPath: "/images/logos/mlsa.png"
    },
    {
        name: "Sports Society",
        imgPath: "/images/logos/sports.jfif"
    },
    {
        name: "Ushers",
        imgPath: "/images/logos/ushers.jfif"
    },
    {
        name: "NISA",
        imgPath: "/images/logos/nisa.jfif"
    },
    {
        name: "Psychology Society",
        imgPath: "/images/logos/psychology.jfif"
    },
    {
        name: "IEEE",
        imgPath: "/images/logos/iee.jfif"
    },

];

function LogoSlider() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children) as HTMLLIElement[];

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLLIElement;
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            // Set animation properties
            containerRef.current.style.setProperty("--animation-direction", "forwards");
            containerRef.current.style.setProperty("--animation-duration", "60s");
            setStart(true);
        }
    }

    return (
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden" data-aos="fade-up">
            <div
                ref={containerRef}
                className={cn(
                    "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                )}
            >
                <ul
                    ref={scrollerRef}
                    className={cn(
                        "flex min-w-full shrink-0 gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-4 w-max flex-nowrap",
                        start && "animate-scroll",
                        "hover:[animation-play-state:paused]"
                    )}
                >
                    {clientsImg.map((item, idx) => (
                        <li
                            key={item.name + '-' + idx}
                            className="relative shrink-0"
                        >

                            <div className="relative w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] flex items-center justify-center rounded-full overflow-hidden bg-white/10">
                                <Image
                                    src={item.imgPath}
                                    alt={item.name}
                                    fill
                                    className="object-cover rounded-full"
                                    style={{
                                        mixBlendMode: 'screen',
                                    }}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

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
                    animation: scroll var(--animation-duration, 60s) linear infinite var(--animation-direction, forwards);
                }
            `}</style>
        </section>
    );
}
export default LogoSlider;