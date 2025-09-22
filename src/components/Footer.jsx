import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f6f2ec] text-gray-800">
      <div className="containers mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column */}
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/footer/logo.png" alt="Aurex Builders" width={60} height={60} />
            <h3 className="text-sm font-bold uppercase leading-5">
              Manifesting Your Dream <br /> Into A Magnificent Reality
            </h3>
          </div>
          <p className="mt-4 text-[14px] leading-6 max-w-md">
            Aurex Builders ensures to fulfill the dream of our customers by
            gifting them with quality home spaces, contemporary architecture,
            environment-friendly designs, timely delivery, after-sales service
            and return on investment.
          </p>
        </div>

        {/* Right column */}
        <div>
          <h4 className="text-sm font-bold mb-3 uppercase">Our Banking Partners</h4>
          {/* Bank logos */}
          <div className="grid grid-cols-5 gap-2 mb-6">
            <Image src="/images/footer/axis.svg" alt="Axis Bank" width={90} height={90} />
            <Image src="/images/footer/icici.svg" alt="ICICI Bank" width={90} height={90} />
            <Image src="/images/footer/canara.svg" alt="Canara Bank" width={90} height={90} />
            <Image src="/images/footer/cub.svg" alt="CUB" width={90} height={90} />
            <Image src="/images/footer/sbi.svg" alt="SBI" width={90} height={90} />
            <Image src="/images/footer/lic.svg" alt="LIC HFL" width={90} height={90} />
            <Image src="/images/footer/bob.svg" alt="Bank of Baroda" width={90} height={90} />
            <Image src="/images/footer/hdfc.svg" alt="HDFC Bank" width={90} height={90} />
          </div>


          {/* Address */}
          {/* Two column layout */}
          <div className="flex justify-between items-start text-sm">
            {/* Left side - Address */}
            <div className="font-semibold leading-5">
              AUREX BUILDERS PVT LTD.<br />
              AURUM COMPLEX,<br />
              PATTURAIKKAL, THRISSUR,<br />
              KERALA - 680 020
            </div>

            {/* Right side - Contact info */}
            <div className="flex flex-col gap-1">
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
        <div className="containers mx-auto py-4 text-xs text-gray-500">
          © 2025 <span className="font-semibold">AUREX Builders</span> All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
