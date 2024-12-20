import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
    const { user } = useContext(UserContext);


    if (!user) {
        return <Navigate to="/login" />;
    }

   
    return <Outlet />;
};

export default RequireAuth;