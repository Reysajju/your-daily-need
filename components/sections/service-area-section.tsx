import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  "Downtown",
  "North Side",
  "South Side",
  "East End",
  "West End",
  "Suburbs",
  "Metropolitan Area",
  "Surrounding Counties",
];

export default function ServiceAreaSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Service Areas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide services throughout the metropolitan area
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {areas.map((area) => (
              <Card key={area} className="bg-muted">
                <CardContent className="p-4 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <span className="text-foreground">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}