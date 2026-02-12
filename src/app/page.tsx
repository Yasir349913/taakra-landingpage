// src/app/page.tsx
import dynamic from "next/dynamic";
import HomeHero from "@/components/landing/HomeHero";

// Dynamic imports
const About = dynamic(() => import("@/components/landing/About"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 rounded-lg mx-4 my-8"></div>
  ),
});

const OurHierarchy = dynamic(() => import("@/components/landing/OurHierarchy"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 rounded-lg mx-4 my-8"></div>
  ),
});

const HomeStats = dynamic(() => import("@/components/landing/HomeStats"), {
  loading: () => (
    <div className="h-64 animate-pulse bg-gray-100 rounded-lg mx-4 my-8"></div>
  ),
});

const Events = dynamic(() => import("@/components/landing/Events"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 rounded-lg mx-4 my-8"></div>
  ),
});

/* 🔥 Replace Video with EventFlow */
const EventFlow = dynamic(() => import("@/components/landing/EventFlow"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 rounded-lg mx-4 my-8"></div>
  ),
});

const FAQ = dynamic(() => import("@/components/landing/FAQ"), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gray-100 rounded-lg mx-4 my-8"></div>
  ),
});

export default function HomePage() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <HomeHero />
      <EventFlow />
      <About />
      <HomeStats />

     
      

      <OurHierarchy />
      <Events />
      <FAQ />
    </main>
  );
}
