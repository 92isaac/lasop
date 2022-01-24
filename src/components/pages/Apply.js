import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'



const Apply = () => {

  const [usersData, setUsersData]=useState({fName:"", oName:"", lName:"", email:"", address:"", tell:"", course:"", modeOfStudy:'' })

	const navigate = useNavigate()

   const handleSubmit=(e)=>{
	 e.preventDefault();
   alert('Application succsess; Press "OK" to return to the homr page')
    navigate("/", {replace: true});
 }

  return (
    <div className="application-container">
  <form onSubmit={handleSubmit} className="application-form">
    <input type="text" name="fName" onChange={e=> setUsersData({fName:e.target.value})}  value={usersData.fName} placeholder="FirstName"/>
    <input type="text" name="oName" onChange={e=> setUsersData({oName:e.target.value})}  value={usersData.oName} placeholder="Other Name"/>
    <input type="text" name="lName" onChange={e=> setUsersData({lName:e.target.value})}  value={usersData.lName} placeholder="LastName"/>
    <input type="Email" name="email" onChange={e=> setUsersData({email:e.target.value})}  value={usersData.email} placeholder="Email"/>
    <input type="address" name="address" onChange={e=> setUsersData({address:e.target.value})}  value={usersData.address} placeholder="address"/>
    <input type="tel" name="phoneNumber" onChange={e=> setUsersData({tell:e.target.value})}  value={usersData.tell} placeholder="Phone-number" />

  <label for="Course">Course:</label>
    <select name="Course" id="Course-select" placeholder="Course">
    <option value={usersData.course} onChange={e=> setUsersData({course:e.target.value})}>Frontend Development</option>
    <option value={usersData.course} onChange={e=> setUsersData({course:e.target.value})}>Backend Development</option>
    <option value={usersData.course} onChange={e=> setUsersData({course:e.target.value})}>Fullstack Developement</option>
    <option value={usersData.course} onChange={e=> setUsersData({course:e.target.value})}>UI/UX Course</option>
    <option value={usersData.course} onChange={e=> setUsersData({course:e.target.value})}>Android App Development(IOS and HIOS)</option>
    </select>

  <label for="Course">Mode of Study:</label>
  <select name="pets" id="pet-select" placeholder="Mode of Study">
    <option value={usersData.modeOfStudy}>Weekdays</option>
    <option value={usersData.modeOfStudy}>Weekends</option>
  </select>

    {/* <select>
    <optgroup label="Level One">
      <option> A.1 </option>
        <optgroup label="&nbsp;&nbsp;&nbsp;&nbsp;Level Two">
       <option>&nbsp;&nbsp;&nbsp;&nbsp; A.B.1 </option>
        </optgroup>
      <option> A.2 </option>
      </optgroup>
</select> */}
    {/* <input type="text" name onChange value placeholder/>
    <input type="text" name onChange value placeholder/>
    <input type="text" name onChange value placeholder/> */}
    <br/>
    	<button className="application-button" type='submit'>Submit</button>
  </form>
  </div>
  )
}

export default Apply;




