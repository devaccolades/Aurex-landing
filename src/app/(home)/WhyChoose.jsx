import Image from "next/image";
import React from "react";
import Quality from "../../../public/images/whyChoose/9554538_quality_premium_certificate_document_folder_icon1.svg";
import Time from "../../../public/images/whyChoose/Vector.svg";
import user from "../../../public/images/whyChoose/1564535_customer_user_userphoto_account_person_icon 1.svg";
import Modern from "../../../public/images/whyChoose/2419679_apartment_building_construction_home_hotel_icon 1.svg";

const WhyChoose = () => {
  return (
    <main className="bg-[#F5F5F5] py-5">
      <section
        className="w-full h-[400px] lg:h-[650px] 2xl:h-[750px] md:bg-contain lg:bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/whyChoose/Group 1000005882.svg')",
        }}
      >
        <div className="h-full grid grid-cols-[60%_1fr]">
          <div className="relative">
            <div className="absolute top-[5%] left-[20%] flex  items-center gap-4 ">
              <span className="bg-white h-fit rounded-full">
                <Image src={Quality} alt="icon" className="m-3 h-12 w-12" />
              </span>
              <div className="flex flex-col w-full xl:w-[40%] gap-y-1 ">
                <span className="font-[urbanist] font-bold uppercase text-[16px] leading-[100%]">
                  Unmatched Quality
                </span>
                <span className="font-[inter] font-normal  text-[14px] leading-[100%]">
                  Aurex Builders upholds the highest standards of construction,
                  ensuring every project reflects superior craftsmanship and
                  lasting value.
                </span>
              </div>
            </div>
            <div className="absolute top-[50%] left-[10%] flex  items-center gap-4 ">
              <span className="bg-white h-fit rounded-full">
                <Image src={Time} alt="icon" className="m-3 h-12 w-12" />
              </span>
              <div className="flex flex-col w-full xl:w-[30%]">
                <span className="font-[urbanist] font-bold uppercase text-[16px] leading-[100%]">
                  Timely Delivery
                </span>
                <span className="font-[inter] font-normal  text-[14px] leading-[100%]">
                  We pride ourselves on completing projects on schedule without
                  compromising on quality, so you can move into your dream home
                  without delays.
                </span>
              </div>
            </div>

            <div className="absolute top-[25%] left-[60%] flex  items-center gap-4 ">
              <span className="bg-white h-fit rounded-full">
                <Image src={user} alt="icon" className="m-3 h-12 w-12" />
              </span>
              <div className="flex flex-col w-full xl:w-[70%] ">
                <span className=" font-[urbanist] font-bold uppercase text-[16px] leading-[100%]">
                  Customer-Centric Approach
                </span>
                <span className="font-[inter] font-normal  text-[14px] leading-[100%]">
                  Our clients are at the heart of everything we do. From
                  choosing trusted partners to providing exceptional after-sales
                  support, we prioritize your satisfaction every step of the
                  way.
                </span>
              </div>
            </div>
            <div className="absolute top-[80%] left-[50%] flex  items-center gap-4 ">
              <span className="bg-white h-fit rounded-full">
                <Image src={Modern} alt="icon" className="m-3 h-12 w-12" />
              </span>
              <div className="flex flex-col w-[60%]">
                <span className="font-[urbanist] font-bold uppercase text-[16px] leading-[100%]">
                  Modern Design & Innovation
                </span>
                <span className="font-[inter] font-normal  text-[14px] leading-[100%]">
                  Every property is designed with meticulous attention to
                  detail, combining modern aesthetics with innovative,
                  sustainable construction methods.
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <span className="absolute top-[37%] right-[35%] lg:w-40 w-28 h-28 lg:h-40 flex flex-col justify-center items-center text-center p-3 text-white bg-black rounded-full font-[urbanist] font-medium text-[24px] lg:text-[32px] leading-[100%]">
              <span>WHY</span>
              <span>CHOOSE</span>
              <span>US</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChoose;
