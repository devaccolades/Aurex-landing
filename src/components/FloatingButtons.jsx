// components/FloatingButtons.jsx
"use client";
import { Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Import your WhatsApp icon
import whatsappIcon from "../../public/images/services/16-Whatsap.svg"; // Adjust path to your icon

export default function FloatingButtons() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "+1234567890"; // Your number with country code
    const message = "Hi, I'm interested in your services!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEnquireClick = () => {
    // You can either open a modal, scroll to contact form, or redirect
    // Option 1: Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    
    // Option 2: Or redirect to contact page
    // window.location.href = '/contact';

  };

  return (
    <div className="fixed -right-3 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
      {/* WhatsApp Button with Custom Icon */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#006A54] hover:bg-green-800 text-white p-4 rounded-[12px] shadow-lg transition-all duration-300 hover:scale-110 group relative"
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
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </span>
      </button>

      {/* Enquire Now Button */}
      <div className="relative">
        <button
          onClick={handleEnquireClick}
          className="bg-[#C19A5D] hover:bg-amber-700   text-white px-3 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 group writing-vertical"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span className="text-[13px] md:text-[20px] leading-[16px] md:leading-[20px] font-[urbanist] font-bold tracking-wider">
            Enquire Now
          </span>
          {/* Tooltip */}
          {/* <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Get in touch
          </span> */}
        </button>
      </div>
    </div>
  );
}

// Alternative version with custom WhatsApp icon
export function FloatingButtonsWithIcons() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+91 97466 29926";
    const message = "Hi, I'm interested in your services!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEnquireClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      {/* WhatsApp Button with Custom Icon */}
      <div className="mb-4">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-pulse"
        >
          <Image 
            src={whatsappIcon} 
            alt="WhatsApp" 
            width={24} 
            height={24}
            className="filter brightness-0 invert"
          />
        </button>
      </div>

      {/* Enquire Button */}
      <div className="relative">
        <button
          onClick={handleEnquireClick}
          className="bg-gradient-to-b from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-12 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
        >
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          
          {/* Text */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <Phone size={20} className="mb-2 rotate-90" />
            <span 
              className="text-sm font-semibold tracking-widest"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              ENQUIRE
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}