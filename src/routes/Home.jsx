import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <nav>
        <Link to="/" aria-current="page">Inicio</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <div className="container">
          <div className="title">
            <img className="imge" src="./img/pulguero.png" alt="Imagen del logo del pulguero" />
            <h1>Pulguero FUNDAMOR: Solidaridad y Esperanza</h1>
          </div>
          <div className="content">
            <p>¿Buscas renovar tu armario sin gastar mucho? ¡Nuestro Pulguero Solidario es tu lugar! 
              Además de encontrar prendas únicas, estarás apoyando a los programas de Fundamor para niños.
            </p>
          </div>
          <div className="container2">
            <div className="content2">
              <p>¿Quieres asegurar tu prenda favorita? Regístrate y mantente al tanto sobre las piezas más buscadas. ¡No te quedes sin la tuya!</p>
              <button className="register-button">
                <Link to="/register">Regístrate</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="content3">
          <p>Información de Contacto</p>
          <p>Tel: </p>
          <a href="https://www.instagram.com/fundamorcali/" className="subtitle">Instagram</a>
        </div>
      </main>
    </>
  );
};

export default Home;