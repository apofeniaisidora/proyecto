
export default function Login() {
    return (
        <div>
        <h1>Inicia sesión</h1>
        <form className="formulario">
            <label>Email
            <input type="text"/></label>
            <label>Contraseña
            <input type="text"/></label>
            <button type="submit" className="botonformulario">Registrar</button>
        </form>
        </div>
    )
}