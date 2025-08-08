import { Metadata } from "next";
// import HeroBanner from "@/components/Section/HeroBanner";
import HeroCarousel from "@/components/Section/HeroCarousel";
import IntroSection from "@/components/Section/IntroSection";
import ServicesSection from "@/components/Section/ServicesSection";
import CTASection from "@/components/Section/CTASection";
import ProcessSection from "@/components/Section/ProcessSection";
import NewsSection from "@/components/Section/NewsSection";
import ClientsSection from "@/components/Section/ClientsSection";
import ContactSection from "@/components/Section/ContactSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "VDS - Thailand's leading workforce and outsourcing solutions provider for industrial estates and large enterprises.",
};

export default function HomePage() {
  return (
    <>
      {/* <HeroBanner /> */}
      <HeroCarousel />
      <IntroSection />
      <ServicesSection />
      <CTASection />
      <ProcessSection />
      <NewsSection />
      <ClientsSection />
      <hr className="border-gray-200 my-0" />
      <ContactSection />
    </>
  );
}
