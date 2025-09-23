"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, useAnimation, useInView } from "framer-motion";

import Quality from "../../../public/images/whyChoose/9554538_quality_premium_certificate_document_folder_icon1.svg";
import Time from "../../../public/images/whyChoose/Vector.svg";
import user from "../../../public/images/whyChoose/1564535_customer_user_userphoto_account_person_icon 1.svg";
import Modern from "../../../public/images/whyChoose/2419679_apartment_building_construction_home_hotel_icon 1.svg";
import Button from "@/components/Button";

const SvgBackground = () => {
  const paths = [
    "M1446 371.673C1396.57 357.651 1343.13 338.164 1199.82 333.173C1170.02 333.173 1096.95 330.685 1011.1 344.58C962.151 352.504 909.651 364.543 835.868 390.923C794.113 405.851 764.213 419.442 708.875 451.525C678.605 467.923 614.375 504.712 591.105 517.83C535.058 547.062 505.319 562.034 469.788 574.154C392.458 600.534 344.215 615.506 236.377 612.654C160.465 607.664 66.6754 593.832 -2 547.062",
    "M1445 240.603C1395.57 254.525 1342.13 273.873 1198.82 278.828C1169.02 278.828 1095.95 281.299 1010.1 267.502C961.151 259.635 908.651 247.682 834.868 221.491C793.113 206.669 763.213 193.176 707.875 161.322C677.605 145.041 613.375 108.515 590.105 95.4898C534.058 66.4671 504.319 51.6019 468.788 39.5681C391.458 13.3769 343.215 -1.48837 235.377 1.34311C159.465 6.2982 65.6754 20.0309 -3 66.4671",
    "M1445 355.374C1395.56 341.46 1344.94 327.953 1201.59 323C1171.78 323 1092.68 322.981 1006.43 334.149C951.785 341.224 904.622 346.641 829.723 369.525C785.724 382.967 753.08 393.58 688.501 420.466C654.437 436.031 587.614 462.917 560.052 472.822C499.021 494.755 479.86 500.415 444.377 508.906C357.473 529.7 345.734 532.943 238.575 530.131C161.932 528.12 72.5145 513.151 -2 482.02",
    "M1445 257.626C1395.56 271.54 1344.94 285.047 1201.59 290C1171.78 290 1092.68 290.019 1006.43 278.851C951.785 271.776 904.622 266.359 829.723 243.475C785.724 230.033 753.08 219.42 688.501 192.534C654.437 176.969 587.614 150.083 560.052 140.178C499.021 118.245 479.86 112.585 444.377 104.094C357.473 83.3003 345.734 80.0574 238.575 82.8688C161.932 84.8796 72.5145 99.8492 -2 130.98",
    "M1443 337.784C1392.63 325.713 1341.56 322.163 1198.27 317.193C1168.47 317.193 1079.87 315.38 993.255 322.873C935.796 327.844 898.199 330.514 820.167 347.015C769.802 357.666 742.136 361.927 672.617 382.518C632.183 393.169 563.042 413.161 534.289 418.732C468.317 431.513 440.838 439.32 404.473 442.164C313.673 449.264 329.279 445.714 220.744 447.844C144.12 449.348 75.322 440.033 -2 417.311",
    "M1443 274.216C1392.63 286.287 1341.56 289.837 1198.27 294.807C1168.47 294.807 1079.87 296.62 993.255 289.127C935.796 284.156 898.199 281.486 820.167 264.985C769.802 254.334 742.136 250.073 672.617 229.482C632.183 218.831 563.042 198.839 534.289 193.268C468.317 180.487 440.838 172.68 404.473 169.836C313.673 162.736 329.279 166.286 220.744 164.156C144.12 162.652 75.322 171.967 -2 194.689",
    "M1443 317.337C1389.09 314.324 1313.89 310.092 1196.14 310.092C1166.34 310.092 1078.02 309.328 991.127 312.208C927.283 314.324 890.396 317.852 811.655 322.084C751.446 325.321 730.077 328.94 652.755 337.604C602.389 343.248 534.426 350.994 505.204 352.933C438.523 357.356 418.66 358.934 378.935 360.178C288.844 363 293.101 363 203.719 363C123.56 363 77.4502 359.473 -2 349.597",
    "M1443 294.663C1389.09 297.676 1313.89 301.908 1196.14 301.908C1166.34 301.908 1078.02 302.672 991.127 299.792C927.283 297.676 890.396 294.148 811.655 289.916C751.446 286.679 730.077 283.06 652.755 274.396C602.389 268.752 534.426 261.006 505.204 259.067C438.523 254.644 418.66 253.066 378.935 251.822C288.844 249 293.101 249 203.719 249C123.56 249 77.4502 252.527 -2 262.403",
  ];
  return (
    <svg
      width="1440"
      height="614"
      viewBox="0 0 1440 614"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full z-0"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="black"
          strokeOpacity="0.1"
          strokeWidth={2}
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            delay: i * 0.3,
            ease: "linear",
            repeat: Infinity, // loop forever
            repeatType: "loop",
            delay: i * 0.3,
          }}
        />
      ))}
    </svg>
  );
};
const WhyChoose = () => {
  const slides = [
    {
      heading: "Modern Design & Innovation",
      content:
        "Every property is designed with meticulous attention to detail, combining modern aesthetics with innovative,sustainable construction methods",
      icon: Modern,
    },
    {
      heading: "Unmatched Quality",
      content:
        "Aurex Builders upholds the highest standards of construction, ensuring every project reflects superior craftsmanship and lasting value.",
      icon: Quality,
    },
    {
      heading: "Timely Delivery",
      content:
        "ourselves on completing projects on schedule without compromising on quality, so you can move into your dream home without delays.",
      icon: Time,
    },
    {
      heading: "Customer-Centric Approach",
      content:
        "Our clients are at the heart of everything we do. From choosing trusted partners to providing exceptional after-sales support, we prioritize your satisfaction every step of the way.",
      icon: user,
    },
  ];

  return (
    <>
      <main className="bg-[#F5F5F5] py-5 hidden md:block relative">
        <section
          className="relative w-full h-[500px] xl:h-[650px] 2xl:h-[750px] md:bg-cover xl:bg-cover bg-center overflow-hidden"
          // style={{
          //   backgroundImage: "url('/images/whyChoose/Group 1000005882.svg')",
          // }}
        >
          <SvgBackground />
          <div className=" h-full grid md:grid-cols-[65%_1fr]">
            <div className="relative">
              <div className="absolute top-[10%] md:left-[8%] lg:left-[13%] flex items-start md:gap-2 lg:gap-4">
                <span className="bg-white rounded-full w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={Quality}
                    alt="icon"
                    className="w-9 h-9 xl:w-11 xl:h-11"
                  />
                </span>
                <div className="flex flex-col md:w-[35%] lg:w-[40%] gap-y-1">
                  <span className="font-[urbanist] font-bold uppercase text-[16px] leading-[100%]">
                    Unmatched Quality
                  </span>
                  <span className="font-[inter] font-normal text-[14px] leading-[100%]">
                    Aurex Builders upholds the highest standards of
                    construction, ensuring every project reflects superior
                    craftsmanship and lasting value.
                  </span>
                </div>
              </div>

              <div className="absolute top-[50%] left-[10%] flex items-start md:gap-2 lg:gap-4">
                <span className="bg-white rounded-full w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={Time}
                    alt="icon"
                    className="w-9 h-9 xl:w-11 xl:h-11"
                  />
                </span>
                <div className="flex flex-col md:w-[30%] lg:w-[30%] gap-y-1">
                  <span className="font-[urbanist] font-bold uppercase text-[16px] leading-[100%]">
                    Timely Delivery
                  </span>
                  <span className="font-[inter] font-normal text-[14px] leading-[100%]">
                    We pride ourselves on completing projects on schedule
                    without compromising on quality, so you can move into your
                    dream home without delays.
                  </span>
                </div>
              </div>

              <div className="absolute md:top-[20%] lg:top-[30%] left-[55%] flex items-start md:gap-2 lg:gap-4">
                <span className="bg-white rounded-full w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={user}
                    alt="icon"
                    className="w-9 h-9 xl:w-11 xl:h-11"
                  />
                </span>
                <div className="flex flex-col w-full lg:w-[100%] gap-y-1">
                  <span className="font-[urbanist] font-bold uppercase text-[16px] leading-[100%]">
                    Customer-Centric Approach
                  </span>
                  <span className="font-[inter] font-normal text-[14px] leading-[100%]">
                    Our clients are at the heart of everything we do. From
                    choosing trusted partners to providing exceptional
                    after-sales support, we prioritize your satisfaction every
                    step of the way.
                  </span>
                </div>
              </div>

              <div className="absolute bottom-[10%] left-[50%] flex items-start md:gap-2 lg:gap-4">
                <span className="bg-white rounded-full w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={Modern}
                    alt="icon"
                    className="w-9 h-9 xl:w-11 xl:h-11"
                  />
                </span>
                <div className="flex flex-col w-[60%] gap-y-1">
                  <span className="font-[urbanist] font-bold uppercase text-[16px] leading-[100%]">
                    Modern Design & Innovation
                  </span>
                  <span className="font-[inter] font-normal text-[14px] leading-[100%]">
                    Every property is designed with meticulous attention to
                    detail, combining modern aesthetics with innovative,
                    sustainable construction methods.
                  </span>
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className="relative flex flex-col">
              <div className="absolute top-[38%] lg:top-[32%] xl:top-[37%] 2xl:top-[40%] right-[35%] 2xl:right-[40%] flex flex-col items-center text-center">
                <span className="lg:w-40 w-28 h-28 lg:h-40 flex flex-col justify-center items-center p-3 text-white bg-black rounded-full font-[urbanist] font-medium text-[24px] lg:text-[32px] leading-[100%]">
                  <span>WHY</span>
                  <span>CHOOSE</span>
                  <span>US</span>
                </span>
                <span className="mt-2 text-[16px] md:text-[14px] font-[urbanist] font-bold uppercase">
                  Need a Great Place For Your Family?
                </span>
                <Button
                  text="Book a site visit"
                  className=" text-[14px] font-[inter] "
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <main className="relative block md:hidden ">
        <section className="w-full h-[450px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/whyChoose/Group 1000005882.svg"
            alt="Background"
            width={100}
            height={100}
            className="min-w-[500px] min-h-[300px] object-cover -rotate-90"
          />
          <div className="absolute top-[7%] flex flex-col ">
            <div className="flex flex-col items-center text-center">
              <span className="lg:w-40 w-28 h-28 lg:h-40 flex flex-col justify-center items-center p-3 text-white bg-black rounded-full font-[urbanist] font-medium text-[24px] lg:text-[32px] leading-[100%]">
                <span>WHY</span>
                <span>CHOOSE</span>
                <span>US</span>
              </span>
            </div>
          </div>
          <div className="absolute bottom-[30%] w-[90%] mx-auto">
            <SwiperSection slides={slides} />
          </div>
          <span className="w-[90%] mx-auto  text-center absolute bottom-[20%] mt-2 text-[14px]  font-[urbanist] font-bold uppercase">
            Need a Great Place For Your Family?
          </span>
          <div className="absolute bottom-[10%]">
            <Button
              text="Book a site visit"
              className=" text-[12px] font-[inter]"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default WhyChoose;

const SwiperSection = ({ slides }) => {
  return (
    <section className=" bg-transparent">
      <div className="container mx-auto ">
        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true} // keeps autoplay cycling
          autoplay={{
            delay: 2000,
            disableOnInteraction: false, // user actions won't stop autoplay
            pauseOnMouseEnter: true, // pause on hover (optional)
          }}
          className="w-[90%] mx-auto"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-[90%] flex flex-col justify-center items-center mx-auto bg-transparent text-center">
                <div className="bg-white">
                  <Image src={slide.icon} className="h-8 w-8 mb-2 m-2" />
                </div>
                <div>
                  <h3 className="font-[urbanist] font-bold uppercase text-[14px] mb-1 leading-[100%]">
                    {slide.heading}
                  </h3>
                  <p className="font-[inter] font-normal text-[13px] leading-[100%]">
                    {slide.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
