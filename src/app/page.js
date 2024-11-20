import Nav from "./components/common/Nav";
import Slider from "./components/common/Slider";
import Footer from "./section/Footer";
import Gallery from "./section/Gallery";
import HealthCTA from "./section/HealthCTA";
import Hero from "./section/Hero";
import Social from "./section/Social";
import TeamSlider from "./section/TeamSlider";

export default function Home() {
  return (
    <div className="font-nunito">
      <span className="overflow-hidden">
        <Nav />
        <Hero />
        <Social />
        <TeamSlider />
      </span>
      <Gallery />
      <span className="overflow-hidden">
        <HealthCTA />
        <Footer />
      </span>
    </div>
  );
}