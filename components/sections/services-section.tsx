import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Zap, Paintbrush, Shield, Hammer, Truck, Scissors, Laptop } from "lucide-react";

const services = [
  {
    title: "Plumbing Services",
    description: "Expert plumbing solutions for residential and commercial needs",
    icon: Wrench,
  },
  {
    title: "Electrical Work",
    description: "Professional electrical installations and repairs",
    icon: Zap,
  },
  {
    title: "Painting",
    description: "Transform your space with our professional painting services",
    icon: Paintbrush,
  },
  {
    title: "Security",
    description: "Keep your property safe with our security solutions",
    icon: Shield,
  },
  {
    title: "Carpentry",
    description: "Custom woodwork and furniture repairs",
    icon: Hammer,
  },
  {
    title: "Moving Services",
    description: "Professional and reliable moving assistance",
    icon: Truck,
  },
  {
    title: "Landscaping",
    description: "Beautiful and sustainable landscape design",
    icon: Scissors,
  },
  {
    title: "Tech Support",
    description: "Expert IT solutions and computer repairs",
    icon: Laptop,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional services tailored to your needs
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="bg-background hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground text-center">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}