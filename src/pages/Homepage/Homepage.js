import "./Homepage.css";
import hero_gif from "../../assets/videos/hero.gif";
import idea_img from "../../assets/images/idea.png";
import Counter from "../../components/Counter/Counter";
import MasonryLayout from "../../components/Masonry/MasonryLayout";

function Homepage() {
  return (
    <div className="wrapper">
      <div className="hero-section">
        <div className="hero-section-heading">
          <h1>Entrepreneurship Cell</h1>
          <h2 className="college">Medi-Caps University</h2>
          <h2 className="hero-motto">INNOVATE | INSPIRE | IMPACT</h2>
        </div>
        <div className="hero-section-image">
          {/* <img src={hero_gif}></img> */}
        </div>
      </div>
      <div className="about-us">
        <div className="about-us-bg"></div>
        <div className="about-us-main">
          <h2 className="about-us-heading">About Us</h2>
          <p className="about-us-content">
            E-Cell was first established under the Centre of Entrepreneurship
            Development in the year 2008 & then it gained reputation as an
            individual club in the year 2018. Our vision is to develop, enhance
            and carve out the inner entrepreneurial potentials of students by
            providing them with opportunities. E-cell's mission is to train
            students to face industrial challenges. We also help students
            discover their potential, implement their ideas, innovate and grow
            and learn everyday to gain the skills which are going to help them a
            lifetime.
          </p>
        </div>
      </div>
      <div className="our-motto">
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
      </div>
      <div className="stat-counters">
        <div className="stat-model"></div>
        <Counter />
        {/* <div className="counter-section">
          <div className="stat-1 counters">
            <h2 className="counter-heading">events organized</h2>
            <h3 className="counter-stat">50+</h3>
          </div>
          <div className="stat-2 counters">
            <h2 className="counter-heading">total participants</h2>
            <h3 className="counter-stat">15k+</h3>
          </div>
          <div className="stat-3 counters">
            <h2 className="counter-heading">entrepreneurs supported</h2>
            <h3 className="counter-stat">1k+</h3>
          </div>
        </div> */}
      </div>
      <div className="initiatives">
        <div className="initiatives-title">Initiatives</div>
        <div className="initiatives-masonry">
          <MasonryLayout />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
