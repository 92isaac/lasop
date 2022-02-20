import React from 'react';
import Goals from "../Goals";
import Slider from "../Slider";
import Duration from "../Duration"
import WhatWeDo from '../WhatWeDo';
// import Courses from '../Card';
import Course from './Course';
import TestimonialCarousel from '../TestimonialCarousel';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

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
