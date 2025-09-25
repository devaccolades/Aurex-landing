"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseSchema } from "@/lib/validationSchemas";
import Swal from "sweetalert2";

export default function ContactForm({ onSuccess }) {
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
  // const onSubmit = async (data) => {
  //   console.log("Form data:", data);
  //   // fake API request
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  // };
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
          message: data.message,
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
            Phone Number
          </label>
          <input
            type="text"
            {...register("whatsapp")}
            placeholder="Enter Phone Number"
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px] ${errors.whatsapp ? "border-red-500" : "border-[#BABABA]"
              }`}
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-xs mt-1">
              {errors.whatsapp.message}
            </p>
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
