import "./HeroSection.css";
import hero_gif from "../../assets/videos/hero.gif";
import ParticleBackground from "../ParticleNetwork/ParticleNetwork";

function HeroSection() {
  return (
    <div className="hero-section">
      <ParticleBackground>
        <div className="hero-section-heading">
          <h1>Entrepreneurship Cell</h1>
          <h2 className="college">Medi-Caps University</h2>
          <h2 className="hero-motto">INNOVATE | INSPIRE | IMPACT</h2>
        </div>
        {/* <div className="hero-section-image"> */}
        {/* <img src={hero_gif}></img> */}
        {/* </div> */}
      </ParticleBackground>
    </div>
  );
}

export default HeroSection;
