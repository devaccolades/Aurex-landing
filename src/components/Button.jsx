"use client";
import { useState } from "react";
import React from "react";
import Modal from "./forms/Modal";
import ProjectForm from "./forms/ProjectForm";

const Button = ({ text, className, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    // <>
    //   <button
    //     onClick={() => setIsModalOpen(true)}
    //     className={`mx-auto relative inline-block mt-2 cursor-pointer text-lg font-bold group focus:outline-none ${className}`}
    //     {...props}
    //   >
    //     <span
    //       className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform
    //      bg-[#A8731C] -translate-x-2 translate-y-2 "
    //     />

    //     <span className="relative block px-3 py-2 lg:px-4 lg:py-3 text-white bg-[#000000] font-[poppins] font-bold text-[14px]">
    //       {text}
    //     </span>
    //   </button>

    //   <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    //     <ProjectForm onSuccess={() => setIsModalOpen(false)} />
    //   </Modal>
    // </>
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`mx-auto relative inline-block mt-2 cursor-pointer text-lg font-bold group focus:outline-none ${className}`}
        {...props}
      >
        {/* background effect */}
        <span
          className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform
        bg-[#A8731C] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"
        />

        {/* text block */}
        <span
          className="relative block px-3 py-2 lg:px-4 lg:py-3 text-white bg-[#000000]
        font-[poppins] font-bold text-[14px] transition-colors duration-300
        group-hover:bg-[#222222] group-hover:text-[#FFD580]"
        >
          {text}
        </span>
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Button;
