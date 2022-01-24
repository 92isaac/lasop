import React from 'react';
import Goals from "../Goals";
import Slider from "../Slider";
import Duration from "../Duration"
import Testimonial from "../Testimonial";
import WhatWeDo from '../WhatWeDo';

const Home = () => {
  return <>
  <Slider />
  <Goals/>
  <Duration/>
  <Testimonial/>
  <WhatWeDo/>
  </>;
};

export default Home;
