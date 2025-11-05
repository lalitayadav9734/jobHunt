import React from "react";

export default function About() {
  return (
    <main className="bg-[#f8f9fa] text-[#1e293b]">

      {/* ---------- Hero / About Intro ---------- */}
      <section className="bg-[#1e293b] text-[#f8f9fa] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1">
            <img
              src="/Images/meet.jpg"
              alt="About Us"
              className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold text-[#2b7fff]">About JobHunt</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              JobHunt is a platform dedicated to connecting talented individuals with the right opportunities. 
              We believe in transparency, trust, and growth — helping job seekers and companies achieve their goals together.
            </p>
            <p className="text-gray-400 text-md">
              Our mission is to make job searching simple, secure, and effective. With verified listings, top companies, and a supportive community, 
              we ensure your career journey is smooth and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Mission Section ---------- */}
      <section className="bg-[#f8f9fa] text-[#1e293b] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2b7fff]">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At JobHunt, our mission is to empower every individual to find meaningful work. 
              We bridge the gap between talent and opportunity through trust, technology, and transparency.
            </p>
            <p className="text-gray-600 text-md">
              By building a reliable and user-friendly job platform, we help both job seekers and employers connect with purpose.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="/Images/gb-hand.jpg"
              alt="Our Mission"
              className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ---------- Team Section ---------- */}
      <section className="bg-[#1e293b] text-[#f8f9fa] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2b7fff]">Meet Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Behind every great platform is a passionate team. 
            Our professionals work tirelessly to ensure your experience on JobHunt is smooth, secure, and valuable.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-[#273449] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`/Images/kelly-t.jpg`}
                  alt={`Team Member ${i}`}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-[#2b7fff]">Team Member {i}</h3>
                <p className="text-gray-400 text-sm">Frontend Developer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Career Tips Section ---------- */}
      <section className="bg-[#f8f9fa] text-[#1e293b] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1">
            <img
              src="/Images/tired.jpg"
              alt="Career Tips"
              className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2b7fff]">Career Growth Tips</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Feeling stuck or tired in your career? Don’t worry — it’s part of growth. 
              Learn to manage stress, build new skills, and stay consistent.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-md space-y-2">
              <li>Stay consistent and learn one thing at a time.</li>
              <li>Update your resume and portfolio regularly.</li>
              <li>Take small breaks — your mind needs rest to perform better.</li>
              <li>Keep applying — every “no” brings you closer to your “yes.”</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
