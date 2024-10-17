import "./OurMotto.css";
import idea_img from "../../assets/images/idea.png";
import ParticleBackground from "../ParticleNetwork/ParticleNetwork";

function OurMotto() {
  return (
    <div className="our-motto">
      {/* <ParticleBackground> */}
      <h2 className="our-motto-heading">Our Motto</h2>
      <div className="motto-container">
        <div className="moto-1 motto-show">
          <div className="motto-image">
            <img src={idea_img}></img>
          </div>
          <div className="motto-box">
            <h3 className="motto-heading">INNOVATE</h3>
            <p className="motto-content">
              Ideas are just raw materials but they are own most valuable
              assets.We motivate students to share their Ideas and enjoy their
              'Idea to reality' journey with E-cell
            </p>
          </div>
        </div>
        <div className="moto-2 motto-show">
          <div className="motto-image">
            <img src={idea_img}></img>
          </div>
          <div className="motto-box">
            <h3 className="motto-heading">INNOVATE</h3>
            <p className="motto-content">
              Ideas are just raw materials but they are own most valuable
              assets.We motivate students to share their Ideas and enjoy their
              'Idea to reality' journey with E-cell
            </p>
          </div>
        </div>
        <div className="moto-3 motto-show">
          <div className="motto-image">
            <img src={idea_img}></img>
          </div>
          <div className="motto-box">
            <h3 className="motto-heading">INNOVATE</h3>
            <p className="motto-content">
              Ideas are just raw materials but they are own most valuable
              assets.We motivate students to share their Ideas and enjoy their
              'Idea to reality' journey with E-cell
            </p>
          </div>
        </div>
      </div>
      {/* </ParticleBackground> */}
    </div>
  );
}

export default OurMotto;
