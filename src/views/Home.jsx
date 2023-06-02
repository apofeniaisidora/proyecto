import React, { useContext, useState } from "react";
import Header from "../components/Header";
import "../index.css";
import { ServiceContext } from "../context/ServiceContext";

export default function Home() {
  const { servicios } = useContext(ServiceContext);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header />
      <h1>Galería</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="grupocard">
        {servicios
          .filter((servicio) =>
            servicio.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((servicio) => (
            <article key={servicio.id} className="card">
              <img src={servicio.img} alt="" className="imagencard" />
              <h3>{servicio.title}</h3>
              <p>{servicio.description}</p>
              <h4>{servicio.price}</h4>
              <button className="green boton">Contactar</button>
            </article>
          ))}
      </div>
    </div>
  );
}
