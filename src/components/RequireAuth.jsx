import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
    const { user } = useContext(UserContext);

    // Si no hay usuario autenticado, redirige a login
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Si el usuario está autenticado, renderiza el contenido protegido
    return <Outlet />;
};

export default RequireAuth;