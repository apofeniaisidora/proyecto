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
    if (!name) {
      return alert("Por favor, ingresa tu nombre");
    }

    if (!email) {
      return alert("Por favor, ingresa tu correo electrónico");
    }

    if (!password) {
      return alert("Por favor, ingresa tu contraseña");
    }
    if (!repassword) {
      return alert("Por favor, repite tu contraseña");
    }

    if (password !== repassword) {
      return alert("no coinciden las contraseñas");
    }

    register({
      id: Date.now(), 
      name,
      email,
      password,
    });

    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Regístrate</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Repita su contraseña
          <input
            type="password"
            placeholder="Repetir contraseña"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
        </label>
        <button type="submit" className="botonformulario">
          Registrar
        </button>
      </form>
    </div>
  );
}
