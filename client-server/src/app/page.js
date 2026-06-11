import AboutUsSection from "@/components/home/AboutUsSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import AdmissionSection from "@/components/home/AdmissionSection";
import AimsAndValues from "@/components/home/AimsAndValues";
import ContactAndLocation from "@/components/home/ContactAndLocation";
import DonorsAndSupporters from "@/components/home/DonorsAndSupporters";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import NewsAndEvents from "@/components/home/NewsAndEvents";
import SuccessStories from "@/components/home/SuccessStories";

export default function Home() {

  return (
    <>
      <HeroSection/>
      <AboutUsSection/>
      <FacilitiesSection/>
      <ActivitiesSection/>
      <AdmissionSection/>
      <GallerySection/>
      <NewsAndEvents/>
      <SuccessStories/>
      <AimsAndValues/>
      <DonorsAndSupporters/>
      <ContactAndLocation/>
    </>
  );
}
