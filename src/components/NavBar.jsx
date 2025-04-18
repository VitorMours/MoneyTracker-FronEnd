import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="xl" className="bg-body-secondary">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home">Money Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" active>Home</Nav.Link> {/* A propriedade active já é suficiente */}
          </Nav>
        </div>
        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#signin">Sign in</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
