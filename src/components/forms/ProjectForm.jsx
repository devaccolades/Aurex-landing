"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProjectForm({ projectName = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    project: "",
  });

  useEffect(() => {
    if (projectName) {
      setFormData((prev) => ({ ...prev, project: projectName }));
    }
  }, [projectName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // submit logic here
  };

  return (
    <div className="max-w-md md:max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Top image */}
      <div className="relative w-full h-64">
        <Image
          src="/images/forms/formbg.webp"
          alt="Family"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-center text-[20px] leading-[20px] font-semibold mb-6 font-[urbanist]">
          WE ARE READY TO ANSWER <br className="hidden md:block" />
          ALL YOUR QUESTIONS
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[#BABABA] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist]"
                required
              />
            </div>

            <div>
              <label
                className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1"
                htmlFor="whatsapp"
              >
                WhatsApp No
              </label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                placeholder="Enter WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full border border-[#BABABA] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist]"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#BABABA] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist]"
              required
            />
          </div>

          {/* Project + Submit on same row */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 items-end">
            <div>
              <label
                className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1"
                htmlFor="project"
              >
                Project
              </label>
              <select
                name="project"
                id="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full border border-[#BABABA] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] text-[#BABABA]"
                required
              >
                <option value="">Select project</option>
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
                <option value="project3">Project 3</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-colors w-full font-[inter] text-[15px] md:mt-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
