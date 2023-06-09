import "../index.css"
import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { ServiceContext } from "../context/ServiceContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { createService, servicios, deleteService } = useContext(ServiceContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setImg("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newService = {
      title,
      user: user.email,
      description,
      price,
      img,
      id: Date.now(),
    };
    createService(newService);
    clearForm();
  };



  return (
    <div>
      <h1>Bienvenido {user.name} sube o revisa tus publicaciones!</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        Título
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Descripción
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        Precio
        <input
          type="text"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        URL de imagen
        <input
          type=""
          placeholder="URL de imagen"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit" className="boton green">Agregrar</button>
        <br></br>
      </form>

      <div className="contenedorcard">
        {servicios
          .filter((servicio) => servicio.user === user.email)
          .map((servicio) => (
            <article key={servicio.id} className="card">
              <h2>{servicio.title}</h2>
              <br></br>
              <img src={servicio.img} alt="" className="imagencard" />
              <p>{servicio.description}</p>
              <h4>{servicio.price}</h4>
              <button onClick={() => deleteService(servicio.id)} className="boton">Eliminar</button>
              <br></br>
              <Link to={`/update/${servicio.id}`}>Editar</Link>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
