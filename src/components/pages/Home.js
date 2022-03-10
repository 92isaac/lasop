import React from 'react';
import Goals from "../ourgoalsfiles/Goals";
import Slider from "../sliderfiles/Slider";
import Duration from "../commonfiles/Duration"
import WhatWeDo from '../whatwedofiles/WhatWeDo';
import Course from './Course';
import TestimonialCarousel from '../testimonialfiles/TestimonialCarousel';
import Newsletter from '../commonfiles/Newsletter';
import Footer from '../footerfiles/Footer';

const Home = () => {
  return <> 
  <Slider />
  <Goals/>
  {/* <Courses/> */}
  <Course/>
  <Duration/>
  <TestimonialCarousel/>
  <WhatWeDo/>
  <Newsletter/>
  <Footer/>
    </>;
};

export default Home;
