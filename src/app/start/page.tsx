import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { StartFinder } from "@/app/start/StartFinder";

export default function StartPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-28">
        <StartFinder />
      </main>
      <EmergencyBanner />
      <Footer />
    </>
  );
}
