import React, { useState } from 'react';
import '../Styles/contact.css'; // Importa los estilos CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    selectedColor: 'Rojo', // Valor predeterminado del color
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la información del formulario a tu servidor o realizar cualquier acción necesaria.
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="form-container">
      <h2>Formulario de Preorden</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Número de Teléfono:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedColor">Color:</label>
          <select
            id="selectedColor"
            name="selectedColor"
            value={formData.selectedColor}
            onChange={handleInputChange}
            required
          >
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Marron">Marron</option>
          </select>
        </div>
        <button type="submit">Enviar Preorden</button>
      </form>
    </div>
  );
}

export default Contact;
