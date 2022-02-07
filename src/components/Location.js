import React from 'react';
import { Nav } from 'react-bootstrap'

const Location = () => {
  return <div>
    <h3>LASOP</h3>
    <p>No 114,Iju road, <br/>opp LG showroom, <br/> church bus stop, <br/> Agege, <br/> Lagos State.</p>
     <Nav.Link href="mailto:info@lasop.net">info@lasop.net |</Nav.Link>
      <Nav.Link href="tel:+234 702 571 3326">+234 702 571 3326 |</Nav.Link>
      <Nav.Link href="https://wa.me/2348074024260" target="_blank">+234 807 402 4260</Nav.Link>

  </div>;
};

export default Location;
