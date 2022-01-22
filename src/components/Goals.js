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
  return <div className='goals-play'>
    {goalText.map(createGoals)}
  </div>;
};

export default Goals;
