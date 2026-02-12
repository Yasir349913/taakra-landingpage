"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClasses =
    "text-white text-sm font-medium tracking-wide hover:text-[#6EA8DC] transition duration-300";

  const mobileButtonClasses =
    "text-left px-4 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const offset = element.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-16 h-16">
            <Image
              src="/images/logos/taakra logo.png"
              alt="Taakra Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-white font-bold text-xl tracking-wider">
            TAAKRA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className={navLinkClasses}
          >
            About
          </a>
          <a
            href="#competitions"
            onClick={(e) => handleSmoothScroll(e, "#competitions")}
            className={navLinkClasses}
          >
            Competitions
          </a>
          <a
            href="#eventflow"
            onClick={(e) => handleSmoothScroll(e, "#eventflow")}
            className={navLinkClasses}
          >
            Event Flow
          </a>
          <a
            href="#our-team"
            onClick={(e) => handleSmoothScroll(e, "#our-team")}
            className={navLinkClasses}
          >
            Core Team
          </a>
          <a
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, "#faq")}
            className={navLinkClasses}
          >
            FAQ
          </a>

          {/* CTA Button */}
          <a
            href="#register"
            onClick={(e) => handleSmoothScroll(e, "#register")}
            className="group bg-[#6EA8DC] text-black px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_#6EA8DC] transition duration-300"
          >
            Register Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111] border-t border-white/10 px-6 py-6 space-y-4">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className={mobileButtonClasses}
          >
            About
          </a>
          <a
            href="#competitions"
            onClick={(e) => handleSmoothScroll(e, "#competitions")}
            className={mobileButtonClasses}
          >
            Competitions
          </a>
          <a
            href="#eventflow"
            onClick={(e) => handleSmoothScroll(e, "#eventflow")}
            className={mobileButtonClasses}
          >
            Event Flow
          </a>
          <a
            href="#team"
            onClick={(e) => handleSmoothScroll(e, "#team")}
            className={mobileButtonClasses}
          >
            Core Team
          </a>
          <a
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, "#faq")}
            className={mobileButtonClasses}
          >
            FAQ
          </a>

          <a
            href="#register"
            onClick={(e) => handleSmoothScroll(e, "#register")}
            className="block text-center bg-[#6EA8DC] text-black py-3 rounded-full font-semibold hover:shadow-[0_0_15px_#6EA8DC] transition"
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
