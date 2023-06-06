import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const Favoritos = () => {
  const { favoritos, deleteFavoritos } = useContext(FavoritosContext);

  return (
    <div className="cuerpo">
      <h1>Guardados</h1>
      {favoritos.map((item) => (
        <article key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.user}</p>
          <button onClick={()=> deleteFavoritos(item.id)} className="boton green">Eliminar</button>
        </article>
      ))}
      {favoritos.length === 0 && <h2>No existen favoritos</h2>}
    </div>
  );
};

export default Favoritos;
