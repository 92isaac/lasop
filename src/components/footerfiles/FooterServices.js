import React from 'react';
import { Nav } from 'react-bootstrap';


const FooterServices = () => {
  return <div>
  <div className="footerservice">
    <h4>Services</h4>
    <ul>
     <Nav.Link href="/"><i className="fas fa-greater-than fa-xs"/>Frontend Development</Nav.Link>
      <Nav.Link href="/"><i className="fas fa-greater-than fa-xs"/>Backend Development</Nav.Link>
      <Nav.Link href="/"><i className="fas fa-greater-than fa-xs"/>Fullstack Development</Nav.Link>
      <Nav.Link href="/"><i className="fas fa-greater-than fa-xs"/>UI/UX Design</Nav.Link>
      <Nav.Link href="/"><i className="fas fa-greater-than fa-xs"/>App Development</Nav.Link>
    </ul>  
  </div>

  </div>
};

export default FooterServices;
