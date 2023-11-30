import { useNavigate, useParams } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function AlertaBorrar() {
    const [ disableButton, setDisableButton]  = useState(false);
    const [ error, setError] = useState({});
    const navigate = useNavigate();

    const { id } = useParams()

    //Función que vuelve a la pagina inicial
    const volver = () => {
        navigate("/")
    };
    //Función que borra una publiación
    const eliminarPost= async () => {
        setDisableButton(true);

        const url = 'http://localhost:3000/deletePost'
        
        try {
          const respuesta = await axios.delete(url, { data: { id: id } });
          //si el código de respuesta es 200 redirecciona a la vista principal
          if (respuesta.status === 200) {
            navigate('/');
          } else {
            setError({error: 'Ocurrió un problema al intentar borrar la publicación.'});
          };
        } catch (error) {
            setError({error: 'Ocurrió un problema al intentar borrar la publicación.'});
        }; 
        setDisableButton(false);
    };

    return (
        <Alert variant="warning">
            <Alert.Heading className='text-center'>¡ATENCIÓN!</Alert.Heading>
                <p>¿Estás seguro de querer eliminar está publicación?</p>
                <hr />
                <Button variant="danger" disabled={disableButton} onClick={eliminarPost}>Si</Button>{' '}
                <Button variant="dark" onClick={volver} disabled={disableButton}>Volver</Button>{' '}
              
        </Alert>
    );
};
export { AlertaBorrar };