import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import Services from "@/components/Services";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Production from "@/components/Production";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import QuoteWall from "@/components/QuoteWall";
import Blog from "@/components/Blog";
import CtaSection from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStrip />
        <Services />
        <Intro />
        <Projects />
        <Production />
        <Testimonials />
        <Process />
        <Pricing />
        <QuoteWall />
        <Blog />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
