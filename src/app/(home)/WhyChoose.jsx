import Image from "next/image";
import React from "react";
import Quality from "../../../public/images/whyChoose/9554538_quality_premium_certificate_document_folder_icon1.svg";
import Time from "../../../public/images/whyChoose/Vector.svg";
import user from "../../../public/images/whyChoose/1564535_customer_user_userphoto_account_person_icon 1.svg";
import Modern from "../../../public/images/whyChoose/2419679_apartment_building_construction_home_hotel_icon 1.svg";
import Button from "@/components/Button";

const WhyChoose = () => {
  return (
    <main className="bg-[#F5F5F5] py-5 hidden md:block">
      <section
        className="w-full h-[500px] xl:h-[650px] 2xl:h-[750px] md:bg-cover xl:bg-cover bg-center "
        style={{
          backgroundImage: "url('/images/whyChoose/Group 1000005882.svg')",
        }}
      >
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
                  Aurex Builders upholds the highest standards of construction,
                  ensuring every project reflects superior craftsmanship and
                  lasting value.
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
                  We pride ourselves on completing projects on schedule without
                  compromising on quality, so you can move into your dream home
                  without delays.
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
                  choosing trusted partners to providing exceptional after-sales
                  support, we prioritize your satisfaction every step of the
                  way.
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
                text="Book a visit"
                className=" text-[14px] font-[inter] "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChoose;
