"use client";

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed  inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose} // click outside
    >
      <div
        className="bg-white rounded-2xl w-[95%] mx-auto md:w-full max-w-lg p-2 relative "
        onClick={(e) => e.stopPropagation()} // stop inside clicks
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-10  text-base top-3 rounded-2xl right-[25px] cursor-pointer font-bold text-white"
        >
          ✕
        </button>

        {/* Dynamic Content (forms) */}
        <div className="text-base text-left">{children}</div>
      </div>
    </div>
  );
}
