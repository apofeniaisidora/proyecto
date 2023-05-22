import { Link } from "react-router-dom"
import "../index.css"

export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
            <Link to="/">Home</Link>
                <div className="menu">
                    <Link to="/registro">Regístrate</Link>
                    <Link to="/login">Iniciar sesión</Link>
                </div>
            </nav>
        </div>
    )
}