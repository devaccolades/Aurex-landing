
"use client"

import React from "react";
import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <>
      <section className=" relative  text-black pt-8 md:pt-16 pb-8 md:pb-14 lg:pb-20 overflow-hidden">

        <div className="relative z-50 container mx-auto px-4 text-start md:text-center flex flex-col md:items-center font-[urbanist] font-medium text-[76px] ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-black md:leading-[70px] leading-[36px] ">
            SHAPING TOMORROW
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-black md:leading-[70px] leading-[36px] ">
            DELIVERED TODAY
          </h1>

          <p className="md:mt-4 mt-1 md:mx-auto text-base md:text-lg text-[#000000] font-[inter] font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[100%] md:mb-4 mb-1 w-[90%] md:w-full ">
            Turning your ideas into reality through meticulous planning and
            expert execution.
          </p>
          <Button text={"Book a site visit"} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
