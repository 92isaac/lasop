import React from 'react';
import Footer from '../footerfiles/Footer';
import AboutusHero from "../aboutusfiles/AboutusHero"
// import GroupImg from '../../assets/logo.png'
import OurTeam from "../aboutusfiles/OurTeam"



const AboutUs = () => {
  return <div className='about-us'>
    <div className='about-us-header'>
      <h3>About Us</h3>
    </div>
      <AboutusHero/>
      <OurTeam/>
      <Footer/>
  </div>;
};

export default AboutUs;
