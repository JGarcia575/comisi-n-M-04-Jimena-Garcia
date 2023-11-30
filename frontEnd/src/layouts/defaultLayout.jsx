//Plantilla para reutilizar en las distintas rutas
import Card  from 'react-bootstrap/Card';

import { Navegacion } from "./../components/barraNavegacion";
import { Footer } from "./../components/footer";


function DefaultLayout(props) {
    const children = props.children;
    return (
        <>
            <Navegacion/>
            <div style={ {padding: 20}}>
                <Card style={ {backgroundColor: 'black'}}>
                    {children}
                </Card>
            </div>
            <Footer /> 
        </>
    )
};

export { DefaultLayout };