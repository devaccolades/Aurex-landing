'use client'
import React from 'react'
import { useState } from "react";
import { projectsData } from "../../data/cardData";
import Image from 'next/image'
import download from ".././../../public/images/herosection/download.svg";
import brochure from ".././../../public/images/herosection/up-right.svg";
import gradient1 from "../../../public/images/herosection/grad1.svg";
import ProjectForm from "@/components/forms/ProjectForm";
import Modal from "@/components/forms/Modal";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
       <section id="Projects" className=" overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 bg-white min-w-0"
            >
              <div className="relative">
                <Image
                  src={project.main_image}
                  alt="Project Building"
                  width={600}
                  height={100}
                  className="w-full h-full object-cover"
                />

                <span
                  className={`absolute top-4 text-white text-xs px-4 py-2 rounded-r-full font-[urbanist] font-normal text-[14px] leading-[100%]`}
                  style={{ backgroundColor: project.status_bg }}
                >
                  {project.status}
                </span>

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

              <div className="flex flex-col justify-between relative pb-4">
                <Image
                  src={gradient1}
                  alt="gradient1"
                  className="absolute top-0 left-0 z-40"
                />

                <div className="pt-5 px-5 flex items-start justify-between">
                  <Image
                    src={project.project_logo}
                    alt="Project Logo"
                    width={100}
                    height={40}
                    className="object-contain z-40"
                  />
                  <div className="text-right flex gap-1">
                    <Image
                      src={project.qr_code}
                      alt="QR Code"
                      width={34}
                      height={34}
                      className="mx-auto mb-1"
                    />
                    <p className="font-[urbanist] font-normal text-[10px] leading-[16px] text-[#000000] text-start">
                      RERA REG. NO
                      <br />
                      {project.rera_no}
                    </p>
                  </div>
                </div>

                <div className="">
                  <Image
                    src={project.vector_image}
                    alt="Vector Background"
                    width={500}
                    height={100}
                    className="w-full h-auto opacity-70"
                  />
                </div>

                <div className="-mt-10 px-3">
                  <div className="flex gap-1 mb-3">
                    <span
                      className={`bg-[#006A54] font-[urbanist] text-white text-[14px] leading-[100%] font-semibold ${project.distance ? "px-3 py-1" : ""
                        } rounded-full`}
                    >
                      {project.distance}
                    </span>
                    <span className="font-[urbanist] font-bold text-[16px] text-[#006A54] ">
                      {project.from}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="font-bold text-[14px] leading-[16px] font-[urbanist] bg-[#EFEFEF] rounded-[8px] p-2 ">
                        {project.apartment_type}
                      </p>
                      <p className="mt-2 font-[urbanist] font-normal text-[12px] leading-[100%] text-[#000000]">
                        Location:
                        <span className="font-bold block font-[urbanist] text-[14px] leading-[16px] text-[#000000] mt-2 w-full  max:w-[70%]">
                          {project.location}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-[14px] leading-[16px] font-[urbanist]  bg-[#EFEFEF] rounded-[8px] p-2">
                        Total Units:{" "}
                        <span className="font-medium block">
                          {project.total_units}
                        </span>
                      </p>
                      <p className="mt-2 font-[urbanist] font-normal text-[12px] leading-[100%] text-[#000000]">
                        Total Land Area:{" "}
                        <span className="block font-bold font-[urbanist] text-[14px] leading-[16px] text-[#000000] mt-2">
                          {project.total_land_area}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3 flex gap-4">
                  {project.brochure && (
                    <a
                      href={project.brochure}
                      download
                      className="flex justify-between items-center flex-1 border border-[#E9E9E9] rounded-[10px] px-4 py-2 font-normal font-[urbanist] text-[12px] md:text-[14px]"
                    >
                      Brochure
                      <Image src={download} alt="download" />
                    </a>
                  )}
                  {project.enquire_now && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex justify-between  flex-1 bg-[#006A54] text-white rounded-[10px] px-4 py-2 font-bold font-[urbanist] text-[12px] md:text-[14px] ">
                      Enquire Now
                      <Image src={brochure} alt="brochure" className="flex" />
                    </button>
                  )}
                </div>
              </div>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ProjectForm projectName={project.title} onSuccess={() => setIsModalOpen(false)} />
              </Modal>
            </div>

          ))}
        </div>
      </section>
  )
}
