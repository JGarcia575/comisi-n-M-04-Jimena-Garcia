import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { verPostPorId } from './../utils/llamadasBackEnd.js';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function FormEditar(props) {
	const { id } = props;
	const [ title, setTitle ]  = useState('');
	const [ description, setDescription]  = useState('');
	const [ image, setImage]  = useState('');
	//const [ author, setAuthor]  = useState('');
	const [ disabledButton, setDisabledButton]  = useState(false);
	const [ errors, setErrors] = useState({});

	const navigate = useNavigate();
	//Función para volver a la vista de inicio
	const volver = () => {
		navigate('/');
	}; 

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

	const validacionDatos = async () => {
		let errors = {};

		// Validación para que titulo no sea una cadena vacía
		// esto significa que si el tamaño de title = 0, es falso
		if (!title.length) {
			errors.title = 'El título no puede estar vacío';
		//setError({title: 'el título no puede estar vacío'});
		};

		// Validación para que la descripción no esté vacía, lo mismo que la validación de arriba
		if (!description.length) {
			errors.description = 'La descripción no puede estar vacía';
		};
		// Cambiarle el estado al objeto errors
		setErrors(errors);
	
		// Validar si el objeto errors está vacío
		if (Object.entries(errors).length === 0) {      
			await editarPost()

			setDisabledButton(true);
		};
	};

	const editarPost = async() => {    
    	const url = 'http://localhost:3000/updatePost';

		try {
		const respuesta = await axios.put(url, {
			id: id,
			title: title,
			description: description,
			//author: author
			imagenURL: image
		});
		
		//si el código de respuesta es 201 redirecciona a la vista principal
		if (respuesta.status === 200) {
			navigate('/');
		} else {
			setErrors({error: 'Ocurrió un problema al intentar crear la publicación'});
		};
		} catch (error) {
			setErrors({error: 'Ocurrió un problema al intentar crear la publicación'});
		}; 

		setDisabledButton(false);
	};

	const verPost = async() => {
		const respuesta = await verPostPorId(id);
		// es lo mismo que esto respuesta !== false
		if (respuesta) {	
			setTitle(respuesta.title);
			setDescription(respuesta.description);
			//setAuthor(respuesta.author);
			setImage(respuesta.image);

		} else {
			setErrors({error: 'Ocurrió un problema al intentar modificar la publicación3.'});
			setDisabledButton(true);
		};

		setDisabledButton(false);

	};

	useEffect(() => {
		verPost();
	},[]);

  return (
    <>
    	<Form>
    		<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    			<Form.Label>Título del tema</Form.Label>
    			<Form.Control type="text" rows={3} defaultValue={title} onInput={cambiarTitulo}/>
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
          		<Form.Control as="textarea" rows={3} defaultValue={description} onInput={cambiarTexto}/>
          	{//mostrar mensaje de error
            	errors.description && ( 
              	<span style={{color: 'red'}} className="text-center">
                	{errors.description}
              	</span>
            	)
          	}
        	</Form.Group>
			{/*
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onInput={cambiarAutor}>
				<Form.Label>Autor</Form.Label>
				<Form.Control type="text" defaultValue={author}/>
			</Form.Group>
			*/}
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onInput={cambiarImagen}>
				<Form.Label>URL imagen</Form.Label>
				<Form.Control type="text" rows={3} defaultValue={imagenURL}/>
			</Form.Group>		
			{
				errors.error && (
					<Alert  variant="danger" className='text-center text-primary'> 
						{errors.error}
					</Alert>
				)
			}
        	<Button variant="danger" onClick={validacionDatos} disabled={disabledButton}>Editar</Button>{' '}
        	<Button variant="dark" onClick={volver} disabled={disabledButton}>Volver</Button>
      </Form>
    </>
  );
};

export { FormEditar };