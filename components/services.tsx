import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  FileText, 
  Plane, 
  Home, 
  Languages, 
  Briefcase,
  BookOpen,
  HeartHandshake
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Personalized guidance to find the perfect university and program matching your academic profile, career goals, and budget.",
  },
  {
    icon: FileText,
    title: "Application Assistance",
    description: "Complete support with application documents, SOP writing, LOR guidance, and portfolio preparation for your dream university.",
  },
  {
    icon: Languages,
    title: "German Language Training",
    description: "Comprehensive German language courses from A1 to C1 levels with certified instructors and flexible schedules.",
  },
  {
    icon: Plane,
    title: "Visa Guidance",
    description: "Expert assistance with visa documentation, blocked account setup, health insurance, and embassy interview preparation.",
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Help finding student housing, dormitories, or shared apartments in your university city before you arrive.",
  },
  {
    icon: Briefcase,
    title: "Pre-Departure Briefing",
    description: "Detailed orientation sessions covering German culture, travel tips, banking, and what to expect on arrival.",
  },
  {
    icon: BookOpen,
    title: "Scholarship Guidance",
    description: "Information and application support for DAAD, Deutschlandstipendium, and university-specific scholarships.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Arrival Support",
    description: "Continued assistance after you land — city registration, bank account opening, and settling-in support.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Comprehensive Study Abroad Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From your first consultation to settling in Germany, we provide end-to-end support 
            to make your study abroad journey smooth and successful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
