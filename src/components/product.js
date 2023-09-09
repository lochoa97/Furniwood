import React from 'react';
import '../Styles/product.css';
import Carousel from '../carrusel/carrusel';
import Muestra from '../carrusel/muestra';

function Product() {

  const data = [
    {images:"user.jpg", ebanistas:"Juan Rodriguez"},
    {images:"user.jpg", ebanistas:"Pablo Rivera"},
    {images:"user.jpg", ebanistas:"Manuel Serrano"},
    {images:"user.jpg", ebanistas:"Maria Castillo"},
    // Agrega las URL de tus imágenes aquí
  ];

  const images = [
    "mueble.jpeg",
    "mueble2.jpeg",
    "mueble1.jpeg",
  ];

  return (
    <div className='container'>
      <div className="product">
      <div className='left'>
      <img src='/prototipo.jpeg' alt="Mueble Multifuncional" />
        </div>
        <div className='right'>
        <p>
        En su función principal, esta pieza se transforma en una cuna espaciosa y segura para el bebé. Con laterales ajustables y una base regulable en altura, la cuna garantiza un ambiente cómodo y seguro para el descanso del bebé durante sus primeros meses de vida. Su diseño elegante y moderno se adapta perfectamente a cualquier decoración de la habitación.
<br/>
A medida que el niño crece, este versátil mueble se convierte en una emocionante zona de juegos. Los laterales de la cuna se pueden retirar fácilmente para convertir la estructura en un área de juego espaciosa con características interactivas y almacenamiento para juguetes. Esto fomenta el desarrollo cognitivo y la creatividad del niño, ofreciendo un espacio seguro y divertido para explorar.
<br/>
Cuando el niño ya no necesita una cuna ni una zona de juegos, este mueble se transforma en una práctica mesa para actividades y estudios. La parte superior de la estructura se convierte en una superficie de trabajo ideal para actividades creativas y tareas escolares.
        </p>
        </div>
      </div>
      <div className='ebanista'>
        <div className='carrusel'>
          <Carousel data={data} />
        </div>
      </div>

      <div className='muestra'>
          <Muestra images={images} />
      </div>
    </div>
  );
}


export default Product;
