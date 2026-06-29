import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 sm:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
        {/* Brand System & Contextual Copy */}
        <div className="col-span-2 md:col-span-5 space-y-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white flex items-center gap-2">
            <span className="h-6 w-6 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs tracking-normal text-white">W</span>
            <span>Workplace</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
            A decentralized talent network matching specialized engineers and product creators with high-growth organizations under protected milestone escrows.
          </p>
        </div>

        {/* Platform Directory Links */}
        <div className="col-span-1 md:col-span-2 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Network</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/jobs" className="hover:text-white transition-colors">Find Contracts</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Platform Scope</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Talent Vetting</Link></li>
          </ul>
        </div>

        {/* Legal & Compliance Architecture */}
        <div className="col-span-1 md:col-span-2 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Compliance</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Escrow Rules</Link></li>
          </ul>
        </div>

        {/* Interactive Social Media Ecosystem */}
        <div className="col-span-2 md:col-span-3 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">System Status</h4>
          <div className="flex gap-3.5 pt-1 text-slate-400">
            <a href="#" aria-label="LinkedIn Profile" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter Profile" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" aria-label="Instagram Profile" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook Profile" className="hover:text-white transition-colors"><Facebook size={18} /></a>
          </div>
        </div>
      </div>

      {/* Production Metadata Footer Block */}
      <div className="max-w-7xl mx-auto border-t border-slate-800/60 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
        <p>© {new Date().getFullYear()} Workplace Technologies Inc. All global contracts secured via system cryptosignatures.</p>
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            All backend clusters operational
          </span>
        </div>
      </div>
    </footer>
  );
}