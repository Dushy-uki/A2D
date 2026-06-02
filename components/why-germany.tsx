import { 
  Banknote, 
  Award, 
  Globe2, 
  Building2, 
  Users, 
  Lightbulb 
} from "lucide-react";

const reasons = [
  {
    icon: Banknote,
    title: "Free or Low-Cost Education",
    description: "Public universities in Germany charge no tuition fees for most programs. You only pay a small semester contribution (€150-350).",
  },
  {
    icon: Award,
    title: "World-Class Education",
    description: "German universities consistently rank among the best globally, especially in engineering, sciences, and technology fields.",
  },
  {
    icon: Globe2,
    title: "International Environment",
    description: "Over 400,000 international students study in Germany, creating a diverse and welcoming academic community.",
  },
  {
    icon: Building2,
    title: "Strong Economy & Job Market",
    description: "Germany has Europe's largest economy with excellent career opportunities, especially in automotive, tech, and manufacturing.",
  },
  {
    icon: Users,
    title: "Post-Study Work Visa",
    description: "18-month post-study work permit allows you to find employment in Germany after graduation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Home to global companies like BMW, Siemens, and SAP, Germany offers unparalleled internship and research opportunities.",
  },
];

export function WhyGermany() {
  return (
    <section id="why-germany" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Why Choose Germany
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Germany: A Premier Destination for Higher Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover why over 400,000 international students choose Germany as their 
            study destination every year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title} 
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Germany Flag Colors Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex rounded-full overflow-hidden shadow-lg">
            <div className="w-16 h-4 bg-black"></div>
            <div className="w-16 h-4 bg-red-600"></div>
            <div className="w-16 h-4 bg-yellow-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
