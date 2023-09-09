import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../src/components/header';
import Product from '../src/components/product';
import About from '../src/components/about';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={ <Product /> } />
          <Route path="/About" element={ <About /> } /> 
          <Route path="/Contact" element={ <Contact /> } /> 
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
