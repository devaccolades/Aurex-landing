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
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose} // click outside
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative "
        onClick={(e) => e.stopPropagation()} // stop inside clicks
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-base top-2 right-2 shadow-2xl text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Dynamic Content (forms) */}
       <div className="text-base text-left">{children}</div>
      </div>
    </div>
  );
}
