import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'

const NavbarR = () => {
const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img src={Logo} className="nav-logo" alt="logo"/>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
              
                to="/"
                className={({ isActive }) => (isActive ? 'active nav-links' : 'nav-links')}
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active nav-links' : 'nav-links')} onClick={click ? handleClick : null}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              
                to="/Course"
                className={({ isActive }) => (isActive ? 'active nav-links' : 'nav-links')}
                onClick={click ? handleClick : null}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              
                to="/ContactUs"
                className={({ isActive }) => (isActive ? 'active nav-links' : 'nav-links')}
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              
                to="/FAQ"
                className={({ isActive }) => (isActive ? 'active nav-links' : 'nav-links')}
               onClick={click ? handleClick : null}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
};

export default NavbarR;