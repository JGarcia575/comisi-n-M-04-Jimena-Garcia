import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function TablePost(props) {
  const { listaPosts } = props;

  const navigate = useNavigate();

  const ver = (id) => {
    navigate('/ver/' + id);
  };

  //Función que edita una publicación
  const editarPost = (id) => {
    //console.log('Vas a editar el post con el id' + id);
    navigate('/editar/' + id);
  };
  //Función que borra una publiación
  const borrarPost = (id) => {
    //console.log('Vas a borrar el post con el id' + id);
    navigate('/borrar/' + id);
  };

  return (
    <Table striped bordered className="mt-2">
      <thead>
        <tr className="text-center">
          <th scope="col">Publicación</th>
          <th scope="col">Autor</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          listaPosts.map((post, key) => {
            //del backend recibimos un array con objetos que tiene claves
            return (
              <tr key={key} className='align-middle'>
                <td style={{backgroundColor: 'rgb(168,220,217)'}}>
                  <div className="centrarElementos" >
                    <p className="fw-bold text-dark">{post.title}</p>
                    <Button variant="dark" size="sm" className="text-white" onClick={() =>ver(post._id)}>Ver más</Button>
                  </div>                
                </td>
                <td style={{backgroundColor: 'rgb(168,220,217)'}}>
                  <div className="text-muted text-center">
                    <p className="">{post.author}</p>
                  </div>
                </td>
                <td style={{backgroundColor: 'rgb(168,220,217)'}}>
                  <div>
                    <Button variant="primary" onClick={() => editarPost(post._id)}>
                      <i className="bi bi-pen"></i>
                    </Button>{' '}                        
                    <Button variant="danger" onClick={() => borrarPost(post._id)}>
                      <i className="bi bi-trash"></i>
                    </Button>{' '}                                        
                  </div>                
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  );
}

export default TablePost;