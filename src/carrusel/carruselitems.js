// CarouselItem.js
import React from "react";
import './carrusel.css';

const CarouselItem = ({ image , ebanistas}) => {
  return (
    <div className="carousel-item">
      <img src={image} alt="Carousel Item" />
      <p>{ebanistas}</p>
    </div>
  );
};

export default CarouselItem;