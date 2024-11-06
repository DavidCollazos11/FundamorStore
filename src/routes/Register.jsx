import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando datos -->", name, email, password);
    try {
      await registerUser(email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <img src="/Proyecto-DMW/img/fundamor.png" alt="uao-logo" className="uao-logo" />
        <h1 className="title">Regístrate</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="label">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Tu nombre"
            className="input input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <label htmlFor="email" className="label">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@correo.com"
            className="input input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password" className="label">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="*"
            className="input input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit" className="primary-button login-button">Enviar</button>
        </form>
        <a href="index.html" className="subtitle">Volver a la página principal</a>
      </div>
    </div>
  );
};

export default Register;