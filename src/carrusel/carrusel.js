// Carousel.js

import React, { useState } from "react";
import CarouselItem from './carruselitems';
import './carrusel.css';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {/* <button className="prev-btn" onClick={prevSlide}>
        &lt;
      </button> */}
      <div className="carousel-items">
        {
        data.map((data, index) => (
            <CarouselItem key={index} image={data.images} ebanistas= {data.ebanistas}/>
        ))     
        }
      </div>
      {/* <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button> */}
    </div>
  );
};

export default Carousel;

