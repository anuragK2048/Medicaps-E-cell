import "./Homepage.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import hero_gif from "../../assets/videos/hero.gif";
import Counter from "../../components/Counter/Counter";
import MasonryLayout from "../../components/Masonry/MasonryLayout";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurMotto from "../../components/OurMotto/OurMotto";
import Initiatives from "../../components/Initiatives/Initiatives";
import ParticleBackground from "../../components/ParticleNetwork/ParticleNetwork";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  return (
    <div className="wrapper">
      <HeroSection />
      <AboutUs />
      <OurMotto />
      <Counter />
      <Initiatives />
      <Footer />
    </div>
  );
}

export default Homepage;
