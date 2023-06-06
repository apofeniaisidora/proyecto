import React, { useContext } from "react";
import "../index.css";
import { FavoritosContext } from "../context/FavoritosContext";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ servicio }) => {
  const { addFavoritos, favoritos } = useContext(FavoritosContext);

  return (
    <article className="card">
      <img src={servicio.img} alt="" className="imagencard" />
      <h2>{servicio.title}</h2>
      <p>{servicio.description}</p>
      <h3>{servicio.price}</h3>
      <br></br>
      <button className="green boton"><NavLink to="/mensaje">Contactar</NavLink></button>
      <br></br>
      <button className="green boton botonguardar" onClick={() => addFavoritos(servicio)}
      disabled= {
        favoritos.some(item => item.id === servicio.id)
      }>
        Guardar
      </button>
    </article>
  );
};

export default ServiceCard;
