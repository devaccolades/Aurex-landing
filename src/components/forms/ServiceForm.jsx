"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { baseSchema } from "@/lib/validationSchemas";
import Swal from "sweetalert2";

export default function ServiceForm({ onSuccess, service }) {
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
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          whatsapp: data.whatsapp,
          mail: data.email,
          service: data.service,
        }),
      });

      const responseData = await res.json();

      if (!responseData.success) {
        throw new Error(responseData.error || "Email sending failed");
      }
      // Reset form
      reset({
        name: "",
        whatsapp: "",
        email: "",
      });

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
                <p class="text-sm font-medium text-blue-800">👤 Name: ${data.name
            }</p>
              </div>
              <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                <p class="text-sm font-medium text-green-800">📧 Email: ${data.email
            }</p>
              </div>
              <div class="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <p class="text-sm font-medium text-purple-800">💬 WhatsApp: ${data.whatsapp
            }</p>
              </div>
              <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <p class="text-sm font-medium text-gray-800">💭 Service: ${data.service || "Not specified"
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
    <div className="w-[98%] md:max-w-3xl mx-auto bg-white  rounded-2xl overflow-hidden">
      {/* Top image */}
      <div className="relative w-full h-[150px] md:h-64">
        <Image
          src="/images/forms/formbg.webp"
          alt="Family"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
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
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none  font-[urbanist] ${errors.name ? "border-red-500" : "border-[#BABABA]"
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
                className={`w-full border rounded-lg px-3 py-2  font-[urbanist] ${errors.whatsapp ? "border-red-500" : "border-[#BABABA]"
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
              className={`w-full border rounded-lg px-3 py-2  font-[urbanist] ${errors.email ? "border-red-500" : "border-[#BABABA]"
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
