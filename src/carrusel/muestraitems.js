import React from "react";
import './carrusel.css';

const MuestralItem = ({ image }) => {
  return (
    <div className="muestra-item">
      <img src={image} alt="Carousel Item" />
    </div>
  );
};

export default MuestralItem;