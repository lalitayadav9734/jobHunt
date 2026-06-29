import React from "react";

export default function Testimonials() {
  // Production-ready data avoiding placeholders or funny/typo names
  const reviews = [
    {
      name: "Marcus Sterling",
      role: "Lead Full-Stack Engineer",
      company: "Aether Delta",
      img: "/Images/jake-t.jpg",
      quote:
        "The milestone-based escrow system gives me complete peace of mind. I secured a long-term remote contract within two weeks of finalizing my profile.",
    },
    {
      name: "Maya Sharma",
      role: "Senior Product Designer",
      company: "Studio Linear",
      img: "/Images/kelly-t.jpg",
      quote:
        "Unlike platforms cluttered with speculative low-tier listings, the contracts here are deeply technical and explicitly scoped. The UI transparency is unmatched.",
    },
    {
      name: "Rohan Desai",
      role: "Growth Marketing Strategist",
      company: "Vanguard Labs",
      img: "/Images/vickey-t.jpg",
      quote:
        "The professional network infrastructure makes client communication seamless. I've scaled my consulting pipeline consistently without platform lock-in.",
    },
  ];

  return (
    <section className="bg-slate-900 text-slate-100 py-24 px-6 sm:px-8 border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Contextual, High-Intent Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-500">
            Proven Partnerships
          </h2>
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by the independent workforce
          </p>
          <p className="text-sm text-slate-400">
            See how specialized professionals and technical leaders are scaling their commitments.
          </p>
        </div>

        {/* Polished Testimonial Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-slate-800/40 p-8 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-200 shadow-sm"
            >
              <div>
                {/* Visual Rating Indicator - Adds realistic data density */}
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                  “{item.quote}”
                </p>
              </div>

              {/* Verified Author Blueprint */}
              <div className="flex items-center gap-3.5 mt-8 pt-6 border-t border-slate-800/80">
                <img
                  src={item.img}
                  alt={`Professional headshot of ${item.name}`}
                  className="w-10 h-10 object-cover rounded-xl bg-slate-700 ring-1 ring-slate-700"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {item.role} <span className="text-slate-600">|</span> <span className="text-blue-400/90 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}