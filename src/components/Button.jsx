import React from "react";

const Button = ({ text, className, ...props }) => {
  return (
    <button
      className={`relative inline-block mt-2 text-lg font-bold group focus:outline-none ${className}`}
      {...props}
    >
      <span
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform
         bg-[#A8731C] -translate-x-2 translate-y-2 "
      />

      <span className="relative block px-6 py-4 text-white bg-[#000000] font-[poppins] font-bold text-[14px]">
        {text}
      </span>
    </button>
  );
};

export default Button;
