import React from 'react';
import Goals from "../Goals";
import Slider from "../Slider";
import Duration from "../Duration"
import WhatWeDo from '../WhatWeDo';
import Courses from '../Courses';
import Testimonial from '../Testimonial';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

const Home = () => {
  return <> 
  <Slider />
  <Goals/>
  <Duration/>
  <Testimonial/>
  <WhatWeDo/>
  <Courses/>
  <Newsletter/>
  <Footer/>
    </>;
};

export default Home;
