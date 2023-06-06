import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { Link } from "react-router-dom";

const Favoritos = () => {
  const { favoritos, deleteFavoritos } = useContext(FavoritosContext);

  return (
    <div className="cuerpo">
      <h1>Guardados</h1>
      {favoritos.map((item) => (
        <article key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.user}</p>
          <button className="green boton">
            <Link to="/mensaje">Contactar</Link>
          </button>
          <button
            onClick={() => deleteFavoritos(item.id)}
            className="boton botonguardar"
          >
            Eliminar
          </button>
        </article>
      ))}
      {favoritos.length === 0 && <h2>No existen favoritos</h2>}
    </div>
  );
};

export default Favoritos;
