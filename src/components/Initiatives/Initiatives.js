import "./Initiatives.css";
import MasonryHover from "../Masonry/MasonryHover";

function Initiatives() {
  return (
    <div className="initiatives">
      <div className="initiatives-title">Initiatives</div>
      <div className="initiatives-masonry">
        <MasonryHover />
      </div>
    </div>
  );
}

export default Initiatives;
