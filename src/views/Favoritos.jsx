import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const Favoritos = () => {
  const { favoritos, deleteFavoritos } = useContext(FavoritosContext);

  return (
    <div>
      <h1>Favoritos</h1>
      {favoritos.map((item) => (
        <article key={item.id}>
          <p>{item.title}</p>
          <button onClick={()=> deleteFavoritos(item.id)} className="boton green">Eliminar</button>
        </article>
      ))}
      {favoritos.length === 0 && <p>No existen favoritos</p>}
    </div>
  );
};

export default Favoritos;
