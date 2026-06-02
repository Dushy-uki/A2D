import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    image: "/images/student-1.jpg",
    university: "TU Munich",
    program: "M.Sc. Computer Science",
    quote: "StudyGermany made my dream of studying at TU Munich a reality. From selecting the right program to visa approval, they were with me every step. Highly recommend their services!",
  },
  {
    name: "David Okonkwo",
    image: "/images/student-2.jpg",
    university: "RWTH Aachen",
    program: "M.Sc. Mechanical Engineering",
    quote: "The team&apos;s expertise in German university applications is unmatched. They helped me craft a compelling SOP that got me admitted to my top choice university.",
  },
  {
    name: "Linh Nguyen",
    image: "/images/student-3.jpg",
    university: "University of Stuttgart",
    program: "M.Sc. Automotive Engineering",
    quote: "I was worried about the visa process, but StudyGermany guided me perfectly. Their pre-departure session was incredibly helpful for settling in Germany.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Success Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-balance">
            Hear From Our Students
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Our students have successfully made it to top German universities. 
            Here&apos;s what they have to say about their journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name}
              className="bg-white/10 border-white/20 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  {testimonial.quote.replace(/&apos;/g, "'")}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary-foreground/70">
                      {testimonial.program}
                    </p>
                    <p className="text-sm text-accent">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
