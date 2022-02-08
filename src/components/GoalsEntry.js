import React from 'react';



const GoalsEntry = (props) => {

  return ( 
 <div className='col-lg-3 col-md-6 goals-display'>
    <div className="goals-container">
       <div className="content">
       <h1 className="goal-title">{props.goalTitle}</h1>
       <h3 className="goal-description">{props.goalDescription}</h3>
       </div>
    </div>
    </div>
)};

export default GoalsEntry;

