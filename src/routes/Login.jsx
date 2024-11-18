import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();


  const validateForm = () => {
    if (!email || !password) {
      setError("Por favor, llena todos los campos.");
      return false;
    }
    return true;
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; 

    try {
      setLoading(true); 
      await loginUser(email, password);
      console.log("Usuario logueado --> 🤞👌");
   
      navigate("/dashboard");
    } catch (error) {
      setError("Error al iniciar sesión. Revisa tus credenciales.");
      console.log(error.code); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="login" style={{ backgroundColor: "#F2F2F2" }}>
      <div className="container">
        <img src="https://fundamor.org/wp-content/uploads/2024/04/2024-05-09_14-38-49.png" alt="pulguero" className="uao-logo" />
        <h1 className="title">Ingresa tus Datos</h1>
        <p className="subtitle">Bienvenido al Pulguero Fundamor</p>
        
        {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}

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
          
          <button type="submit" className="primary-button login-button" disabled={loading}>
            {loading ? "Cargando..." : "Enviar"}
          </button>

          <p className="subtitle">¿Aún no tienes una cuenta?</p>
          <a href="/register" className="primary-button_ login-button">Registrarse</a>
        </form>
      </div>
    </div>
  );
};

export default Login;