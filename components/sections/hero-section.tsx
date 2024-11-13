import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Professional Services</span>
            <span className="block text-primary">When You Need Them</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your trusted partner for skilled labor and professional services. Quality work, reliable professionals, and competitive prices.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">Book Now</a>
            </Button>
            <Button size="lg" variant="outline" className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}