import React from "react";
import "../ImageModule/ImageModule.css";

function ImageModule({ imagePath, initiativeTitle, initiativeDescription }) {
  return (
    <div className="hover-module">
      {/* Background image is passed via inline style */}
      <div
        className="hover-module-background"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${imagePath})`,
        }}
      ></div>

      <div className="hover-module-content">
        <h1>{initiativeTitle}</h1>
        <p>{initiativeDescription}</p>
      </div>
    </div>
  );
}

export default ImageModule;
