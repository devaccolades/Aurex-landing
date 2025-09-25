import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f6f2ec] text-gray-800">
      <div className="containers mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column */}
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/footer/logo.png" alt="Aurex Builders" width={60} height={60} />
            <h3 className="font-bold font-[urbanist] text-[16px] leading-[16px] uppercase ">
              Manifesting Your Dream <br /> Into A Magnificent Reality
            </h3>
          </div>
          <p className="mt-4 font-normal font-[inter] text-[16px] leading-[16px] max-w-md">
            Aurex Builders ensures to fulfill the dream of our customers by
            gifting them with quality home spaces, contemporary architecture,
            environment-friendly designs, timely delivery, after-sales service
            and return on investment.
          </p>
        </div>

        {/* Right column */}
        <div>
          <h4 className="font-bold font-[urbanist] text-[16px] leading-[16px] mb-3 uppercase">Our Banking Partners</h4>
          {/* Bank logos */}
          <div className="grid grid-cols-1 gap-2 mb-6">
            <Image src="/images/footer/bank.svg" alt="Axis Bank" width={500} height={500} />
          </div>


          {/* Address */}
          {/* Two column layout */}
          <div className="flex justify-between items-start font-bold gap-8 font-[urbanist] text-[14px] leading-[14px] lg:text-[16px] lg:leading-[16px]">
            {/* Left side - Address */}
            <div className=" whitespace-pre-line">
              {`AUREX BUILDERS PVT LTD.
                AURUM COMPLEX,
                PATTURAIKKAL, THRISSUR,
                KERALA - 680 020`
              }
            </div>


            {/* Right side - Contact info */}
            <div className="flex flex-col gap-1 font-bold font-[urbanist] text-[14px] leading-[14px] lg:text-[16px] lg:leading-[16px]">
              {/* Email */}
              <div className="flex items-center gap-2">
                <Image src="/images/footer/mail.png" alt="Email" width={18} height={18} />
                <a href="mailto:sales@aurexbuilders.com" className="text-orange-500">
                  sales@aurexbuilders.com
                </a>
              </div>

              {/* Phone  */}
              <div className="flex items-center gap-2">
                <Image src="/images/footer/phone.png" alt="Phone" width={18} height={18} />
                <div className="flex flex-col">
                  <span>+91 98465 07474</span>
                  <span>+91 98460 07474</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div >
        <div className="containers mx-auto py-4 font-normal font-[inter] text-[12px] leading-[12px] text-[#000000]">
          Copyright © 2025 <span className="font-semibold text-[#A8731C]">AUREX Builders</span> All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
