import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyGermany } from "@/components/why-germany";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Universities } from "@/components/universities";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyGermany />
        <Process />
        <Universities />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
