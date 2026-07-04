import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Owner from "@/components/Owner";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

export default function Home() {
  return (
    <main className="bg-black">

      <Hero />

      <Services />

      <Owner />

      <Gallery />

      <Contact />

      <Footer />

      <Whatsapp />

    </main>
  );
}
