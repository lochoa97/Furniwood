import React from 'react';
import '../Styles/about.css';

function About() {
  return (
    <div className='container'>
      <div className="About">
        <div className='row-left'>
        <img src='/NeoZone.jpeg' alt="Mueble Multifuncional" />
        </div>
        <div className='row-right'>
        <h1>NeoZone</h1>
        <p>
Somos una empresa apasionada por la innovación y la funcionalidad en el mundo del mobiliario. Nuestra misión es simplificar la vida de nuestros clientes al ofrecer soluciones inteligentes para el hogar que combinan diseño estético y versatilidad.
<br/>
<br/>
En NeoZone, creemos en la calidad, la innovación y la atención al detalle. Cada uno de nuestros muebles es cuidadosamente diseñado y fabricado con materiales de la más alta calidad para garantizar durabilidad y funcionalidad a largo plazo. Nos enorgullece ofrecer a nuestros clientes soluciones que no solo embellecen sus espacios, sino que también mejoran su calidad de vida.
        <br />
        <br />
       NeoZone se enorgullece de su compromiso con el Objetivo de Desarrollo Sostenible (ODS) número 12: Consumo y Producción Responsable. Nos esforzamos por liderar el camino hacia un mundo más sostenible al promover prácticas empresariales que minimicen nuestro impacto ambiental y fomenten un consumo responsable.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
