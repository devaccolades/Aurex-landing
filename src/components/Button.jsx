"use client"
import { useState } from "react";
import React from "react";
import Modal from "./forms/Modal";
import ProjectForm from "./forms/ProjectForm";

const Button = ({ text, className, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <button
      onClick={() => setIsModalOpen(true)}
      className={`relative inline-block mt-2 cursor-pointer text-lg font-bold group focus:outline-none ${className}`}
      {...props}
    >
      <span
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform
         bg-[#A8731C] -translate-x-2 translate-y-2 "
      />

      <span className="relative block px-3 py-2 lg:px-4 lg:py-3 text-white bg-[#000000] font-[poppins] font-bold text-[14px]">
        {text}
      </span>
    </button>
    {/* Modal usage */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
       <ProjectForm onSuccess={() => setIsModalOpen(false)}/>
      </Modal>
    </>

  );
};

export default Button;
