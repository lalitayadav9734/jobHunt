import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Find Your Dream Job?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Join thousands of users who’ve found success through our platform.
        </p>
        <Link href="/signup">
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-100 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}
