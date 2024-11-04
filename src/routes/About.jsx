import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about" aria-current="page">About</Link>
      </nav>
      <main>
        <div className="container">
          <div className="title">
            <h1>¿QUÉ ES EL PULGUERO FUNDAMOR?</h1>
            <h3>Pulguero FUNDAMOR: Solidaridad y Esperanza</h3>
          </div>
          <div className="content">
            <p>
              Durante el transcurso del año, FUNDAMOR realiza una serie de eventos para recaudar fondos que permiten la sostenibilidad de las niñas, niños, adolescentes y jóvenes en estado de vulnerabilidad, que pertenecen a los diferentes programas de la Fundación.
              <br /><br />
              Entre ellos, se encuentra el Pulguero Solidario, un espacio en el que personas, empresas e instituciones reúnen elementos, ropa, y artículos en buen estado, que ya no usan para donarlos a FUNDAMOR y así permitir que personas de escasos recursos tengan la oportunidad de adquirirlos.
              <br /><br />
              Esto nos permite que cada donación sea de beneficio para las personas que las adquieren. Los ingresos que se obtienen permiten que las niñas, niños, adolescentes y familias beneficiarias de FUNDAMOR continúen recibiendo atención integral.
            </p>
            <img className="imge" src="./img/pulguero1.jpeg" alt="Imagen de html basico" />
          </div>
          <div className="content">
            <h1>Propósitos y Beneficios</h1>
            <ul className="lista">
              <li>Recaudar fondos para programas de la Fundación</li>
              <li>Fomentar la solidaridad y el reciclaje</li>
              <li>Ofrecer artículos accesibles a personas de bajos recursos</li>
              <li>Garantizar atención integral a los beneficiarios de FUNDAMOR</li>
            </ul>
            <img className="imge" src="./img/pulguero2.png" alt="Imagen del Formulario" />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;