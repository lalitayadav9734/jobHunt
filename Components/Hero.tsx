"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-10">
        
        {/* Left Section - Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Jobs That <span className="text-blue-400">Make Dreams Come True</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Discover your next opportunity — find a job that fits your lifestyle and goals.
          </p>
          
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/signup">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Sign Up
              </button>
            </Link>
            <Link href="/jobs">
              <button className="border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-400 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Explore Jobs
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Images/search.jpg"
            alt="Job Search"
            className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
