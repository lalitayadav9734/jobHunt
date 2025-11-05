import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-3">JobHunt</h3>
          <p className="text-sm leading-relaxed">
            JobHunt connects talented individuals with top companies, helping
            them achieve their career dreams with transparency and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/jobs" className="hover:text-blue-400">Jobs</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-blue-400">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400"><Facebook size={22} /></a>
            <a href="#" className="hover:text-blue-400"><Twitter size={22} /></a>
            <a href="#" className="hover:text-blue-400"><Instagram size={22} /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} JobHunt. All rights reserved.
      </div>
    </footer>
  );
}
