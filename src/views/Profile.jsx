import Swal from "sweetalert2";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({
      email: email,
      name: name,
      password: password,
      id: user.id,
    });

    Swal.fire("Datos actualizados");
  };

  return (
    <div className="cuerpo">
      <h1>Profile</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        Nombre
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Email
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Contraseña
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="boton green">
          Actualizar
        </button>
        <br></br>
      </form>
    </div>
  );
};

export default Profile;
