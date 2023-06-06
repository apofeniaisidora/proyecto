import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Mensaje = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = () => {
    if (nombre && email && mensaje) {
      Swal.fire("Mensaje enviado").then(() => {
        navigate("/"); 
      });
    } else {
      Swal.fire("Completa todos los campos");
    }
  };

  return (
    <div>
        <h1>Contacta a tu terapeuta</h1>
      <form className="formulario">
        Nombre
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        Email
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Mensaje
        <textarea
          placeholder="Escribe tu mensaje"
          className="mensajes"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        <button className="boton green" type="submit" onClick={handleSubmit}>
          Enviar
        </button>
        <br />
      </form>
    </div>
  );
};

export default Mensaje;
