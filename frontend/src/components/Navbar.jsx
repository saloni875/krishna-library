import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const KrishnaNavbar = () => {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <div>
            <img src="/src/assets/download.jpeg" alt="image" width={55} height={50} />
          <strong style={{fontSize: '1.6rem', color: '#216db9ff' }}>Krishna Library</strong>
        </div>
        
          <div style={{ fontSize: '19px', color: '#2c2b2bff' }}>   “Calm mind.  Focused soul.”</div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ fontSize: '19px' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ fontSize: '19px'  }}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ fontSize: '19px' }}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ fontSize: '19px' }}>Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" style={{ fontSize: '19px' }}>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default KrishnaNavbar;
