import "./OurMotto.css";
import inspire_logo from "../../assets/images/Motto/inspire-logo.svg";
import innovate_logo from "../../assets/images/Motto/innovate-dna-eco.svg";
import impact_logo from "../../assets/images/Motto/impact-logo.svg";
import ParticleBackground from "../ParticleNetwork/ParticleNetwork";

function OurMotto() {
  return (
    <div className="our-motto">
      {/* <ParticleBackground> */}
      <h2 className="our-motto-heading">Our Motto</h2>
      <div className="motto-container">
        <div className="moto-1 motto-show">
          <div className="motto-image">
            <img src={innovate_logo}></img>
          </div>
          <div className="motto-box">
            <h3 className="motto-heading">INNOVATE</h3>
            <p className="motto-content">
              Innovation is the key to transforming ideas into reality. Students
              are encouraged to experiment, refine their concepts, and develop
              groundbreaking solutions that propel them toward entrepreneurial
              success
            </p>
          </div>
        </div>
        <div className="moto-2 motto-show">
          <div className="motto-image">
            <img src={inspire_logo}></img>
          </div>
          <div className="motto-box">
            <h3 className="motto-heading">INSPIRE</h3>
            <p className="motto-content">
              By witnessing the success of peers and learning from industry
              leaders, students get inspired to push their boundaries and chase
              new challenges, leading to a cycle of creativity and innovation
              within the E-cell
            </p>
          </div>
        </div>
        <div className="moto-3 motto-show">
          <div className="motto-image">
            <img src={impact_logo}></img>
          </div>
          <div className="motto-box">
            <h3 className="motto-heading">IMPACT</h3>
            <p className="motto-content">
              When innovation meets execution, real change happens. Students are
              empowered to create meaningful impact by turning their ideas into
              ventures that contribute to society and inspire future innovators
            </p>
          </div>
        </div>
      </div>
      {/* </ParticleBackground> */}
    </div>
  );
}

export default OurMotto;
