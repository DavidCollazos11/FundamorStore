import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);
  const handleClickSignOut = async () => {
    try {
        await signOutUser();
    } catch (error) {
        console.log(error.code);
    }
}

  return (
    <>
            {user ? (
                <>
                    <NavLink to='/'>| Home |</NavLink>
                    <button onClick={handleClickSignOut}>Logout</button>
                </>

            ) : (
                <>
                    <NavLink to='/routes/login'>| login |</NavLink>
                    <NavLink to='/components/register'>| Register |</NavLink>

                </>
            )
            }






        </>
/*
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
    */
  );
};

export default Navbar;