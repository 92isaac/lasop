import React from 'react';
import WhatWeDo from './WhatWeDo';
import whatwedodic from './whatwedodic'

const whatWedoList =(whatwedomap)=>{
  return (<WhatWeDo 
    // key={whatwedomap.title}
    // whatHeader= {whatwedomap.title}
    // whatDescription= {whatwedomap.description}
        />
        
    // <WhatWeDo/>

  )}

const WhatEntry = () => {
  return <div>
    {whatwedodic.map(whatWedoList)}
  </div>;
};

export default WhatEntry;
