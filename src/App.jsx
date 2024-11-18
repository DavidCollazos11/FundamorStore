import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Login from "./routes/Login";
import Home from "./routes/Home";
import About from "./routes/About";
import Register from "./routes/Register";
import RequireAuth from "./components/RequireAuth";
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
      <Route path="/" element={<RequireAuth />}>
      <Route index element={<Home />} />
      </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;