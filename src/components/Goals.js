import React from 'react';
import GoalsEntry from './GoalsEntry';
import goalText from './goaltext';

const createGoals =(goals)=>{
  return <GoalsEntry 
  key={goals.goalTitle}
  goalTitle={goals.goalTitle}
  goalDescription={goals.goalDescription}
  />
}

const Goals = () => {
  return <div className="goalheader">
    <h2>At lagos School of Programming, </h2>
    <p>We:</p>
 <div
   className='goals-play'>
    {goalText.map(createGoals)}
  </div>
  </div>;
};

export default Goals;
