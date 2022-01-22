import React from 'react';



const GoalsEntry = (props) => {

  return ( 
    <div className='goals-display'>
  <div className="goals-container">
     <div className="content">
    <h1 className="goal-title">{props.goalTitle}</h1>
    <h3 className="goal-description">{props.goalDescription}</h3>
    </div>
      </div>
      </div>
)};

export default GoalsEntry;

