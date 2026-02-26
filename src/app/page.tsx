import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-beige">
      <Navbar />
      <Hero />
      <PromoSection />
      <MenuSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
