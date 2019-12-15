import React from "react";
import "./wildflower_styles.css";

const Card = () => {
  return (
    <div className="card">
      <div className="image_container">
        <img src="" alt="" className="flower_image" />
      </div>
      <div className="card_content">
        <div>Common Name:</div>
        <div>Scientific Name:</div>
        <div>Color:</div>
      </div>
    </div>
  );
};

export default Card;
