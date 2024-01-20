


const Cerrar = () => {


    const cerrarSesion = () => {
        //Eliminamos la sesion
        window.sessionStorage.removeItem('usuario')
    }


    return(
        <button 
        className="btn btn-outline-danger" 
        onClick={cerrarSesion}
        >Cerrar Sesion
        </button>
    )
}

export default Cerrar;