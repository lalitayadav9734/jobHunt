import React from "react";

export default function About() {
  // Production-ready data array replacing generic loops
  const teamMembers = [
    { name: "Sarah Jenkins", role: "Co-Founder & CEO", image: "/Images/kelly-t.jpg" },
    { name: "David Chen", role: "Head of Product", image: "/Images/kelly-t.jpg" },
    { name: "Elena Rostova", role: "Lead Engineer", image: "/Images/kelly-t.jpg" },
    { name: "Marcus Vance", role: "VP of Talent Success", image: "/Images/kelly-t.jpg" },
    { name: "Aria Patel", role: "Senior Frontend Engineer", image: "/Images/kelly-t.jpg" },
  ];

  return (
    <main className="bg-white text-slate-900 antialiased">
      {/* ---------- Hero Section ---------- */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide">
              Our Journey
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-none text-white">
              The modern ecosystem for premium remote work
            </h1>
            <p className="text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              We built this platform to dismantle structural friction in global freelance hiring. By combining zero-markup milestone matching with rigorous verification, we enable world-class teams and independent professionals to forge seamless partnerships.
            </p>
            
            {/* Live Data/Metrics Grid - Adds realistic UI density */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">$14M+</p>
                <p className="text-xs text-slate-400 mt-1">Freelancer earnings</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">99.4%</p>
                <p className="text-xs text-slate-400 mt-1">Milestone success rate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">&lt; 48h</p>
                <p className="text-xs text-slate-400 mt-1">Average time-to-hire</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative w-full aspect-[4/3] md:aspect-square">
            <img
              src="/Images/meet.jpg"
              alt="Team internal strategy meeting"
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* ---------- Core Core Pillars ---------- */}
      <section className="py-24 px-6 sm:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600">Operating Principles</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built on transparency, protected by software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl font-semibold text-lg">1</div>
              <h3 className="text-lg font-medium text-slate-900">Protected Escrows</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Funds are held securely via milestone accounts and released instantly upon reviewable code or asset submission, securing both sides of the contract.
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl font-semibold text-lg">2</div>
              <h3 className="text-lg font-medium text-slate-900">Verified Professional Identities</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every enterprise company and individual engineer undergoes a structured vetting sequence checking technical capabilities and contract history.
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-10 w-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl font-semibold text-lg">3</div>
              <h3 className="text-lg font-medium text-slate-900">Zero System Lock-in</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe top talent functions best without predatory platform restrictions. Experience transparent billing systems with predictable fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Team Section ---------- */}
      <section className="bg-slate-50 py-24 px-6 sm:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600">Our Leadership</h2>
            <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The builders behind the infrastructure
            </p>
            <p className="text-sm text-slate-500">
              An international team of operators committed to setting the standard for remote professional services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all duration-200"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 truncate">{member.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Resources / Career Growth Section ---------- */}
      <section className="py-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/Images/tired.jpg"
              alt="Professional focused working in office workspace"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600">Talent Development</h2>
            <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Navigating full-time independent engineering
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Transitioning into high-growth independent work requires shifts in mindset, administrative execution, and client management pipelines. Here are our structural pillars for sustainable talent growth:
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Continuous Specialization:</strong> High-ticket contracts consistently award specialized niche domain experts over broad generalists.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Synchronous Accountability:</strong> Proactive milestone scoping reduces structural project creeping and keeps client sentiment high.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Iterative Portfolio Maintenance:</strong> Treat your portfolio tracking as a live production system—keep business cases updated with verified performance metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}