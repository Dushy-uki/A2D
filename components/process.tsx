import { ArrowRight, Section } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Start with a free 30-minute consultation where we understand your academic background, career goals, and preferences.",
  },
  {
    number: "02",
    title: "Profile Evaluation",
    description: "Our experts evaluate your profile and shortlist universities and programs that best match your qualifications.",
  },
  {
    number: "03",
    title: "Application Preparation",
    description: "We help you prepare all required documents including SOP, CV, and ensure your application stands out.",
  },
  {
    number: "04",
    title: "University Application",
    description: "We submit applications to your selected universities through uni-assist or direct portals and track their status.",
  },
  {
    number: "05",
    title: "Admission & Visa",
    description: "Once admitted, we guide you through blocked account setup, health insurance, and visa application process.",
  },
  {
    number: "06",
    title: "Pre-Departure & Beyond",
    description: "Attend our orientation sessions and travel to Germany with confidence. We support you even after arrival.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Your Journey to Germany in 6 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;ve streamlined the complex study abroad process into clear, manageable 
            steps. Here&apos;s how we&apos;ll get you to Germany.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow z-10"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block h-5 w-5 text-muted-foreground" />
                  )}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

