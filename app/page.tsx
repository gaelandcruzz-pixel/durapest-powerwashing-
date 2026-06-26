import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import WhyUs from "./components/WhyUs";
import ServiceAreas from "./components/ServiceAreas";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <ServiceAreas />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
