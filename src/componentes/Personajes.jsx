import Tarjeta from "./Trajetas";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import '../personaje.css'

const Personajes = () => {

    const [ personaje, setPersonaje ] = useState([]); 


    useEffect(() => {
        fetch ('https://rickandmortyapi.com/api/character')
        //Si me responde bien el usuario, me transforma en json la respuesta para que la compu lo entienda
        .then(response => response.json())
        //Despues la respuesta se lo pasamos a setPersonaje para que me guarde la respuesta
        .then(response => setPersonaje(response.results))
        //Si no me responde el servidor, la base de datos, el usuario respondio mal, etc me salta error
        .catch (error => console.log(error))
    }, []);

    const imprimirApi = () => {
        console.log(personaje);
    }

    return(
        <div className="personajes">
        <>
        <h1 className="text-center mb-5 mt-5">
            Personajes con userEfecct
        </h1>

        {/* Imprimimos todos los id del fetch */}
        <Button onClick={imprimirApi}> 
            Imprimir todos los personajes 
        </Button>

        {/* caracter me lee y guarda todos los personajes que esta en fetch */}
        <Tarjeta characters= { personaje } /> 
        </>
        </div>
    )
}

export default Personajes;