import React from 'react';
import { Container, Navbar, Nav  } from 'react-bootstrap';


const NavbarF = () => {
  return (<div className='first-navbar'> 
  <Navbar bg="light" variant="light" >
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="mailto:info@lasop.net">info@lasop.net |</Nav.Link>
      <Nav.Link href="tel:+234 702 571 3326">+234 702 571 3326 |</Nav.Link>
      <Nav.Link href="https://wa.me/2348074024260" target="_blank">+234 807 402 4260</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>

  )};

export default NavbarF;
