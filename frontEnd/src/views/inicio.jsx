import { useState, useEffect } from 'react';
import Card  from 'react-bootstrap/Card';

import TablePost from '../components/tablePost';


function Inicio() {
    const [ listaPosts, setListaPosts ] = useState([]);

    const cargarPosts = async () => {
        const url = 'http://localhost:3000/posts';

        let respuesta = await fetch(url);

        if (respuesta.status === 200) {

            respuesta = await respuesta.json();

            setListaPosts(respuesta);
        };
    };

    useEffect( ()=> {
        cargarPosts();
    }, [])

    return (
        <>            
            <Card.Body style={{ backgroundColor: '#07575b'}}>
                {/*lista de posts es un prop que luego lo va a recibir el componente tablePost */}
                <TablePost listaPosts={ listaPosts }/>
           </Card.Body>
           
        </>
    )
};

export { Inicio }