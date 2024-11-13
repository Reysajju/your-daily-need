import { Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="ml-2 text-xl font-bold text-primary">SkillHub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for skilled labor and professional services.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary text-sm">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary text-sm">
                  Electrical
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary text-sm">
                  Carpentry
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary text-sm">
                  Painting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SkillHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}