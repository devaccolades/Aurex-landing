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
      <div className="mx-[70px] flex items-center justify-between">
        
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src={Logo1} 
              alt="Aurex Icon" 
              className="h-[66px] w-[64px] mr-3"
            />
            <Image 
              src={Logo2}
              alt="Aurex Building Life" 
              className="h-[52px] w-[112px]"
            />
          </Link>
        </div>

        {/* Center - Navigation Items */}
        <div className="hidden md:flex items-center space-x-8 text-black font-[inter] font-normal lg:text-[16px] md:text-[14px] text-[12px]">
          <Link 
            href="/projects" 
            className=" "
          >
            Projects
          </Link>
          <Link 
            href="/services" 
            className=""
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className=""
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className=""
          >
            Contact Us
          </Link>
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-x-6 text-black">
          <div className="flex space-x-2">
            <Image src={Phone} alt='phone' className='size-[16px]' />
            <div className="text-[14px] leading-[16px] mb-2 font-bold">
              <div>+91 98445 07474 / 98460 07474</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Image src={Mail} alt='mail' className='size-[16px]' />
            <div className="text-[14px] font-[urbanist] font-bold">
              SALES@AUREXBUILDERS.COM
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (you can add state to toggle this) */}
      <div className="md:hidden mt-4 pt-4">
        <div className="flex flex-col space-y-3">
          <Link href="/projects" className="">
            Projects
          </Link>
          <Link href="/services" className="">
            Services
          </Link>
          <Link href="/about" className="">
            About Us
          </Link>
          <Link href="/contact" className="">
            Contact Us
          </Link>
          
          {/* Mobile Contact Info */}
          <div className="pt-3 gap-[10px]">
            <div className="text-[14px] leading-[16px] mb-2 font-bold">+91 98445 07474 / 98460 07474</div>
            <div className="text-[14px] font-[urbanist] font-bold">SALES@AUREXBUILDERS.COM</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;