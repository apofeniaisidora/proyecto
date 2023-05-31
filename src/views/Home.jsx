import React, { useContext } from "react";
import Header from "../components/Header";
import "../index.css";
import { ServiceContext } from "../context/ServiceContext";

export default function Home() {
  const { servicios } = useContext(ServiceContext);

  return (
    <div>
      <Header />
      <h1>Galería</h1>
      <div className="grupocard">
        {servicios.map((servicio) => (
          <article key={servicio.id} className="card">
            <img src={servicio.img} alt="" className="imagencard" />
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
            <h4>{servicio.price}</h4>
            <button>Contactar</button>
          </article>
        ))}
      </div>
    </div>
  );
}
