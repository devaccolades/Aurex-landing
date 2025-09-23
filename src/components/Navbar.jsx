import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo1 from '../../public/images/navbar/logo1.svg';
import Logo2 from '../../public/images/navbar/logo2.svg';
import Phone from '../../public/images/navbar/phone.svg';
import Mail from '../../public/images/navbar/mail.svg';

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="mx-4 md:mx-[70px] flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src={Logo1} 
              alt="Aurex Icon" 
              className="lg:h-[66px] lg:w-[64px] md:h-[50px] md:w-[48px] h-[40px] w-[38px] mr-1 z-50"
            />
            <Image 
              src={Logo2}
              alt="Aurex Building Life" 
              className="lg:h-[52px] lg:w-[112px] md:h-[42px] md:w-[90px] h-[32px] w-[70px] z-50"
            />
          </Link>
        </div>

        {/* Center - Navigation Items (Hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-8 text-black font-[inter] font-normal text-[16px]">
          <Link 
            href="#Projects" 
            className=""
          >
            Projects
          </Link>
          <Link 
            href="#services" 
            className=""
          >
            Services
          </Link>
          <Link 
            href="" 
            className=""
          >
            About Us
          </Link>
          <Link 
            href="#contact-us" 
            className=""
          >
            Contact Us
          </Link>
        </div>

        {/* Right Side - Contact Info */}
        <div className="text-black">
          {/* Desktop Contact Info */}
          <div className="hidden lg:block space-y-2">
            <div className="flex items-center space-x-2">
              <Image src={Phone} alt='phone' className='w-[16px] h-[16px]' />
              <div className="text-[14px] leading-[16px] font-bold">
                +91 98445 07474 / 98460 07474
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={Mail} alt='mail' className='w-[16px] h-[16px]' />
              <div className="text-[14px] font-[urbanist] font-bold">
                SALES@AUREXBUILDERS.COM
              </div>
            </div>
          </div>

          {/* Mobile Contact Info - Stacked vertically */}
          <div className="lg:hidden space-y-1">
            <div className="flex items-center space-x-1">
              <Image src={Phone} alt='phone' className='w-[12px] h-[12px]' />
              <div className="text-[10px] font-bold leading-[16px] text-[#000000]">
                +91 98445 07474 / 98460 07474
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Image src={Mail} alt='mail' className='w-[12px] h-[12px]' />
              <div className="text-[10px] font-[urbanist] font-bold leading-[16px] text-[#000000]">
                SALES@AUREXBUILDERS.COM
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;