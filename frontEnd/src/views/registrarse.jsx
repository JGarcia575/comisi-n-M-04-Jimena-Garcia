import Card from 'react-bootstrap/Card';

import { FormRegistrarse } from '../components/formRegistrase';
import { Container } from 'react-bootstrap';


function Registrarse() {
    return (
        <>
        <Container>
            <Card.Body style={{backgroundColor: 'rgb(168,220,217)'}}>
                <FormRegistrarse />
            </Card.Body>
        </Container>
        </>

    )
        
    
};

export { Registrarse };