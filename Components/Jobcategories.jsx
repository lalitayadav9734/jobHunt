"use client"
import React from "react";
import { Paintbrush, Code2, Megaphone, Headphones } from "lucide-react";

export default function Categories() {
  // Production-ready dataset replacing the identical placeholder images with distinct technical categories and clear icons
  const marketSectors = [
    { 
      name: "Design & Creative", 
      metrics: "420+ Active Contracts",
      icon: <Paintbrush size={20} className="text-blue-500" />,
      skills: ["Product Design", "UI/UX Architecture", "Design Systems"]
    },
    { 
      name: "Software Engineering", 
      metrics: "1,140+ Active Contracts",
      icon: <Code2 size={20} className="text-blue-500" />,
      skills: ["React / Next.js", "Backend Systems", "Cloud Infrastructure"]
    },
    { 
      name: "Growth & Marketing", 
      metrics: "310+ Active Contracts",
      icon: <Megaphone size={20} className="text-blue-500" />,
      skills: ["Performance Marketing", "SEO Strategy", "Analytics Execution"]
    },
    { 
      name: "Operations & Support", 
      metrics: "180+ Active Contracts",
      icon: <Headphones size={20} className="text-blue-500" />,
      skills: ["Technical Support", "Customer Success", "Systems Ops"]
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-24 px-6 sm:px-8 border-b border-slate-100">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Clean Contextual Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Marketplace Sectors
            </h2>
            <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore specialized domain practices
            </p>
          </div>
          <p className="text-sm text-slate-500 max-w-xs md:text-right font-normal leading-relaxed">
            Contracts are split cleanly by domain disciplines to match expert requirements deterministically.
          </p>
        </div>

        {/* Polished Grid Matrix (Replacing basic cards with high-density detail blocks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {marketSectors.map((sector, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:border-slate-300 transition-all duration-200"
            >
              <div>
                {/* Modern Icon Frame */}
                <div className="h-10 w-10 flex items-center justify-center bg-blue-50 rounded-xl mb-5 group-hover:bg-blue-600/10 transition-colors">
                  {sector.icon}
                </div>

                <h3 className="text-sm font-semibold text-slate-900 tracking-tight">
                  {sector.name}
                </h3>
                <p className="text-xs font-medium text-blue-600/90 mt-1">
                  {sector.metrics}
                </p>

                {/* Micro Skill Badges - Adds realistic visual density for recruiters */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100">
                  {sector.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="inline-block text-[11px] font-normal text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}