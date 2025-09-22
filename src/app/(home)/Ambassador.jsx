import Image from "next/image";
import React from "react";

const Ambassador = () => {
  return (
    <section
      className="h-auto "
      style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
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
            <h1>Manifesting your dream into a Magnificent reality</h1>
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
              className="font-[inter] font-normal text-[14px] leading-[156%] tracking-normal"
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
              width={100}
              height={100}
              alt="bg image"
              className="h-[158px] object-cover w-full opacity-10"
            />
            <div className="absolute top-0 right-0 h-[429px] w-[228px] overflow-hidden">
              <Image
                src={"/images/ambassador/bhavana.png"}
                height={500}
                width={500}
                className="h-full w-full object-cover object-top -mb-[100px] translate-y-10"
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
              className="ml-[13px] mt-[24px] font-[urbanist] text-[16px] leading-[16px] tracking-normal font-medium
           uppercase max-w-48"
            >
              We are pleased to introduce our brand ambassador.
            </p>
            <div className="flex justify-end">
              <p className="font-[urbanist] text-[64px] leading-[40px] tracking-[-0.08em] font-medium uppercase">
                BHAVANA
              </p>
            </div>
            <Image
              src={"/images/ambassador/thrissur symbolic.png"}
              className="h-[170px] w-full object-cover"
              width={100}
              height={100}
              alt="bg image"
            />
          </div>
        </div>
      </div>

      {/* md and above section  */}

      <div className="hidden md:relative md:flex md:flex-col">
        <div className="relative flex h-[288px]">
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
          <div className="w-[50%] h-full flex items-center justify-center">
            <h1 className="font-[urbanist] font-medium tracking-normal text-[40px] leading-[40px] text-left text-[#000000] uppercase max-w-7/12">
              Manifesting your dream into a Magnificent reality
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-center">
            <p
              className="font-[inter] font-normal text-[16px] leading-[100%] tracking-normal max-w-9/12"
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

        <div className="relative flex h-[329px]">
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
              src={"/images/ambassador/ambflower.png"}
              width={100}
              height={100}
              alt="bg image"
              className="h-full object-cover w-full opacity-10"
            />
          </div>
          <div className="w-[50%] h-full flex flex-col justify-around ">
            <p className="ml-[37px] font-[urbanist] text-[24px] leading-[24px] tracking-normal font-medium uppercase max-w-64">
              We are pleased to introduce our brand ambassador.
            </p>
            <div className="flex ml-[37px]">
              <p className="font-[urbanist] text-[128px] leading-[40px] tracking-[-0.08em] font-medium uppercase">
                BHAVANA
              </p>
            </div>
          </div>
        </div>

        {/* 3rd section  */}

        <div className="relative flex h-[390px]">
          <div className="w-[50%] h-full flex items-center justify-center overflow-hidden">
            <div
              className="h-[1000px] w-[1px] rotate-63"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
            <div
              className="h-[1000px] w-[1px] -rotate-63"
              style={{ border: "0.5px solid rgba(168, 168, 168, 0.3)" }}
            ></div>
          </div>
          <div className="w-[50%] h-full">
            <Image
              src={"/images/ambassador/thrissur symbolic.png"}
              className="h-full w-full object-cover"
              width={100}
              height={100}
              alt="bg image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassador;
