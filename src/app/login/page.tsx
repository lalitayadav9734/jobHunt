"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API}/api/users/login` , {
        email,
        password,
      },
     { withCredentials: true });

      const { token, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      setMessage("Login successful! 🎉");

      setTimeout(() => {
        if (role === "employer") {
          router.push("/dashboard/employer");
        } else {
          router.push("/dashboard/jobseeker");
        }
      }, 500);
    } catch {
      setMessage("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  if (message.includes("successful")) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#2b7fff] text-white text-xl font-semibold">
        Redirecting...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2b7fff] flex items-center justify-center">
      <div className="bg-white text-black w-[400px] p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#2b7fff]">
          Login to JobHunt
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg text-black outline-none border border-gray-300 focus:border-[#2b7fff]"
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg text-black outline-none border border-gray-300 focus:border-[#2b7fff]"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#2b7fff] py-3 rounded-lg font-semibold text-white transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && (
            <p
              className={`text-center mt-3 ${
                message.includes("successful") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
