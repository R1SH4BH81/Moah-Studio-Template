import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black p-2 sm:p-3 md:p-4 flex items-center justify-center box-border">
      {/* Red Studio Canvas */}
      <div className="relative w-full min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2rem)] bg-[#ff0700] rounded-[22px] sm:rounded-[28px] md:rounded-[36px] px-6 sm:px-10 md:px-14 lg:px-16 py-6 sm:py-8 md:py-10 flex flex-col justify-between overflow-hidden shadow-2xl">
        {/* Top Navbar */}
        <Navbar />

        {/* Central Display Section */}
        <Hero title="Moah" />

        {/* Bottom Bar / Footer */}
        <Footer />
      </div>
    </main>
  );
}
