import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navegacion() {
  return (
    <Navbar expand="sm" bg="dark" data-bs-theme="dark">      
        <Navbar.Brand href="#">
          <span  className="mb-0 titleFont">FORO EPICA</span>          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/crear">Crear post</Nav.Link>
          </Nav>
          <Nav className="mb-2 mb-lg-0">
            <Nav.Link href="/ingresar" >Login</Nav.Link>
            <Nav.Link href="/registrarse" >Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>     
    </Navbar>
  );
}

export { Navegacion };