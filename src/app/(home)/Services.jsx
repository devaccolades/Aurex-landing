
"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

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
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/services/Rectangle 474.svg')" }}
    >
      {/* Background elements */}
      <div className="absolute h-full xl:h-full flex items-center -mt-16 xl:-mt-16">
        <Image alt="bg" src={cl} height={100} className="h-full w-auto object-cover" />
      </div>

      <Image
        src={aurex} 
        alt="Background"
        fill
        className="absolute inset-0 w-10 h-60 object-contain aurex-float"
      />

       <style jsx global>{`
        @keyframes floatTilt {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          25% { 
            transform: translateY(-15px) rotate(-5deg);
            opacity: 0.9;
          }
          50% { 
            transform: translateY(-8px) rotate(3deg);
            opacity: 1;
          }
          75% { 
            transform: translateY(-12px) rotate(-3deg);
            opacity: 0.95;
          }
        }
        
        .aurex-float {
          animation: floatTilt 6s ease-in-out infinite;
        }
      `}</style>

      <h2 className={`text-2xl md:text-3xl font-medium font-[urbanist] mb-4 ${
            isInView ? 'flip-y-animation' : ''
          }`}>
            OUR SERVICES
          </h2>

      <div className="relative z-20 mx-auto px-6 text-center">
        {/* Heading */}
        <div className={`transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
         <h2 className={`text-2xl md:text-3xl font-medium font-[urbanist] mb-4 ${
            isInView ? 'flip-y-animation' : ''
          }`}>
            OUR SERVICES
          </h2>
          <p className="mb-12 text-gray-200 font-[inter]">
            We provide end-to-end real estate solutions designed to make your journey seamless
          </p>
        </div>

        {/* Mobile: Swiper */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="pb-20 mt-2 h-[400px]"
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={service.id}>
                <div className={`flex flex-col items-center font-[inter] text-center transition-all duration-700 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`} style={{ transitionDelay: `${300 + index * 150}ms` }}>
                  {/* Circular Image */}
                  <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg mx-auto group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-110"
                      sizes="240px"
                    />
                  </div>
                  <div className="items-start text-left">
                    <h3 className="mt-6 text-md lg:text-lg font-[inter] items-start font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-[12px] lg:text-sm text-gray-300 items-start font-[inter]">
                      {service.description}
                    </p>
                    <button className="mt-4 inline-flex items-center font-[urbanist] text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200 group">
                      ENQUIRE NOW
                      <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col items-center font-[inter] text-center transition-all duration-700 ease-out hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Circular Image */}
              <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="240px"
                />
              </div>
              <div className="items-start text-left">
                <h3 className="mt-6 text-md lg:text-lg font-[inter] items-start font-semibold">
                  {service.title}
                </h3>
                <p className="text-[12px] lg:text-sm text-gray-300 items-start font-[inter]">
                  {service.description}
                </p>
                <button className="mt-4 inline-flex items-center font-[urbanist] text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200 group">
                  ENQUIRE NOW
                  <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

