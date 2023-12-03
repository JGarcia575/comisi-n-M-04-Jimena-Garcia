import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';

function Post() {
  const [ title, setTitle ]  = useState('');
  const [ description, setDescription]  = useState('');
  //const [ author, setAuthor]  = useState('');
  const [ image, setImage]  = useState('');
  const [ disableButton, setDisableButton]  = useState(false);
  const [ errors, setErrors] = useState({});

  const navigate = useNavigate();
  
  const volver = () => {
    navigate('/');
  }

  const cambiarTitulo = (e) => {
    setTitle(e.target.value);
  };
  
  const cambiarTexto = (e) => {
    setDescription(e.target.value);
  };
  /*
  const cambiarAutor = (e) => {
    setAuthor(e.target.value);
  };
  */
  const cambiarImagen = (e) => {
    setImage(e.target.value);
  };

  const verificarDatos = async () => {
    let errors = {};

    // Validación para que titulo no sea una cadena vacía
    // esto significa que si el tamaño de title = 0, es falso
    if (!title.length) {
      errors.title = 'El título no puede estar vacío';
    };

    // Validación para que la descripción no esté vacía, lo mismo que la validación de arriba
    if (!description.length) {
      errors.description = 'La descripción no puede estar vacía';
    };

    // Cambiarle el estado al objeto errors
    setErrors(errors);
      
    // Validar si el objeto errors está vacío
    if (Object.entries(errors).length === 0) {      
        setDisableButton(true);
        await enviarPost();

        //console.log(title);
        //console.log(description);        
    };
  };

  const enviarPost = async() => {
    const url = 'http://localhost:3000/newPost';

    const post = {
      title: title,
      description: description,
      //author: author,
      imagenURL: image
    };
    try {
      const respuesta = await axios.post(url, post);
      //si el código de respuesta es 201 redirecciona a la vista principal
      if (respuesta.status === 201) {
        navigate('/');
      } else {
        setErrors({error: 'Ocurrió un problema al intentar crear la publicación.'});
    };
    } catch (error) {
        setErrors({error: 'Ocurrió un problema al intentar crear la publicación.'});
    }; 
    setDisableButton(false);
  };

  return (
    <>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Título del tema</Form.Label>
          <Form.Control type="text" rows={3} placeholder="¿Cual es el título de tu tema?" onInput={cambiarTitulo}/>
          {//mostrar el mensaje de error
            errors.title && ( 
              <span style={{color: 'red'}}>
                {errors.title}
              </span>
            )
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción del tema</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="¿Cual es tu idea?" onInput={cambiarTexto} required/>
          {//mostrar mensaje de error
            errors.description && ( 
              <span style={{color: 'red'}} className="text-center">
                {errors.description}
              </span>
            )
          }
        </Form.Group>
        { /*
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Autor</Form.Label>
          <Form.Control type="text" placeholder="¿cuál es tu nombre?" onInput={cambiarAutor} required/>
        </Form.Group>
        
        */
        }
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>URL publicación</Form.Label>
          <Form.Control type="text" placeholder="imagen de la publicación" onInput={cambiarImagen}/>
        </Form.Group>
        {
          errors.error && (
            <Alert  variant="danger" className='text-center text-primary'> 
              {errors.error}
            </Alert>
          )
        }
        <Button variant="success" onClick={verificarDatos} disabled = {disableButton}>Enviar</Button>{' '}
        <Button variant="dark" onClick={volver}>Volver</Button>
      </Form>
    </>
  );
}

export { Post };