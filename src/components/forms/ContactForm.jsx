"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\d{10,15}$/.test(form.whatsapp)) {
      newErrors.whatsapp = "Enter a valid number (10-15 digits)";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

  
    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", form);
      // API call here
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-[20px] font-normal mb-6 max-w-md font-[urbanist]">
        WE ARE READY TO ANSWER ALL YOUR QUESTIONS
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 text-[11px] leading-[12px ] font-normal font-[inter] bg-[primary]">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-[#BABABA] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px]"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* WhatsApp No */}
        <div>
          <label className="block mb-1 text-[11px] leading-[12px ] font-normal font-[inter]">WhatsApp No</label>
          <input
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="Enter WhatsApp Number"
            className="w-full border border-[#BABABA] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px]"
          />
          {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-[11px] leading-[12px ] font-normal font-[inter]">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Email address"
            className="w-full border border-[#BABABA] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px]"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-[11px] leading-[12px ] font-normal font-[inter]">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message here"
            rows="4"
            className="w-full border border-[#BABABA] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#006A54] text-white font-semibold py-2 rounded-md hover:bg-emerald-900 transition  font-[inter] text-[15px]"
        >
          Send
        </button>
      </form>
    </div>
  );
}
