import React from 'react';
import { Link } from 'react-router-dom';
import  '../Styles/header.css';

function Header() {
  return (
    <header>
      <a href='' className='logo'>
          <img src='logo.jpeg' />
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/" className='nav-link'>Inicio</Link>
            <Link to="/Contact" className='nav-link'>Contacto</Link>
            <Link to="/About" className='nav-link'>Nosotros</Link>
          </li>
        </ul>
        {/* <a href='/' className='nav-link'>Inicio</a>
        <a href='' className='nav-link'>Sobre nosotros</a>
        <a href='' className='nav-link'>Contacto</a> */}
      </nav>

    </header>
  );
}

export default Header;
