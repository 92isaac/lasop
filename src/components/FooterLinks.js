import React from 'react';
import { Nav } from 'react-bootstrap';


const FooterLinks = () => {
  return <div className="footerlinks">
    <h4>Links</h4>
    <ul>
     <Nav.Link href="/"><i className="fas fa-greater-than fa-xs"/>Home</Nav.Link>
      <Nav.Link href="/About"><i className="fas fa-greater-than fa-xs"/>About</Nav.Link>
      <Nav.Link href="/Course"><i className="fas fa-greater-than fa-xs"/>Courses</Nav.Link>
      <Nav.Link href="/Contact Us"><i className="fas fa-greater-than fa-xs"/>Contact Us</Nav.Link>
      <Nav.Link href="/FAQ"><i className="fas fa-greater-than fa-xs"/>FAQ</Nav.Link>
      <Nav.Link href="/Apply"><i className="fas fa-greater-than fa-xs"/>Apply</Nav.Link>
    </ul>  
    </div>;
};

export default FooterLinks;
