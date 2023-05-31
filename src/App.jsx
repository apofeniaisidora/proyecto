import "./App.css";
import Navbar from "./components/Navbar";
import Error from "./views/Error";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Dashboard from "./views/Dashboard";
import Update from "./views/Update";

import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

const App = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route path="/registro" element={<Registro />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/update/:id"
            element={user ? <Update /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
