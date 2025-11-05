"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const sendingData = async () => {
    if (!name || !email || !password || !role) {
      setMessage("Please fill all fields and select a role.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/api/users/signup`, {
        name,
        email,
        password,
        role,
      });

      // ✅ Store token and role in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);

      setMessage("Signup successful! 🎉");

      // ✅ Redirect based on role
      if (role === "employer") {
        router.push("/dashboard/employer");
      } else {
        router.push("/dashboard/jobseeker");
      }

      // ✅ Reset form
      setName("");
      setEmail("");
      setPassword("");
      setRole("");

    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#2b7fff] to-[#2b7fff] px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-6">
          Create an Account
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#2b7fff] text-gray-700"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#2b7fff] text-gray-700"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#2b7fff] text-gray-700"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            aria-label="Select role"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#2b7fff] text-gray-700"
          >
            <option value="">Select Role</option>
            <option value="jobseeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        <button
          type="button"
          onClick={sendingData}
          disabled={loading}
          className="mt-6 w-full bg-[#2b7fff] hover:bg-[#1d5fcc] text-white font-semibold py-3 rounded-xl transition duration-300 disabled:opacity-50"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {message && (
          <p className="text-center text-sm text-gray-600 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}
