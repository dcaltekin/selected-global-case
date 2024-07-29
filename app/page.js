import Image from "next/image";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import HeroSection from "./components/HeroSection";
import VideoComp from "./components/VideoComp";
import AboutProperty from "./components/AboutProperty";
import Location from "./components/Location";

export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <HeroSection />
      <VideoComp />
      <AboutProperty />
      <Location />
    </>
  );
}
