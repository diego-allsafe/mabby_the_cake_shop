import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mabby - The Cake shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Sobre mi</Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pasteleria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Desayunos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tortas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Navidad 2022
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;