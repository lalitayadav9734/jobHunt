import React from "react";

export default function Categories() {
  const categories = [
    { name: "Design", img: "/Images/tired.jpg" },
    { name: "Development", img: "/Images/tired.jpg" },
    { name: "Marketing", img: "/Images/tired.jpg" },
    { name: "Customer Support", img: "/Images/tired.jpg" },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Explore by Category</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
