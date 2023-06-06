import React, { useContext, useState } from "react";
import Header from "../components/Header";
import "../index.css";
import { ServiceContext } from "../context/ServiceContext";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  const { servicios } = useContext(ServiceContext);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header />
      <br></br>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="buscador"
      />
      <div className="contenedorcard">
        {servicios
          .filter((servicio) =>
            servicio.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((servicio) => (
            <ServiceCard key={servicio.id} servicio={servicio}/>
          ))}
      </div>
    </div>
  );
}
