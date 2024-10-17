import "./Initiatives.css";
import MasonryLayout from "../Masonry/MasonryLayout";

function Initiatives() {
  return (
    <div className="initiatives">
      <div className="initiatives-title">Initiatives</div>
      <div className="initiatives-masonry">
        <MasonryLayout />
      </div>
    </div>
  );
}

export default Initiatives;
