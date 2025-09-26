"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseSchema } from "@/lib/validationSchemas";
import { projectsData } from "@/data/cardData";
import Swal from "sweetalert2";

export default function MapForm({ onSuccess, projectName = "", mapUrl }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(baseSchema),
    mode: "all", // can switch to onChange for live validation
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      project: projectName || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // 🎨 Show loading animation while submitting
      Swal.fire({
        title: "Sending enquiry...",
        text: "Please wait while we process your enquiry",
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
        customClass: {
          title: "font-[urbanist]",
          htmlContainer: "font-[urbanist]",
        },
      });

      // API call
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          whatsapp: data.whatsapp,
          mail: data.email,
          project: data.project,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Email sending failed");
      }

      const responseData = await res.json();
      if (!responseData.success) {
        throw new Error(responseData.error || "Email sending failed");
      }

      // Reset form
      reset();

      // 🎉 Success modal
      const result = await Swal.fire({
        title: "📧 Thank you!",
        text: "Your enquiry has been received successfully!",
        icon: "success",
        confirmButtonText: "Great!",
        confirmButtonColor: "#10B981",
        background: "#F9FAFB",
        customClass: {
          popup: "animate__animated animate__bounceIn font-[urbanist]",
          title: "font-[urbanist]",
          htmlContainer: "font-[urbanist]",
          confirmButton: "px-6 py-2 rounded-lg font-medium font-[urbanist]",
        },
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      if (result.isConfirmed && onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);

      // 🚨 Error modal (only retry button)
      const errorResult = await Swal.fire({
        title: "Oops! Something went wrong",
        text: "We couldn't send your enquiry right now.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#EF4444",
        footer:
          '<small class="text-gray-500 font-[urbanist]">Error occurred at: ' +
          new Date().toLocaleTimeString() +
          "</small>",
        customClass: {
          popup: "animate__animated animate__shakeX font-[urbanist]",
          title: "font-[urbanist]",
          htmlContainer: "font-[urbanist]",
          confirmButton: "font-[urbanist]",
        },
      });

      if (errorResult.isConfirmed) {
        await onSubmit(data); // retry
      }
    }
  };

  return (
    <div className="w-[98%] md:max-w-3xl mx-auto bg-white  rounded-2xl overflow-hidden">
      {/* Top image */}
      <div className="relative w-full h-32 md:h-64">
        <iframe
          src={mapUrl}
          width="600"
          height="250"
          style={{ border: 0 }} // <-- This is the corrected line
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-0 left-0 w-full md:h-[20%] bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="p-0 md:p-4">
        <h2 className="text-center text-[20px] leading-[20px] font-semibold mb-6 font-[urbanist]">
          WE ARE READY TO ANSWER <br className="hidden md:block" />
          ALL YOUR QUESTIONS
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name & WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name")}
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none   font-[urbanist] ${errors.name ? "border-red-500" : "border-[#BABABA]"
                  }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1"
                htmlFor="whatsapp"
              >
                Phone No
              </label>
              <input
                type="text"
                id="whatsapp"
                placeholder="Enter Phone Number"
                {...register("whatsapp")}
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] ${errors.whatsapp ? "border-red-500" : "border-[#BABABA]"
                  }`}
              />
              {errors.whatsapp && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.whatsapp.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email address"
              {...register("email")}
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] ${errors.email ? "border-red-500" : "border-[#BABABA]"
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Project + Submit */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 items-center">
            <div>
              <label
                className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1"
                htmlFor="project"
              >
                Project
              </label>

              {projectName ? (
                // Read-only display if projectName is passed
                <input
                  type="text"
                  id="project"
                  value={projectName}
                  readOnly
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-black font-[urbanist]"
                  {...register("project")}
                />
              ) : (
                // Dropdown if no projectName is passed
                <select
                  id="project"
                  {...register("project")}
                  className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] cursor-pointer ${errors.project
                      ? "border-red-500 text-black"
                      : "border-[#BABABA] text-black"
                    }`}
                >
                  <option value="" disabled hidden>
                    Select project
                  </option>
                  {projectsData.map((project) => (
                    <option key={project.title} value={project.title}>
                      {project.title}
                    </option>
                  ))}
                </select>
              )}

              {errors.project && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.project.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              // className="bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-colors w-full font-[inter] text-[15px] disabled:opacity-50 cursor-pointer"
              className={`bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-colors w-full font-[inter] text-[15px] disabled:opacity-50 cursor-pointer ${errors.project ? "mt-[-6px]" : "mt-[14px]"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
