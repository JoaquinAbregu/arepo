import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'


function Tarjeta({ characters }) {
    const imprimirArgumento = () => {
        //imprimimos cada nombre de los personajes del fetch con el map, que es un ciclo for en react 
        //c de caracter
        //Me muestra los indices (desde 0 hasta el 19 en este caso)
        console.log('Numero de indice');
        characters.map((c, index) => {
            console.log(index, c.name);
        })

        console.log('Numero de ID');
        //Me muestra el id (desde el 1 hata el 20 en este caso)
        characters.map((c) => {
            console.log(c.id , c.name);
        })

    }
    return (
        <>
{        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://rickandmortyapi.com/api/character/avatar/7.jpeg" />
            <Card.Body>
                <Card.Title>Señor Bolainas</Card.Title>
                <Card.Text>
                    Franchesco Virgoliniiiiiii Fiuuuuuuuu
                </Card.Text>
                <Button variant="primary">El señor bolainas</Button>
            </Card.Body>
        </Card>}


        {/* Esta funcion me permite que por cada vuelta del ciclo for crea una tarjeta con los datos del haracters */}
        <div className='d-flex flex-wrap'>
        {characters.map((c) => (
            <Card style={{ width: '18rem' }} key={c.id} className='m-2'>
            <Card.Img variant="top" src= { c.image } />
            <Card.Body>
                <Card.Title>{ c.name }</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Magnam distinctio 
                    laudantium rerum maxime et. Inventore 
                    quas quis, deleniti veritatis tempora 
                    cumque porro delectus, nesciunt placeat 
                    quia quo nemo ab! Consequuntur.
                </Card.Text>
                <Button variant="primary">{ c.status }</Button>
            </Card.Body>
        </Card>
        ))}
        </div>
        

        <Button onClick={ imprimirArgumento }> 
            Imprimir todos los personajes de caracter
        </Button>
        </>
    );
}


//Hacemos que las tarjetas sean requeridas
Tarjeta.propType = {
    characters: PropTypes.array.isRequired
}

export default Tarjeta;