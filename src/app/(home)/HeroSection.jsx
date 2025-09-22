import React from "react";
import {projectsData} from "../../data/cardData";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container mx-auto py-10">
      {/* Outer Grid - 2 cards per row */}
      <div className="grid md:grid-cols-2">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg overflow-hidden"
          >
            {/* Left Side - Image */}
            <div className="relative">
              <Image
                src={project.main_image}
                alt="Project Building"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />

              {/* Status Badge */}
              <span className="absolute top-4 bg-[#C19A5B] text-white text-xs px-4 py-2 rounded-r-full font-[urbanist] font-normal text-[14px] leading-[100%] ">
                {project.status}
              </span>

              {/* Map Icon */}
              <div className="absolute bottom-4 right-4">
                <Image
                  src={project.map_icon}
                  alt="Map Location"
                  width={44}
                  height={44}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="p-6 flex flex-col justify-between relative">
              {/* Top Row - Logo + QR + RERA */}
              <div className="flex items-start justify-between mb-4">
                <Image
                  src={project.project_logo}
                  alt="Project Logo"
                  width={100}
                  height={40}
                  className="object-contain"
                />
                <div className="text-right flex gap-1">
                  <Image
                    src={project.qr_code}
                    alt="QR Code"
                    width={34}
                    height={34}
                    className="mx-auto mb-1"
                  />
                  <p className="text-xs text-gray-500 text-start">
                    RERA REG. NO
                    <br />
                    {project.rera_no}
                  </p>
                </div>
              </div>

              {/* Vector BG */}
              <div className="mb-4">
                <Image
                  src={project.vector_image}
                  alt="Vector Background"
                  width={300}
                  height={200}
                  className="opacity-70"
                />
              </div>

              {/* Distance */}
              <div className="mb-4">
                <span className="bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.distance}
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="font-semibold">{project.apartment_type}</p>
                  <p className="mt-2">
                    Location:{" "}
                    <span className="font-medium">{project.location}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Total Units:{" "}
                    <span className="font-medium">{project.total_units}</span>
                  </p>
                  <p className="mt-2">
                    Land Area:{" "}
                    <span className="font-medium">{project.total_land_area}</span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                {project.brochure && (
                  <button className="flex-1 border border-gray-400 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100">
                    Brochure
                  </button>
                )}
                {project.enquire_now && (
                  <button className="flex-1 bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-green-700">
                    Enquire Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
