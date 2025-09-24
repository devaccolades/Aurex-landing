"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Ambassador = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Split title animation
      const titleSplit = SplitText.create("#title", { type: "chars" });

      gsap.from(titleSplit.chars, {
        duration: 1,
        opacity: 0,
        yPercent: 120,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#title",
          start: "top 80%",
        },
      });

      // Paragraphs fade up
      gsap.utils.toArray(".fade-text").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // Images scale in
      gsap.utils.toArray(".fade-img").forEach((img) => {
        gsap.from(img, {
          scale: 1.2,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          },
        });
      });

      // Name reveal
      gsap.from(".ambassador-name", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ambassador-name",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      className="h-auto "
      style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
      ref={sectionRef}
    >
      <div className="md:hidden relative flex flex-col w-[85%] mx-auto ">
        <div className="relative ">
          <div className="absolute top-0 h-full w-full flex z-0">
            <div
              className="relative w-[50%] z-10"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
            <div
              className="relative w-[50%] z-10"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
          </div>
          <div className="relative h-[200px] mx-[8px] my-[18px] font-[urbanist] font-medium tracking-normal text-[32px] leading-[32px]  text-left text-[#000000] uppercase z-50">
            <h1 id="title" className="opacity-100">
              Manifesting your dream into a Magnificent reality
            </h1>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 h-full w-full flex z-0">
            <div
              className="relative w-[50%] z-10"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
            <div
              className="relative w-[50%] z-10"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
          </div>
          <div className="relative z-50 h-[325px] my-[8px] mx-[8px]">
            <p
              className="fade-text font-[inter] font-normal text-[14px] leading-[156%] tracking-normal"
              style={{ color: "rgba(52, 52, 46, 1)" }}
            >
              Aurex builders ensures to fulfill the dream of our customers by
              gifting them with quality home spaces, contemporary architecture,
              environment- friendly designs, timely delivery, after-sales
              service and return on investment. Aurex builders brings you a new
              world of happiness, security and prosperity, delivering finest
              apartments, flats, townhouses and luxury villas that match the
              requirements of customers with the unique signature of a
              futuristic brand. Our main motive is to fulfill the dreams of the
              entire customers for all the segment people.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 h-full w-full flex z-0">
            <div
              className="relative w-[50%] z-10"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
            <div
              className="relative w-[50%] z-10"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
          </div>
          <div className="h-[425px] flex relative">
            <Image
              src={"/images/ambassador/ambflower.png"}
              width={500}
              height={500}
              alt="bg image"
              className="fade-img h-[158px] object-cover w-full opacity-10"
            />
            <div className="absolute top-0 right-0 h-[429px] w-[228px] overflow-hidden -mt-[5px]">
              <Image
                src={"/images/ambassador/bavana.svg"}
                height={500}
                width={500}
                alt="ambassador image"
                className="fade-img h-full w-full object-cover object-top -mb-[100px] translate-y-10"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 h-full w-full flex z-0">
            <div
              className="relative w-[50%] z-10"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
            <div
              className="relative w-[50%] z-10"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
          </div>
          <div className="h-[349px] flex flex-col justify-between">
            <p
              className="fade-text ml-[13px] mt-[24px] font-[urbanist] text-[16px] leading-[16px] tracking-normal font-medium
           uppercase max-w-48"
            >
              We are pleased to introduce our brand ambassador.
            </p>
            <div className="flex justify-end ">
              <p className="ambassador-name mr-[10px] font-[urbanist] text-[64px] leading-[40px] tracking-[-0.08em] font-medium uppercase">
                BHAVANA
              </p>
            </div>
            <Image
              src={"/images/ambassador/temple.webp"}
              className="fade-img h-[170px] w-full object-cover object-top"
              width={100}
              height={100}
              alt="bg image"
            />
          </div>
        </div>
      </div>

      {/* md and above section  */}

      <div className="hidden md:relative md:flex md:flex-col">
        <div className="absolute bottom-0 right-[45%] md:h-[700px] w-[380px] xl:h-[820px] xl:w-[436px] ambassadorHight  overflow-hidden">
          <Image
            src={"/images/ambassador/bavana.svg"}
            height={500}
            width={500}
            alt="ambassador image"
            className="fade-img relative h-full w-full object-cover translate-y-16 z-30"
          />
        </div>
        <div className="relative flex h-[288px]">
          <div className="absolute top-0 h-full w-full flex">
            <div
              className="w-[25%] relative"
              style={{
                borderRight: "0.5px solid rgba(168, 168, 168, 0.3)",
                borderBottom: "0.5px solid rgba(168, 168, 168, 0.3)",
              }}
            >
              <div className="absolute bottom-0 right-0 ">
                <div
                  style={{ background: "rgba(168, 168, 168, 1)" }}
                  className="relative h-[10px] w-[10px] rounded-full translate-x-1.5 translate-y-1.5 z-40 "
                ></div>
              </div>
            </div>
            <div
              className="w-[25%] relative"
              style={{
                borderRight: "0.5px solid rgba(168, 168, 168, 0.3)",
                borderBottom: "0.5px solid rgba(168, 168, 168, 0.3)",
              }}
            >
              <div className="absolute bottom-0 right-0 ">
                <div
                  style={{ background: "rgba(168, 168, 168, 1)" }}
                  className="relative h-[10px] w-[10px] rounded-full translate-x-1.5 translate-y-1.5 z-40 "
                ></div>
              </div>
            </div>
            <div
              className="w-[25%] relative"
              style={{
                borderRight: "0.5px solid rgba(168, 168, 168, 0.3)",
                borderBottom: "0.5px solid rgba(168, 168, 168, 0.3)",
              }}
            >
              <div className="absolute bottom-0 right-0 ">
                <div
                  style={{ background: "rgba(168, 168, 168, 1)" }}
                  className="relative h-[10px] w-[10px] rounded-full translate-x-1.5 translate-y-1.5 z-40 "
                ></div>
              </div>
            </div>
            <div
              className="w-[25%]"
              style={{
                borderRight: "0.5px solid rgba(168, 168, 168, 0.3)",
                borderBottom: "0.5px solid rgba(168, 168, 168, 0.3)",
              }}
            ></div>
          </div>
          <div className="w-[50%] h-full flex items-center justify-center">
            <h1 className="fade-text font-[urbanist] font-medium tracking-normal md:text-[36px] md:leading-[36px] xl:text-[40px] xl:leading-[40px] text-left text-[#000000] md:max-w-11/12 uppercase xl:max-w-7/12">
              Manifesting your dream into a Magnificent reality
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-center">
            <p
              className="fade-text font-[inter] font-normal md:text-[14px] md:leading-[16px] xl:text-[16px] xl:leading-[100%] xl:tracking-normal xl:max-w-9/12"
              style={{ color: "rgba(52, 52, 46, 1)" }}
            >
              Aurex builders ensures to fulfill the dream of our customers by
              gifting them with quality home spaces, contemporary architecture,
              environment- friendly designs, timely delivery, after-sales
              service and return on investment. Aurex builders brings you a new
              world of happiness, security and prosperity, delivering finest
              apartments, flats, townhouses and luxury villas that match the
              requirements of customers with the unique signature of a
              futuristic brand. Our main motive is to fulfill the dreams of the
              entire customers for all the segment people.
            </p>
          </div>
        </div>
        {/* second section in tab and above screens */}
        <div className="relative flex md:h-[260px] xl:h-[329px] secondHight">
          <div className="absolute top-0 h-full w-full flex">
            <div
              className="w-[25%]"
              style={{
                borderRight: "0.5px solid rgba(168, 168, 168, 0.3)",
                borderBottom: "0.5px solid rgba(168, 168, 168, 0.3)",
              }}
            ></div>
            <div
              className="w-[25%]"
              style={{
                borderRight: "0.5px solid rgba(168, 168, 168, 0.3)",
                borderBottom: "0.5px solid rgba(168, 168, 168, 0.3)",
              }}
            ></div>
            <div
              className="w-[25%]"
              style={{
                borderRight: "0.5px solid rgba(168, 168, 168, 0.3)",
                borderBottom: "0.5px solid rgba(168, 168, 168, 0.3)",
              }}
            ></div>
            <div
              className="w-[25%]"
              style={{
                borderRight: "0.5px solid rgba(168, 168, 168, 0.3)",
                borderBottom: "0.5px solid rgba(168, 168, 168, 0.3)",
              }}
            ></div>
          </div>
          <div className="w-[50%] h-full">
            <Image
              src={"/images/ambassador/elephent.svg"}
              width={100}
              height={100}
              alt="bg image"
              className="fade-img h-full object-cover w-full opacity-10 "
            />
          </div>
          <div className="w-[50%] h-full flex flex-col justify-around ">
            <p className="fade-text md:ml-[10px] xl:ml-[37px] font-[urbanist] xl:text-[24px] xl:leading-[24px] xl:tracking-normal font-medium uppercase max-w-64">
              We are pleased to introduce our brand ambassador.
            </p>
            <div className="flex md:ml-[10px] xl:ml-[37px]">
              <p className="ambassador-name font-[urbanist] md:text-[96px] md:leading-[96px] xl:text-[128px] xl:leading-[40px] tracking-[-0.08em] font-medium uppercase">
                BHAVANA
              </p>
            </div>
          </div>
        </div>

        {/* 3rd section  */}

        <div className="relative flex md:h-[280px] lg:h-[390px] thirdHight">
          <div className="w-[50%] h-full flex items-center justify-center overflow-hidden">
            <div
              className="h-[1000px] 2xl:h-[1500px] w-[1px] md:rotate-54 lg:rotate-63 turnPlus"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
            <div
              className="h-[1000px] 2xl:h-[1500px] w-[1px] md:-rotate-54 lg:-rotate-63 turnMinus"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
          </div>
          <div className="w-[50%] h-full">
            <Image
              src={"/images/ambassador/temple.webp"}
              className="fade-img h-full w-full object-cover object-top"
              width={1000}
              height={750}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="bg image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassador;
