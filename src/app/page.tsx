import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PulseCheck } from "@/components/sections/PulseCheck";
import { Programs } from "@/components/sections/Programs";
import { Coaches } from "@/components/sections/Coaches";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { EventPopup } from "@/components/layout/EventPopup";

export default function Home() {
  return (
    <>
      <EventPopup />
      <Nav />
      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <PulseCheck />
        <About />
        <Programs />
        <Process />
        <Coaches />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <EmergencyBanner />
      <Footer />
    </>
  );
}
