import Image from "next/image"
import { MapPin, Star } from "lucide-react"

const universities = [
  {
    name: "University of Wuppertal",
    location: "Gaußstraße 20, 42119 Wuppertal, Germany",
    ranking: "#1 in Germany",
    programs: "Engineering, Computer Science, Business",
    image: "/images/uni1.jpg",
  },
  {
    name: "South Westphalia University of Applied Sciences",
    location: "Frauenstuhlweg 31, 58644 Iserlohn, Germany",
    ranking: "#2 in Germany",
    programs: "Applied Sciences",
    image: "/images/uni2.jpeg",
  },
  {
    name: "Hochschule Niederrhein",
    location: "Krefeld, Germany",
    ranking: "#3 in Germany",
    programs: "Applied Sciences",
    image: "/images/uni3.jpeg",
  },
  {
    name: "University of Duisburg-Essen",
    location: "Duisburg-Essen, North Rhine-Westphalia",
    ranking: "#4 in Germany",
    programs: "Arts, Social Sciences, Natural Sciences",
    image: "/images/uni4.jpeg",
  },
  {
    name: "Paderborn University",
    location: "Warburger Str. 100, 33098 Paderborn, Germany",
    ranking: "#5 in Germany",
    programs: "Computer Science, Natural Sciences",
    image: "/images/uni5.jpeg",
  },
  {
    name: "RWTH Aachen University",
    location: "Templergraben 55, 52062 Aachen, Germany",
    ranking: "#6 in Germany",
    programs: "Engineering sciences, natural sciences, geosciences",
    image: "/images/uni6.jpeg",
  },
]

export function Universities() {
  return (
    <section id="universities" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Partner Universities
          </p>
          <h2 className="font-serif  bold text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Study at Germany&apos;s Top Universities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We have partnerships with over 150 German universities, helping you
            get admitted to the best institutions for your field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="group rounded-2xl overflow-hidden border border-border bg-background hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-20 overflow-hidden">
                <Image
  src={uni.image}
  alt={uni.name}
  width={400}
  height={250}
  className="w-full h-26 object-cover group-hover:scale-105 transition-transform duration-500"
/>
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {uni.ranking}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {uni.name}
                </h3>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  {uni.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Popular Programs:</span>{" "}
                  {uni.programs}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10">
          And 140+ more partner universities across Germany
        </p>
      </div>
    </section>
  )
}
