import React, {useState} from 'react';


const ModeOfStudy = () => {
  const [usersData, setUsersData]=useState({modeOfStudy:'' })
  return <div>
 <label for="Course">Mode of Study:</label>
  <select name="pets" id="pet-select" placeholder="Mode of Study">
    <option value={usersData.modeOfStudy} onChange={e=> setUsersData({modeOfStudy:e.target.value})}>Weekdays</option>
    <option value={usersData.modeOfStudy} onChange={e=> setUsersData({modeOfStudy:e.target.value})}>Weekends</option>
  </select>
  </div>;
};

export default ModeOfStudy;
