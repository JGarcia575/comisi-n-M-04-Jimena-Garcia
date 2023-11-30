import { CardBody } from "react-bootstrap";
import { AlertaBorrar } from "../components/alertaBorrar";
import Card  from "react-bootstrap/Card";


function BorrarPost() {
    return (
        <Card.Body>
            <AlertaBorrar />
        </Card.Body>
    )
}

export { BorrarPost };