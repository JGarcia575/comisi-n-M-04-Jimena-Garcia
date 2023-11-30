import { useState, useEffect } from "react";
import { verPostPorId } from "../utils/llamadasBackEnd";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container  from "react-bootstrap/Container";


function Ver() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const verPost = async () => {
        const respuesta = await verPostPorId(id);
        // es lo mismo que esto respuesta !== false
        if (respuesta) {
            setTitle(respuesta.title);
            setDescription(respuesta.description);
            setAuthor(respuesta.author);
        } else {
            console.log('No existe la publicación con ese id');

        };
    };

    useEffect(() => {
        verPost();
    }, [])

    return (
        <Container fluid className="p-4" style={{backgroundColor: '#07575b'}}>
            <Card style={{backgroundColor: 'rgb(168,220,217)'}}>
                <Card.Header >
                    {author} 
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {title} 
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Responder</Button>{' '}
                </Card.Footer>
            </Card>
            <br />

            <Card>
                <Card.Header>
                    <Card.Title>
                        Comentarios
                    </Card.Title>
                </Card.Header>
                <Card.Body style={{backgroundColor: 'rgb(168,220,217)'}}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Usuario</Card.Title>
                            <Card.Text>Comentario</Card.Text>
                            <Button variant="primary">Editar</Button>{' '}
                            <Button variant="danger">Eliminar</Button>
                        </Card.Body>
                    </Card>
                    <br />
                </Card.Body>

            </Card>
            <br />

            <Card style={{backgroundColor: 'rgb(168,220,217)'}}>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comentario</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="¿Qué te parece esta publicación?" />
                        </Form.Group>
                        <Button variant="primary">Comentar</Button>{' '}
                        <Button variant="danger">Salir</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
};

export { Ver };