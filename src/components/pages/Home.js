import React from 'react';
import Goals from "../Goals";
import Slider from "../Slider";
import Duration from "../Duration"
import WhatWeDo from '../WhatWeDo';
import Courses from '../Courses';
import Testimonial from '../Testimonial';
import Payment from './Payment';

const Home = () => {
  return <> 
  <Slider />
  <Goals/>
  <Duration/>
  <Testimonial/>
  <WhatWeDo/>
  <Courses/>
  {/* <Payment/> */}
    </>;
};

export default Home;
