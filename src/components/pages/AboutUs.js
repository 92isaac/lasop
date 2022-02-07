import React from 'react';
import Footer from '../Footer';
import Goals from '../Goals';

const AboutUs = () => {
  return <div className='about-us'>
    <div className='about-us-header'>
      <h3>About Us</h3>
    </div>
    <div>
      <Goals/>
    </div>

      <Footer/>
  </div>;
};

export default AboutUs;
