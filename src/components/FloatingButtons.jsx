// components/FloatingButtons.jsx
"use client";
import { Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Import your WhatsApp icon
import whatsappIcon from "../../public/images/services/16-Whatsap.svg"; // Adjust path to your icon
import Modal from "./forms/Modal";
import ProjectForm from "./forms/ProjectForm";

export default function FloatingButtons() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "+1234567890"; // Your number with country code
    const message = "Hi, I'm interested in your services!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };


  return (
    <>
      <div className=" absolute items-end  right-0 top-1/3 transform -translate-y-1/2 z-50 flex flex-col gap-2">
        {/* WhatsApp Button with Custom Icon */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#006A54] hover:bg-green-800 text-white p-2 rounded-tl-xl rounded-bl-xl shadow-lg transition-all duration-300 hover:scale-110 group relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={whatsappIcon}
            alt="WhatsApp"
            width={24}
            height={24}
            className="filter brightness-0 invert" // Makes icon white
          />
          {/* Tooltip */}
          {/* <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat on WhatsApp
          </span> */}
        </button>

        {/* Enquire Now Button */}
        <div className="relative">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#C19A5D] hover:bg-amber-700 transform rotate-180   text-white px-4 py-2 rounded-tr-xl rounded-br-xl shadow-lg transition-all duration-300 hover:scale-105 group writing-vertical"
            style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
          >
            <span 
            className="custom-margin  text-[13px] md:text-[16px] leading-[16px] md:leading-[20px] font-[urbanist] font-bold  tracking-wider">
              Enquire Now
              <style jsx>{`
    // .custom-margin {
    //   margin-left: 10px;
    //   display: inline-block;
    // }

    // @media (min-width: 768px) {
    //   .custom-margin {
    //     margin-left: 15px;
    //   }
    // }
  `}</style>
            </span>
            {/* Tooltip */}
            {/* <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Get in touch
          </span> */}
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>

  );
}

