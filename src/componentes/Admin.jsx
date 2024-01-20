import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const Admin = () => {

    const [usuario, setUsuario] = useState('')

    const navigate = useNavigate();

    useEffect (() => {
        //Verificamos si existe una session en la aplicacion 
        if(window.sessionStorage.getItem('usuario')){
            //Lo cargamos en el usuario
            setUsuario(usuario);
        }else{
            alert('Usuario NO se Logio')
            navigate('*')
        }
    },[]);

    return (
        <>
            <h1 className="text-center mt-5 mb-05">
                {/* Le cargamos el nombre de usuario */}
                Bienvenido a Administrador { usuario }
            </h1>

            <div className="text-center mt-5 mb-05">
                <img src="https://rincondeladministrador.com/wp-content/uploads/2018/04/manager.jpg"
                    alt="Error de login" />
            </div>
        </>
    )
}

export default Admin; 