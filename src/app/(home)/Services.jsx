"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { servicesData } from "../../data/cardData";

import aurex from "../../../public/images/services/AUREX.svg";
import bg from "../../../public/images/services/Rectangle 474.svg";
import lines from "../../../public/images/services/Line 15.svg";
import c1 from "../../../public/images/services/Ellipse 8.svg";
import c2 from "../../../public/images/services/Ellipse 8.svg";
import cl from "../../../public/images/services/Group.svg";
import s1 from "../../../public/images/services/sr1.jpg";
import s2 from "../../../public/images/services/sr2.jpg";
import s3 from "../../../public/images/services/sr3.jpg";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Rental and Resale Assistance",
      description: "we specialize in Rental and Resales",
      image: s1, // replace with your image
      link: "#",
    },
    {
      id: 2,
      title: "Interior Designing",
      description: "transforms your house into a home",
      image: s2, // replace with your image
      link: "#",
    },
    {
      id: 3,
      title: "Maintenance Assistance",
      description: "comprehensive Property Sketching services",
      image: s3, // replace with your image
      link: "#",
    },
  ];

  return (

    //  <section className="relative w-full py-16 text-white overflow-hidden noise-bg ">
    <section
      className="relative w-full py-16 text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/services/Rectangle 474.svg')" }}
    >
     
      <div className="absolute h-full xl:h-full  flex items-center -mt-16 xl:-mt-16 ">
        
        <Image alt="bg" src={cl}  height={100} className="h-full w-auto object-cover" />
      </div>

      {/* Background image (AUREX + lines) */}
      <Image
        src={aurex} // replace with your background image
        alt="Background"
        fill
        className="absolute inset-0 w-10 h-60 object-contain opacity-[130%]"
      />

      <div className="relative z-20  mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium font-[urbanist] mb-4">OUR SERVICES</h2>
        <p className="mb-12 text-gray-200 font-[inter]">
          We provide end-to-end real estate solutions designed to make your journey seamless
        </p>

        {/* Service Cards */}


        {/* Mobile: Swiper | Desktop: Grid */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="pb-28 mt-2" // adds space for the dots
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex flex-col items-center font-[inter] text-center">
                  {/* Circular Image */}
                  <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg mx-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-full"
                      sizes="240px"
                    />
                  </div>
                  {/* Title + Description */}
                  <h3 className="mt-6 text-lg font-[inter] items-start font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 items-start  font-[inter]">
                    {service.description}
                  </p>
                  {/* Button */}
                  <button
                    className="mt-4 inline-flex items-center font-[urbanist] text-sm font-medium text-white hover:text-gray-300"
                  >
                    ENQUIRE NOW
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center font-[inter] text-center"
            >
              {/* Circular Image */}
              <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-full"
                  sizes="240px"
                />
              </div>
              <div className="items-start text-left">
              {/* Title + Description */}
              <h3 className="mt-6 text-lg font-[inter] items-start font-semibold">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 items-start font-[inter]">
                {service.description}
              </p>

              {/* Button */}
              <button
                className="mt-4 inline-flex items-center font-[urbanist] text-sm font-medium text-white hover:text-gray-300"
              >
                ENQUIRE NOW
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
