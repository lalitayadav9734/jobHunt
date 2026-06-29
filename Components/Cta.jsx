"use client";
import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-slate-100 py-24 px-6 sm:px-8 border-b border-slate-800">
      {/* Background radial highlight matching the premium dark theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide">
          Enterprise Pipeline
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Ready to transition your project into an active engineering milestone?
        </h2>
        
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
          Create an account today to spin up secure contract scopes, review technical profiles, and deploy localized milestone distributions with total compliance.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
          <Link href="/signup" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto h-11 px-8 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm shadow-blue-600/10">
              Initialize account
            </button>
          </Link>
          <Link href="/faq" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto h-11 px-6 inline-flex items-center justify-center bg-transparent border border-slate-700 hover:border-slate-600 hover:bg-slate-800/40 text-slate-300 hover:text-white font-medium text-sm rounded-xl transition-colors">
              Review escrow terms
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}