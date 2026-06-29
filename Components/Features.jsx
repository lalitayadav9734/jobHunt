import React from "react";
import { Briefcase, Users, ShieldCheck, CreditCard } from "lucide-react";

export default function Features() {
  // Elevating the copy to represent a highly technical, multi-sided marketplace architecture
  const frameworkPillars = [
    {
      icon: <ShieldCheck size={22} className="text-blue-500" />,
      title: "Vetted Identities",
      desc: "Every operating entity undergoes multi-step cryptographic verification and history checks before contract execution.",
    },
    {
      icon: <Users size={22} className="text-blue-500" />,
      title: "Direct Client Routing",
      desc: "Bypass intermediary agency markups. Interface directly with technical leads and engineering stakeholders.",
    },
    {
      icon: <CreditCard size={22} className="text-blue-500" />,
      title: "Milestone Escrows",
      desc: "Capitalized funds are secured instantly in individual milestones and released immediately upon code submission.",
    },
    {
      icon: <Briefcase size={22} className="text-blue-500" />,
      title: "Deterministic Scopes",
      desc: "Zero ambiguous task postings. Contracts are explicitly structured with strict execution criteria and timelines.",
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-24 px-6 sm:px-8 border-b border-slate-100">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Editorial Header Hierarchy */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Engineered Core
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for enterprise-grade execution
          </p>
          <p className="text-sm text-slate-500">
            A precise infrastructure tailored around continuous technical deployment and risk mitigation.
          </p>
        </div>

        {/* Polished Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {frameworkPillars.map((pillar, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:border-slate-300 transition-all duration-200"
            >
              <div>
                {/* Modern Icon Wrapper Container instead of raw center placement */}
                <div className="h-10 w-10 flex items-center justify-center bg-blue-50 rounded-xl mb-5 group-hover:bg-blue-600/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}