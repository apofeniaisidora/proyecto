import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const FavoritosContext = createContext();
const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const addFavoritos = (servicio) => {
    setFavoritos([...favoritos, servicio]);
    Swal.fire('Servicio guardado!')
  };


  const deleteFavoritos = (id) => {
    const newFavoritos = favoritos.filter((item) => item.id !== id);
    setFavoritos (newFavoritos);
    Swal.fire('Servicio eliminado')
  };


  
  return (
    <FavoritosContext.Provider value={{ favoritos, addFavoritos, deleteFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
