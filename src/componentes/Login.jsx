import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();


    /* Este arrow fuction me imprime los nombres que el usuario carga */
    const login = () => {
        if (email == ' ' || password == ' '){
            alert('Porfavor complete con su email y/o password correctamente');
            limpiarDatos()
            return;
        }
        
        if (email == 'pepe@gmail.com' && password == '1234'){
            alert('Bienvenido DIVINO')


            //Guardamos la sesion del usuario
            window.sessionStorage.setItem('usuario', email)

            navigate('/admin')
        }else{
            alert('Password y/o email incorrectos')
            navigate('*')
        }

        limpiarDatos()
    }

    const limpiarDatos = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <h1 className="text-center mt-5 mb-05">
                Formulario de login
            </h1>
            <div className="container">
                <form id="formLogin">
                    <div className="mb-3 texr-center">
                        <label className="form-label">Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        /* id="nombre" */ 
                        /* placeholder="name@example.com"  */
                        value = { email }
                        /* El onChange lo que es cuando hay un evento en el input, que tenga valor nombre, me toma todo lo que pasa en ese evento y se la pasa a una funcion, que es setNombre y setNombre setea a una variable que es nombre  */
                        onChange= {(e) => setEmail(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="mb-3 texr-center">
                        <label className="form-label">Password</label>
                        <input 
                        type="password" 
                        className="form-control"  
                        /* placeholder="name@example.com" */ 
                        value = { password }
                        /* El onChange lo que es cuando hay un evento en el input, que tenga valor nombre, me toma todo lo que pasa en ese evento y se la pasa a una funcion, que es setNombre y setNombre setea a una variable que es nombre  */
                        onChange= {(e) => setPassword(e.target.value)}
                        required 
                        />
                    </div>                    
                    <div className="mb-3 text-center">
                        <button onClick= { login } type="button" className="btn btn-success w-50">Login</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ limpiarDatos } className="btn btn-danger w-75">Reset</button>
                    </div>
                </form>
            </div>


            <Link to= '/'>
                <h2 className="text-center mb-5 mt-5">
                    Pagina principal
                </h2>
            </Link>
        </>
    )
}


export default Login;