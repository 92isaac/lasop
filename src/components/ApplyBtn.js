import React from 'react';
import { NavLink } from 'react-router-dom';


const ApplyBtn = () => {
  return <div className="apply-btn">
  <button><NavLink to="/Apply"> Apply now </NavLink></button>
  </div>;
};

export default ApplyBtn;
