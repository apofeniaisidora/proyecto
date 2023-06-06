import Swal from 'sweetalert2'
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = login(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      return navigate("/dashboard");
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Datos incorrectos!',
    })
  };

  return (
    <div className='cuerpo'>
      <h1>Inicia sesión</h1>
      <form className="formulario" onSubmit={handleSubmit}>

          Email
          <input
            type="text"
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
          Ingresar
        </button>
      </form>
    </div>
  );
}
