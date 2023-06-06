import Swal from "sweetalert2";
import { UserContext } from "../context/userContext";
import "../index.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const navigate = useNavigate();
  const { register } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      return alert("no coinciden las contraseñas");
    }

    const user = register({
      name,
      email,
      password,
      id: Date.now(),
    });

    if (user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email ya está registrado!",
      });
    }

    navigate("/dashboard");
  };

  return (
    <div className="cuerpo">
      <h1>Regístrate</h1>
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
          Repita su contraseña
          <input
            type="password"
            placeholder="Repetir contraseña"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
        <button type="submit" className="boton green">
          Registrar
        </button>
        <br></br>
      </form>
    </div>
  );
}
