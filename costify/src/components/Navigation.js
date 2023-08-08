import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation({ handlePageChange }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Costify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="#main"
              onClick={() => handlePageChange('Main')}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              href="#signup"
              onClick={() => handlePageChange('Signup')}
            >
              Login/Signup
            </Nav.Link>
            <Nav.Link
              href="#link"
              conClick={() => handlePageChange('Expense')}
            >
              Add expense
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;