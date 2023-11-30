import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import { FormEditar } from './../components/formEditar';


function EditarPost() {
    const { id } = useParams();

    return (
        <>
            <Card.Body style={{backgroundColor: 'rgb(168,220,217)'}}>
                <FormEditar id={id} />
            </Card.Body>
        </>
    )    
};

export { EditarPost };