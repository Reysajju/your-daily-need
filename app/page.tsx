import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import ServiceAreaSection from "@/components/sections/service-area-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <ContactSection />
    </div>
  );
}