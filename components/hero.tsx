import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "No Tuition Fees at Public Universities",
  "Post-Study Work Visa (18 Months)",
  "World-Renowned Engineering Programs",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/germany-hero.jpg"
          alt="German university campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Now Accepting Applications for 2026 Intake
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
            Your Gateway to{" "}
            <span className="text-accent">World-Class German Education</span>
          </h1>

          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
            Transform your academic dreams into reality with expert guidance through 
            every step of your study abroad journey to Germany. From university 
            selection to visa approval — we&apos;ve got you covered.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="#contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>

         
        </div>
      </div>
    </section>
  );
}
