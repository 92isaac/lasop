import React, {useState} from 'react';


const ModeOfStudy = () => {
  // const [usersData, setUsersData]=useState({modeOfStudy:'' })
  const [modeOfStudy, setModeOfStudy]=useState("")
  return <div>
 <label for="Course">Mode of Study:</label>
  <select name="pets" 
  id="pet-select" 
  placeholder="Mode of Study"
  value={modeOfStudy} 
  onChange={e=> setModeOfStudy(e.target.value)}>
    <option>Weekdays</option>
    <option>Weekends</option>
  </select>
  </div>;
};

export default ModeOfStudy;
