"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
    useEffect(() => {
        // Initialize AOS after the loading screen disappears
        const timer = setTimeout(() => {
            AOS.init({
                duration: 1000,
                once: false,
                easing: 'ease-out',
                offset: 100,
                delay: 100,
                mirror: true,
            });
        }, 600); // Wait for loading screen to disappear (500ms) + small buffer

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default AOSInitializer;
