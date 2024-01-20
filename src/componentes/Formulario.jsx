import { Link } from "react-router-dom";
import { useState } from "react";

const Formulario = () => {
    
    const [nombre, setNombres] = useState('');
    const [apellido, setApellido] = useState('');
    const [provincia, setProvincia] = useState('');
    const [datos, setDatos] = useState([])
    /* Este arrow fuction me imprime los nombres que el usuario carga */
    const imprimirDatos = () => {
        console.log(`Los elementos que se cargaron son: ${nombre} ${apellido} ${provincia}`);
        //Mostramos los elementos
        alert(`Los elementos que se han cargado son: ${nombre} ${apellido} ${provincia}`)
        /* Para que me vacie los inputs hago lo siguiente */
        
        //Primera forma para cargar los datos en el localStorage
        //1. Creamos el objeto de tipo persona para guardar en el arreglo de dato
        /* const persona = {
            nombre: nombre,
            apellido: apellido,
            provincia: provincia,
        } */
        
        //2. Cargamos el objeto de tipo persona para guardar en el arreglo de datos
        //setDatos(persona)

        //3. Gardamos el array de datos en el localstorage
        //window.localStorage.setItem('datos', JSON.stringify(datos));


        //Segunda forma de cargar los datis en el localStorage
        //Cargamos el arreglo de objeto con los datos de la persona
        setDatos([...datos, {nombre, apellido, provincia}])
        //Cargamos el arreglo en el localStorage
        window.localStorage.setItem('datos', JSON.stringify(datos))

        limpiarDatos()
    }

    const limpiarDatos = () => {
        setNombres('');
        setApellido('');
        setProvincia('');
    }

    return (
        <>
            <h1 className="text-center mt-5 mb-05">
                Formulario de carga de Usuarios
            </h1>
            <div className="container">
                <form id="formLogin">
                    <div className="mb-3 texr-center">
                        <label className="form-label">Nombre</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        /* id="nombre" */ 
                        /* placeholder="name@example.com"  */
                        value = { nombre }
                        /* El onChange lo que es cuando hay un evento en el input, que tenga valor nombre, me toma todo lo que pasa en ese evento y se la pasa a una funcion, que es setNombre y setNombre setea a una variable que es nombre  */
                        onChange= {(e) => setNombres(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="mb-3 texr-center">
                        <label className="form-label">Apellido</label>
                        <input 
                        type="email" 
                        className="form-control"  
                        /* placeholder="name@example.com" */ 
                        value = { apellido }
                        /* El onChange lo que es cuando hay un evento en el input, que tenga valor nombre, me toma todo lo que pasa en ese evento y se la pasa a una funcion, que es setNombre y setNombre setea a una variable que es nombre  */
                        onChange= {(e) => setApellido(e.target.value)}
                        required 
                        />
                    </div>                    
                    <div className="mb-3 texr-center">
                        <label className="form-label">Provincia</label>
                        <input 
                        type="email" 
                        className="form-control"  
                        /* placeholder="name@example.com"  */
                        value = { provincia }
                        /* El onChange lo que es cuando hay un evento en el input, que tenga valor nombre, me toma todo lo que pasa en ese evento y se la pasa a una funcion, que es setNombre y setNombre setea a una variable que es nombre  */
                        onChange= {(e) => setProvincia(e.target.value)}
                        required 
                        />
                    </div>
                    

                    <div className="mb-3 text-center">
                        <button onClick= { imprimirDatos } type="button" className="btn btn-success w-50">Login</button>
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


export default Formulario;