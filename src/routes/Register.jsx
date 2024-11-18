import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando datos -->", name, email, password);
    try {
      await registerUser(email, password); 
      navigate("/home"); 
    } catch (error) {
      console.log(error.code);
      setErrorMessage("Error al registrar, por favor intente nuevamente.");

    }
  };

  return (
    <div className="login">
      <div className="container">
        <img src="https://fundamor.org/wp-content/uploads/2024/04/2024-05-09_14-38-49.png" alt="Logo Fundamor" className="uao-logo" />
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
          
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Muestra el mensaje de error si existe */}
          
          <button type="submit" className="primary-button login-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;