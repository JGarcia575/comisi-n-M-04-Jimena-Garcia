import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';


function FormularioIngresar() {
    //Hook de react para manejar estados
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const cambiarEmail = (e) => {
      //Toma cada input del correo
      const emailValue = e.target.value;
      //Se cambia el valor del correo
      setEmail(emailValue);
    };

    const cambiarPassword = (e) => {
      //Lo mismo que para el correo
      setPassword(e.target.value);      
    }

    const volver = () => {
        navigate('/');
    }

  //Funcion para iniciar sesion
    const iniciarSesion = () => {
      
    };

  //Hook de react que se ejecuta cuando el componete se renderiza
  //Para hacer llamados a una api, la función iniciarSesion 
  useEffect(() => {
    iniciarSesion();
  }, []);
      
  return (
    <>             
        <Form>
          <Form.Group className="mb-3" controlId="formPlaintextEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@example.com" onInput={cambiarEmail}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" rows={3} placeholder="contraseña" onInput={cambiarPassword}/>
          </Form.Group>
          <Button variant="success" onClick={iniciarSesion}>Enviar</Button>{' '}
          <Button variant="dark" onClick={volver}>Salir</Button>          
        </Form>
      
    </>
  );
};

export default FormularioIngresar;

