import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);
  const handleClickSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message); 
    }
}

  return (
    <>
    <nav>
            {user ? (
                <>
                    <NavLink to='/'> Donaciones Fundamor </NavLink>
                    <button onClick={handleClickSignOut}>Logout</button>
                </>

            ) : (
                <>
                    <NavLink to='/about'>Inicio</NavLink>
                    <NavLink to='/login'> Login </NavLink>
                    <NavLink to='/register'> Register </NavLink>
                </>
            )
            }
    </nav>
        </>
  );
};

export default Navbar;