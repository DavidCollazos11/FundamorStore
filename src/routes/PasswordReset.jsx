import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { resetPassword } = useContext(UserContext); // Asegúrate de tener esta función en tu UserContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            setMessage('Se ha enviado un enlace de recuperación a tu correo.');
        } catch (error) {
            setMessage('Error al intentar enviar el enlace de recuperación. Verifica el correo.');
        }
    };

    return (
        <div className="container">
            <h1>Recuperar Contraseña</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="primary-button">Enviar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PasswordReset;