import React from "react";
import { Briefcase, Users, Rocket, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Briefcase size={40} />,
      title: "Verified Jobs",
      desc: "All job listings are screened for authenticity to ensure trust and safety.",
    },
    {
      icon: <Users size={40} />,
      title: "Top Companies",
      desc: "Work with reputed companies that value skills and growth.",
    },
    {
      icon: <Rocket size={40} />,
      title: "Career Growth",
      desc: "Get roles that help you learn, grow, and reach new heights.",
    },
    {
      icon: <Shield size={40} />,
      title: "Secure & Transparent",
      desc: "Enjoy complete transparency with our secure platform policies.",
    },
  ];

  return (
    <section className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="text-blue-400 mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
