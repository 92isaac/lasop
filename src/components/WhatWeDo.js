import React from 'react';
import whatwedodic from './whatwedodic'
import WhatEntry from './WhatEntry'



const whatWedoList =(whatwedomap)=>{
  return (<WhatEntry 
    key={whatwedomap.whatHeader}
    whatHeader= {whatwedomap.whatHeader}
    whatDescription= {whatwedomap.whatDescription}
    link={whatwedomap.link}
        />

  )}

const WhatWeDo = () => {

  return <div className="whatwedo-container">
    <div className='whatwedo-bg'>
    {whatwedodic.map(whatWedoList)}
    </div>
    
  </div>;
};

export default WhatWeDo;
