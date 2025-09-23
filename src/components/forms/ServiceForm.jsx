"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseSchema } from "@/lib/validationSchemas";

export default function ServiceForm({ service }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(baseSchema),
    mode: "all",
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Add your API call here
    reset({ name: "", whatsapp: "", email: "" });
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
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] ${
                  errors.name ? "border-red-500" : "border-[#BABABA]"
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
                WhatsApp No
              </label>
              <input
                type="text"
                id="whatsapp"
                placeholder="Enter WhatsApp Number"
                {...register("whatsapp")}
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] ${
                  errors.whatsapp ? "border-red-500" : "border-[#BABABA]"
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
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 font-[urbanist] ${
                errors.email ? "border-red-500" : "border-[#BABABA]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Service (readonly, hidden input for submission) */}
          <input type="hidden" value={service} {...register("service")} />

          <p className="text-sm text-gray-600 font-[inter]">
            Selected Service: <span className="font-semibold">{service}</span>
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition-colors w-full font-[inter] text-[15px] md:mt-5 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
