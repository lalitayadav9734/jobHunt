"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = "https://job-platform-perz.onrender.com";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // 'jobseeker' | 'employer'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password || !role) {
      setError("Please fill out all fields and select your account type.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${API}/api/auth/register`,
        { name, email, password, role },
        { withCredentials: true }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);

      setSuccess("Account created successfully.");

      // Clear form before route transition
      setName("");
      setEmail("");
      setPassword("");
      setRole("");

      if (role === "employer") {
        router.push("/dashboard/employer");
      } else {
        router.push("/dashboard/jobseeker");
      }
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(
        err.response?.data?.message || "An error occurred during registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Join the marketplace to connect with top remote talent and opportunities.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSignup}>
          {/* Account Type Selection (Upgraded from a simple select dropdown) */}
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-400">
              I want to join as a
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("jobseeker")}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                  role === "jobseeker"
                    ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <span className="text-sm font-medium text-slate-900">Freelancer</span>
                <span className="text-xs text-slate-400 mt-0.5">Looking for work</span>
              </button>
              <button
                type="button"
                onClick={() => setRole("employer")}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                  role === "employer"
                    ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <span className="text-sm font-medium text-slate-900">Client</span>
                <span className="text-xs text-slate-400 mt-0.5">Hiring talent</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-normal focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="alex@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-normal focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                Password
              </label>
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
              "Get started"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}