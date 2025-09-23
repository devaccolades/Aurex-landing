"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { projectFormSchema } from "@/lib/validationSchemas";
import { projectsData } from "@/data/cardData";

export default function ProjectForm({ projectName = "" }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(projectFormSchema),
    mode: "all", // can switch to onChange for live validation
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      project: projectName || "",
    },
  });

  // Update project if projectName prop changes
  useEffect(() => {
    if (projectName) {
      setValue("project", projectName);
    }
  }, [projectName, setValue]);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Add your API call here
    reset({ name: "", whatsapp: "", email: "", project: projectName || "" });
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name & WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name")}
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] ${errors.name ? "border-red-500" : "border-[#BABABA]"
                  }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1" htmlFor="whatsapp">
                WhatsApp No
              </label>
              <input
                type="text"
                id="whatsapp"
                placeholder="Enter WhatsApp Number"
                {...register("whatsapp")}
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] ${errors.whatsapp ? "border-red-500" : "border-[#BABABA]"
                  }`}
              />
              {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-[inter] text-[11px] leading-[12px] font-medium mb-1" htmlFor="email">
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
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Project + Submit */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 items-end">
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
                  className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] ${errors.project ? "border-red-500 text-black" : "border-[#BABABA] text-black"
                    }`}
                >
                  <option value="" disabled hidden>
                    Select project
                  </option>
                  {projectsData.map((project) => (
                    <option key={project.id} value={project.title}>
                      {project.title}
                    </option>
                  ))}
                </select>
              )}

              {errors.project && (
                <p className="text-red-500 text-xs mt-1">{errors.project.message}</p>
              )}
            </div>


            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-colors w-full font-[inter] text-[15px] md:mt-5 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
