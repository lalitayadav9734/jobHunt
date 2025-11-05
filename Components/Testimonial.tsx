import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "klien shamp",
      role: "Web Developer",
      img: "/Images/jake-t.jpg",
      quote:
        "This platform helped me land my first remote job — smooth process and great support!",
    },
    {
      name: "Maya Sharma",
      role: "UI/UX Designer",
      img: "/Images/kelly-t.jpg",
      quote:
        "The listings here are genuine and the design makes job search easy and enjoyable.",
    },
    {
      name: "Rohan Desai",
      role: "Digital Marketer",
      img: "/Images/vickey-t.jpg",
      quote:
        "Found multiple freelance gigs here. Love how transparent and simple everything is.",
    },
  ];

  return (
    <section className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-2 border-blue-400"
              />
              <p className="italic text-gray-300 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-blue-400">{t.name}</h4>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
