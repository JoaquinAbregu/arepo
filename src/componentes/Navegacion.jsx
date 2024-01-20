import { Link } from "react-router-dom";
import Cerrar from "./Cerrar";


function Navegador() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary miClase">
                <div className="container-fluid">
                    {/* Lo envia a la pagina principal */}
                    <Link to= "/" class="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to= "/home" class="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/formulario' className="nav-link">Formulario</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/personaje' className="nav-link">Personajes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/login' className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/admin' className="nav-link">Admin</Link>
                            </li> 
                            <li className="nav-item">
                                <Link to= '/usuarios' className="nav-link">Usuarios</Link>
                            </li>
                        </ul>

                        <Cerrar />  
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navegador;