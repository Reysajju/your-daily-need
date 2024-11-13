import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Award, Shield } from "lucide-react";

const features = [
  {
    name: "Expert Team",
    description: "Our professionals are highly skilled and certified in their respective fields",
    icon: Users,
  },
  {
    name: "24/7 Availability",
    description: "Round-the-clock service for emergencies and urgent needs",
    icon: Clock,
  },
  {
    name: "Quality Guaranteed",
    description: "We stand behind our work with satisfaction guarantees",
    icon: Award,
  },
  {
    name: "Fully Insured",
    description: "Complete peace of mind with comprehensive insurance coverage",
    icon: Shield,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Delivering excellence in every service we provide
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.name} className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-foreground text-center">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground text-center">
                      {feature.description}
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