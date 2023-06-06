import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ServiceContext } from "../context/ServiceContext";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Update = () => {
  const { id } = useParams();
  const { servicios, updateService } = useContext(ServiceContext);
  const {user} = useContext(UserContext)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const findService = servicios.find((item) => item.id === parseInt(id));
    setTitle(findService.title);
    setDescription(findService.description);
    setPrice(findService.price);
    setImg(findService.img);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newService = {
      title,
      user: user.email,
      description,
      price,
      img,
      id: parseInt(id),
    };
    updateService(newService);
  };

  return (
    <div className="cuerpo">
      <h1>Actualizar Servicio</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        Título
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Descripción
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        Precio
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        URL de imagen
        <input
          type=""
          placeholder="img url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit" className="boton green">Actualizar</button>
      </form>
    </div>
  );
};

export default Update;
