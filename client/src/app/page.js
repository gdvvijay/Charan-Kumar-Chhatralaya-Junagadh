import AboutUsSection from "@/components/home/AboutUsSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import AdmissionSection from "@/components/home/AdmissionSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutUsSection/>
      <FacilitiesSection/>
      <ActivitiesSection/>
      <AdmissionSection/>
      <GallerySection/>
    </>
  );
}
