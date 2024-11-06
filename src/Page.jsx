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
    </div>
  );
}
