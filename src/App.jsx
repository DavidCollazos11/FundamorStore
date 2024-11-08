import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Login from "./routes/Login";
import Home from "./routes/Home";
import About from "./routes/About";
import Register from "./routes/Register";
import RequireAuth from "./components/RequireAuth";
import PasswordReset from "./routes/PasswordReset";
import { UserContext } from "./context/UserProvider";
import "./App.css"; 

function App() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>Loading 😜😜😜😜😜😜😜😜😜😜</p>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </>
  );
}

export default App;