"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-slate-100 py-24 sm:py-32 border-b border-slate-800">
      {/* Background Graphic Accents - Subtly enhances design density without using generic AI images */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-center px-6 md:px-8">
        
        {/* Left Layout Column - Editorial Copywriting */}
        <div className="md:col-span-7 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Over 2,400+ active contracts verified today
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-none text-white">
            Connect with technical teams. Build <span className="text-blue-500">without boundaries.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            The decentralized resource marketplace pairing domain-expert engineers, developers, and product designers with high-growth engineering organizations. Secure milestones, fast payouts, zero lock-in.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3.5 pt-2">
            <Link href="/signup" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm shadow-blue-600/10">
                Find Talent
              </button>
            </Link>
            <Link href="/jobs" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center bg-transparent border border-slate-700 hover:border-slate-600 hover:bg-slate-800/40 text-slate-300 hover:text-white font-medium text-sm rounded-xl transition-colors">
                Explore Contracts
              </button>
            </Link>
          </div>
        </div>

        {/* Right Layout Column - High-Density Dashboard Teaser mock */}
        <div className="md:col-span-5 flex justify-center relative w-full aspect-[4/3] md:aspect-square">
          <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl" />
          <img
            src="/Images/search.jpg"
            alt="Workspace pipeline overview interface"
            className="relative w-full h-full object-cover rounded-2xl border border-slate-800 shadow-2xl shadow-black/40"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;