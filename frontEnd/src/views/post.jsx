import Card from 'react-bootstrap/Card';

import { Post } from './../components/crearPost';
import { Container } from 'react-bootstrap';


function CrearPost() {
    return (
        <>
            <Container style={{backgroundColor: '#07575b'}}>
                <Card.Body className="mt-3 mb-3"style={{backgroundColor: 'rgb(168,220,217)'}}>
                    <Post />
                </Card.Body>
            </Container>
        </>

    )
        
    
};

export { CrearPost };
