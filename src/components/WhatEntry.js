import React from 'react';
import { NavLink } from 'react-bootstrap'



const WhatEntry = (props) => {
  return <div className="whatwedo">
      <h1>{props.whatHeader}</h1>
      <p>{props.whatDescription}</p>
      <NavLink to={props.link}>read more</NavLink>
  </div>;
};

export default WhatEntry;
