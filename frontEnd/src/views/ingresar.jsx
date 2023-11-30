import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import FormularioIngresar from  "./../components/formIngresar"

function Ingresar() {
    return (
        <Container>
                <Card className="my-2" style={{ backgroundColor: '#07575b'}}>
                    <Card.Header className="text-center text-white" >
                        Ingresar
                    </Card.Header>
                    <Card.Body  style={{backgroundColor: 'rgb(168,220,217)'}}>
                        <FormularioIngresar />
                    </Card.Body>
                    <Card.Footer className="text-center text-white">
                        <p>
                            ¿No tienes cuenta? Ingresa en este <Link to='/registrarse'>link</Link> y ¡crea una!
                        </p>
                    </Card.Footer>
                </Card>
        </Container>
    )
};

export { Ingresar };

