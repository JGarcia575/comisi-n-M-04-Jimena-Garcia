import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormRegistrarse() {
  const navigate = useNavigate();

  const volver = () => {
    navigate('/')
  }

  return (
    <>
      <Form>
			<Form.Group className="mb-3" controlId="formPlaintextUsuario">
				<Form.Label>Nombre de usuario</Form.Label>
				<Form.Control type="text" placeholder="@TimmyTurrner" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formPlaintextEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="email@example.com" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formPlaintextPassword">
				<Form.Label>Contraseña</Form.Label>
				<Form.Control type="password" rows={3} placeholder="contraseña" />
			</Form.Group>
			<Button variant="success">Registrarse</Button>{' '}
			<Button variant="dark" onClick={volver}>Cancelar</Button>
      </Form>
    </>
  )
};

export { FormRegistrarse };