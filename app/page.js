import Image from "next/image";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <HeroSection />
    </>
  );
}
