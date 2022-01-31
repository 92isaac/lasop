import React, {useState} from 'react';
import View1 from '../assets/1.jpg'
import View2 from '../assets/2.jpg'
import View3 from '../assets/3.jpg'
import View4 from '../assets/4.jpg'

const meeee = [View1,View2,View3,View4,]


const Trial = () => {

  const [left, setLeft]=useState(0)


  return <div className='trye'>
   <img src={meeee[left%meeee.length]} alt="bat"/>
    <button onClick={(e)=> setLeft(left +1)}>left</button>
    <button onClick={(e)=> setLeft(left -1)}>right</button>

  </div>;
};

export default Trial;
