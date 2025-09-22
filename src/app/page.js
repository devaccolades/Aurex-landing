import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroSection from "./(home)/HeroSection";
import Ambassador from "./(home)/Ambassador";
import Services from "./(home)/Services";
import WhyChoose from "./(home)/WhyChoose";
import Map from "./(home)/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Ambassador />
      <Services />
      <WhyChoose />
      <Map />
      <Footer /> */}
    </>
  );
}
