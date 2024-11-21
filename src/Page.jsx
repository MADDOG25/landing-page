import AboutUs from "./components/AboutUs";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Testimonials from "./components/Testimonials";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Problem />
      <Solution />
      <Portfolio />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
