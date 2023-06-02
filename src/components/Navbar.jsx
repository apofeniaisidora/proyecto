import { NavLink } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <div className="menu">
          {user ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/favoritos"><img src="heart-solid.svg" className="iconocorazon"/>1</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={logout} className="green">Cerrar sesión</button>
            </>
          ) : (
            <>
              <NavLink to="/registro">Regístrate</NavLink>
              <NavLink to="/login">Iniciar sesión</NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
