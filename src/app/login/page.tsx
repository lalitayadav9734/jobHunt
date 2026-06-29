"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Updated production API base URL as requested
const API = "https://job-platform-perz.onrender.com";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please enter both your email and password.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${API}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      const { token, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      
      setSuccess("Authentication successful. Redirecting...");

      setTimeout(() => {
        if (role === "employer") {
          router.push("/dashboard/employer");
        } else {
          router.push("/dashboard/jobseeker");
        }
      }, 800);
    } catch (err: any) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Invalid email or password. Please try again."
      );
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to manage your active contracts, applications, and postings.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-normal focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Password
                </label>
              </div>
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-normal focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-xs font-medium text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs font-medium text-emerald-700">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/60 text-white font-medium text-sm rounded-xl tracking-wide transition-colors shadow-sm shadow-blue-600/10"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0117.647 3.56c-.443-.36-1.02-.56-1.647-.56h-2.583a5.002 5.002 0 00-9.434 0H5.5c-.627 0-1.204.2-1.647.56A8 8 0 014 12z" />
              </svg>
            ) : (
              "Sign in to account"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}