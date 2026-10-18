import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black p-2 sm:p-3 md:p-4 box-border">
      {/* Red Studio Canvas */}
      <div className="relative w-full bg-[#ff0700] rounded-[22px] sm:rounded-[28px] md:rounded-[36px] px-6 sm:px-10 md:px-14 lg:px-16 py-6 sm:py-8 md:py-10 overflow-hidden shadow-2xl">
        {/* Top Navbar */}
        <Navbar />

        {/* Central Display Section */}
        <Hero title="Moah" />

        {/* Studio Sections */}
        <Manifesto />
        <Work />
        <Services />
        <Clients />
        <Contact />

        {/* Bottom Bar / Footer */}
        <Footer />
      </div>
    </main>
  );
}
