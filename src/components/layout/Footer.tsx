"use client";
import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-[#6EA8DC] mb-4">
              TAAKRA 2026
            </h2>
            <p className="text-gray-400 leading-relaxed">
              UCP’s biggest competitive festival bringing together talent,
              passion, and energy under one stage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-[#6EA8DC] transition">About</a></li>
              <li><a href="#competitions" className="hover:text-[#6EA8DC] transition">Competitions</a></li>
              <li><a href="#team" className="hover:text-[#6EA8DC] transition">Core Team</a></li>
              <li><a href="#faq" className="hover:text-[#6EA8DC] transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                taakra@ucp.edu.pk
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                University of Central Punjab
              </div>
              <Link
                href="https://www.instagram.com/ucp.taakra/"
                target="_blank"
                className="flex items-center gap-2 hover:text-[#6EA8DC] transition"
              >
                <Instagram size={16} />
                @ucp.taakra
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 TAAKRA UCP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
