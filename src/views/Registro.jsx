import "../index.css"

export default function Registro() {
    return (
        <div>
        <h1>Regístrate</h1>
        <form className="formulario">
            <label>Nombre
            <input type="text"/></label>
            <label>Email
            <input type="text"/></label>
            <label>Contraseña
            <input type="text"/></label>
            <label>Repita su contraseña
            <input type="text"/></label>
            <button type="submit" className="botonformulario">Registrar</button>
        </form>
        </div>
    )
}