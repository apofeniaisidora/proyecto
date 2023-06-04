import { NavLink } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { FavoritosContext } from "../context/FavoritosContext";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);
  const {favoritos} = useContext(FavoritosContext)

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <div className="menu">
          {user ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/favoritos"><section>Guardados {favoritos.length}</section></NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={logout} className="boton">Cerrar sesión</button>
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
