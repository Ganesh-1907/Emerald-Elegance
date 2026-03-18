import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Dealers } from "@/components/sections/Dealers";
import { BecomePartnerSection } from "@/components/sections/BecomePartnerSection";
import { Features } from "@/components/sections/Features";
import { AppPromo } from "@/components/sections/AppPromo";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Products />
        <Dealers />
        <Features />
        <BecomePartnerSection />
        <AppPromo />
      </main>

      <Footer />
    </div>
  );
}
