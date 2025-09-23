
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

import cl from "../../../public/images/services/Group.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


export default function Services() {
  const [isInView, setIsInView] = useState(false);

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


  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Animate heading letters
      tl.from(".services-heading span", {
        rotateY: -90,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        transformPerspective: 1000,
        stagger: 0.08, // letter by letter
      })
        // Paragraph
        .from(
          ".services-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Cards
        .from(
          ".service-card",
          {
            rotateY: -90,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            transformPerspective: 1000,
            stagger: 0.2,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split heading text into spans
  const headingText = "OUR SERVICES".split("");

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

      {/* <style jsx global>{`
  .flip-container {F
    perspective: 1200px;
    transform-style: preserve-3d;
  }

  @keyframes flipInYDiv {
    0% {
      transform: perspective(1200px) rotateY(-90deg);
      opacity: 0;
    }
    40% {
      transform: perspective(1200px) rotateY(15deg);
      opacity: 0.7;
    }
    70% {
      transform: perspective(1200px) rotateY(-8deg);
      opacity: 0.9;
    }
    85% {
      transform: perspective(1200px) rotateY(4deg);
      opacity: 0.95;
    }
    100% {
      transform: perspective(1200px) rotateY(0deg);
      opacity: 1;
    }
  }

  .flip-y-in {
    animation: flipInYDiv 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform-origin: center center;
  }

  @keyframes flipInYDivSmooth {
    0% {
      transform: perspective(1000px) rotateY(-75deg);
      opacity: 0;
    }
    60% {
      transform: perspective(1000px) rotateY(10deg);
      opacity: 0.8;
    }
    80% {
      transform: perspective(1000px) rotateY(-3deg);
      opacity: 0.95;
    }
    100% {
      transform: perspective(1000px) rotateY(0deg);
      opacity: 1;
    }
  }

  .flip-y-smooth {
    animation: flipInYDivSmooth 1s ease-out forwards;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform-origin: center center;
  }

  @keyframes flipInYDivDramatic {
    0% {
      transform: perspective(1200px) rotateY(-120deg) scale(0.9);
      opacity: 0;
    }
    50% {
      transform: perspective(1200px) rotateY(20deg) scale(1.05);
      opacity: 0.7;
    }
    75% {
      transform: perspective(1200px) rotateY(-10deg) scale(0.98);
      opacity: 0.9;
    }
    90% {
      transform: perspective(1200px) rotateY(5deg) scale(1.02);
      opacity: 0.98;
    }
    100% {
      transform: perspective(1200px) rotateY(0deg) scale(1);
      opacity: 1;
    }
  }

  .flip-y-dramatic {
    animation: flipInYDivDramatic 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform-origin: center center;
  }

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
`}</style> */}


      <div className="relative z-20 mx-auto px-6 text-center">
        {/* Heading */}
        <div className={`transition-all duration-700 ease-out flip-container ${isInView ? 'opacity-100 translate-y-0 flip-y-in' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className="services-heading text-2xl md:text-3xl font-medium font-[urbanist] mb-4">
            {headingText.map((char, i) => (
              <span key={i} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <p className="mb-8 text-gray-200 font-[inter] text-[12px] md:text-[16px]">
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
                <div className={`flex flex-col items-center font-[inter] text-center transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
              className={`flex flex-col items-center font-[inter] text-center transition-all duration-700 ease-out hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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

