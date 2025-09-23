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
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Enquiry submitted:", data);

      // Reset form
      reset();

      // 🎉 Animated success with custom styling
      const result = await Swal.fire({
        title: "📧 Thank you!",
        text: "Your enquiry has been received successfully!",
        icon: "success",
        confirmButtonText: "Great!",
        showCancelButton: true,
        cancelButtonText: "View Summary",
        confirmButtonColor: "#10B981",
        cancelButtonColor: "#6B7280",
        background: "#F9FAFB",
        customClass: {
          popup: "animate__animated animate__bounceIn",
          confirmButton: "px-6 py-2 rounded-lg font-medium",
          cancelButton: "px-6 py-2 rounded-lg font-medium",
        },
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      // Handle user choice
      if (result.isConfirmed) {
        // User clicked "Great!"
        if (onSuccess) onSuccess();
      } else if (
        result.isDismissed &&
        result.dismiss === Swal.DismissReason.cancel
      ) {
        // User clicked "View Summary"
        await Swal.fire({
          title: "📋 Enquiry Summary",
          html: `
            <div class="text-left space-y-3">
              <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p class="text-sm font-medium text-blue-800">👤 Name: ${
                  data.name
                }</p>
              </div>
              <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                <p class="text-sm font-medium text-green-800">📧 Email: ${
                  data.email
                }</p>
              </div>
              <div class="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <p class="text-sm font-medium text-purple-800">💬 WhatsApp: ${
                  data.whatsapp
                }</p>
              </div>
              <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <p class="text-sm font-medium text-gray-800">💭 message: ${
                  data.message || "Not specified"
                }</p>
              </div>
              <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-200 mt-4">
                <p class="text-xs text-yellow-700">🕐 We'll get back to you within 24 hours!</p>
              </div>
            </div>
          `,
          icon: "info",
          confirmButtonText: "Perfect!",
          confirmButtonColor: "#3B82F6",
        });

        // Close modal after summary view
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error(error);

      // 🚨 Enhanced error handling with options
      const errorResult = await Swal.fire({
        title: "Oops! Something went wrong",
        text: "We couldn't send your enquiry right now.",
        icon: "error",
        confirmButtonText: "Try Again",
        showCancelButton: true,
        cancelButtonText: "Contact Support",
        confirmButtonColor: "#EF4444",
        cancelButtonColor: "#6B7280",
        footer:
          '<small class="text-gray-500">Error occurred at: ' +
          new Date().toLocaleTimeString() +
          "</small>",
        customClass: {
          popup: "animate__animated animate__shakeX",
        },
      });

      if (errorResult.isConfirmed) {
        // User wants to try again - could recursively call onSubmit
        console.log("User wants to try again");
      } else if (errorResult.isDismissed) {
        // User wants to contact support
        await Swal.fire({
          title: "Contact Support",
          html: `
            <div class="space-y-4">
              <p class="text-gray-600">We're here to help! Reach out to us:</p>
              <div class="flex justify-center space-x-4">
                <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                  📱 WhatsApp
                </button>
                <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  📧 Email
                </button>
              </div>
            </div>
          `,
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "Close",
          allowOutsideClick: true,
        });
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
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px] ${
              errors.name ? "border-red-500" : "border-[#BABABA]"
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
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px] ${
              errors.whatsapp ? "border-red-500" : "border-[#BABABA]"
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
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-[urbanist] text-[15px] ${
              errors.email ? "border-red-500" : "border-[#BABABA]"
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
