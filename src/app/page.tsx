import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Coaches } from "@/components/sections/Coaches";
import { Programs } from "@/components/sections/Programs";
import { Process } from "@/components/sections/Process";
import { Tools } from "@/components/sections/Tools";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Coaches />
        <Programs />
        <Process />
        <Tools />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <EmergencyBanner />
      <Footer />
    </>
  );
}
