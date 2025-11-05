"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { checkRole } from "@/utils/auth";
const API = process.env.NEXT_PUBLIC_API_URL;
interface Job {
  _id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
}

export default function EmployerDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [editJobId, setEditJobId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
  });

  // ✅ Protect route
  useEffect(() => {
    checkRole("employer");
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API}/api/jobs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(res.data.jobs);
    } catch (err) {
      setError("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      if (editJobId) {
        // Edit job
        await axios.put(`${API}/api/jobs/${editJobId}`, form,  {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Add job
        await axios.post(`${API}/api/jobs`, {...form, createdBy: userId}, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setModalOpen(false);
      setEditJobId(null);
      setForm({ title: "", description: "", company: "", location: "", salary: "" });
      fetchJobs();
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  const handleEdit = (job: Job) => {
    setForm({
      title: job.title,
      description: job.description,
      company: job.company,
      location: job.location,
      salary: job.salary,
    });
    setEditJobId(job._id);
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API}/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchJobs();
    } catch (err) {
      alert("Failed to delete job");
    }
  };

  if (loading)
    return (
      <p className="text-center text-[#6366f1] text-lg py-10 font-medium">
        Loading jobs...
      </p>
    );
  if (error)
    return <p className="text-center text-red-500 text-lg py-10">{error}</p>;

  return (
    <main className="bg-[#f8f9fa] min-h-screen py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1e293b]">
        Employer <span className="text-[#6366f1]">Dashboard</span>
      </h1>

      <div className="max-w-6xl mx-auto flex justify-end mb-6">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
        >
          + Add New Job
        </button>
      </div>

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
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(job)}
                className="bg-yellow-400 px-3 py-1 rounded font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(job._id)}
                className="bg-red-500 px-3 py-1 rounded text-white font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#6366f1] mb-4">
              {editJobId ? "Edit Job" : "Add New Job"}
            </h2>

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
            />
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
            />
            <textarea
              name="description"
              placeholder="Job Description"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#6366f1] resize-none"
            ></textarea>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setEditJobId(null);
                }}
                className="px-4 py-2 rounded-lg border border-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-[#6366f1] text-white font-semibold hover:bg-[#4f46e5] transition duration-300"
              >
                {editJobId ? "Update Job" : "Add Job"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
