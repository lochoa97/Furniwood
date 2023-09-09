
import React from "react";
import MuestraItem from './muestraitems';
import './carrusel.css';

const Muestra = ({ images }) => {


  return (
    <div className="carousel">
      {/* <button className="prev-btn" onClick={prevSlide}>
        &lt;
      </button> */}
      <div className="muestra-items">
        {
        images.map((image, index) => (
            <MuestraItem key={index} image={image} />
        ))     
        }
      </div>
      {/* <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button> */}
    </div>
  );
};

export default Muestra;

