import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
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
                <Link to="/login">Iniciar Sesión</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;