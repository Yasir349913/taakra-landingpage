import React from "react";
import { cn } from "@/utils/cn";

type SpotlightProps = {
    className?: string;
    fill?: string;
    position?: "left" | "right";
};

export const Spotlight = ({ className, fill, position = "left" }: SpotlightProps) => {
    const isRight = position === "right";
    const rotation = isRight ? "45" : "-45";
    const ellipseCx = isRight ? "3287" : "500";

    return (
        <svg
            className={cn(
                "pointer-events-none absolute z-[1] h-[130%] sm:h-[200%] w-[200%] opacity-100",
                position === "left" ? "-left-[40%] top-0 -translate-y-[20%]" : "-right-[40%] top-0 -translate-y-[20%]",
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter={`url(#filter-${position})`}>
                <ellipse
                    cx={ellipseCx}
                    cy="300"
                    rx="1200"
                    ry="400"
                    transform={`rotate(${rotation} ${ellipseCx} 300)`}
                    fill={fill || "#3d6b1f"}
                    fillOpacity="0.3"
                ></ellipse>
            </g>
            <defs>
                <filter
                    id={`filter-${position}`}
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        stdDeviation="100"
                        result="effect1_foregroundBlur_1065_8"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
};
