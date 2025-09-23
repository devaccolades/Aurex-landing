import Navbar from "@/components/Navbar";
import HeroSection from "./(home)/HeroSection";
import Ambassador from "./(home)/Ambassador";
import Services from "./(home)/Services";
import WhyChoose from "./(home)/WhyChoose";
import Map from "./(home)/Map";
import Footer from "@/components/Footer";
import Image from "next/image";
import gradientBg from "../../public/images/navbar/grad2.svg"; // adjust path

export default function Home() {
  return (
    <div className="relative">
      {/* Gradient background image only */}
      <div className="absolute top-0 left-0 -z-10">
        <Image
          src={gradientBg}
          alt="Background gradient"
          priority
          className=""
        />
      </div>

      {/* Content */}
      <Navbar />
      <HeroSection />
      <Ambassador />
      <Services />
      <WhyChoose />
      <Map />
      <Footer />
    </div>
  );
}
