import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      console.log("Usuario logueado --> 🤞👌");
      // Redirigir a una página después del login si es necesario
      navigate("/dashboard");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div className="login" style={{ backgroundColor: "#F2F2F2" }}>
      <div className="container">
        <img src="/Proyecto-DMW/img/fundamor.png" alt="pulguero" className="uao-logo" />
        <h1 className="title">Ingresa tus Datos</h1>
        <p className="subtitle">Bienvenido al pulguero fundamor</p>
        <form onSubmit={handleSubmitLogin} className="form">
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
          <a href="registro.html" className="primary-button_ login-button">Registrarse</a>
        </form>
        <a href="password.html" className="subtitle">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
};

export default Login;