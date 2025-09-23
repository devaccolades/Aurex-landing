"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseSchema } from "@/lib/validationSchemas";

export default function ContactForm() {
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
      message: "",
    },
  });
  const onSubmit = async (data) => {
    console.log("Form data:", data);
    // fake API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };
  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-[20px] font-normal mb-6 max-w-md font-[urbanist]">
        WE ARE READY TO ANSWER ALL YOUR QUESTIONS
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 text-[11px] leading-[12px] font-normal font-[inter]">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter your name"
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px] ${errors.name ? "border-red-500" : "border-[#BABABA]"
              }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* WhatsApp No */}
        <div>
          <label className="block mb-1 text-[11px] leading-[12px] font-normal font-[inter]">
            WhatsApp No
          </label>
          <input
            type="text"
            {...register("whatsapp")}
            placeholder="Enter WhatsApp Number"
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px] ${errors.whatsapp ? "border-red-500" : "border-[#BABABA]"
              }`}
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-[11px] leading-[12px] font-normal font-[inter]">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter Email address"
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px] ${errors.email ? "border-red-500" : "border-[#BABABA]"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message (optional, no validation) */}
        <div>
          <label className="block mb-1 text-[11px] leading-[12px] font-normal font-[inter]">
            Message
          </label>
          <textarea
            {...register("message")}
            placeholder="Message here"
            rows="4"
            className="w-full border border-[#BABABA] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#006A54] text-white font-semibold py-2 rounded-md hover:bg-emerald-900 transition font-[inter] text-[15px] disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
