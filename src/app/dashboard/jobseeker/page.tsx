"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

interface Job {
  _id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/api/jobs`);
      setJobs(response.data.jobs);
    } catch (err: any) {
      setError("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  const applyJob = async (jobId: string) => {
    try {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (!token || role !== "jobseeker") {
        alert("Please login as a Jobseeker to apply!");
        window.location.href = "/login";
        return;
      }

      await axios.post(
        `${API}/api/jobs/${jobId}/apply`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Applied successfully ✅");
    } catch (err) {
      alert("Failed to apply 😞");
    }
  };

  if (loading)
    return (
      <p className="text-center text-[#6366f1] text-lg py-10 font-medium">
        Loading jobs...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 text-lg py-10">{error}</p>
    );

  return (
    <main className="bg-[#f8f9fa] min-h-screen py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1e293b]">
        Available <span className="text-[#6366f1]">Jobs</span>
      </h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No jobs available right now.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold text-[#6366f1] mb-2">
                  {job.title}
                </h2>
                <p className="text-gray-700 font-medium">{job.company}</p>
                <p className="text-gray-500 text-sm mb-3">{job.location}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {job.description}
                </p>
                <p className="text-[#1e293b] font-semibold">
                  💰 {job.salary ? job.salary : "Negotiable"}
                </p>
              </div>

              <button
                onClick={() => applyJob(job._id)}
                className="mt-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
