import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import ChoseCourse from '../ChoseCourse';
import ModeOfStudy from '../ModeOfStudy';


// export const StudyContext = React.createContext()

const Apply = () => {

  const [usersData, setUsersData]=useState({fName:"", oName:"", lName:"", email:"", address:"", tell:"", course:"", modeOfStudy:'' })

	const navigate = useNavigate()

   const handleSubmit=(e)=>{
	 e.preventDefault();
   alert('Application succsess; Press "OK" to return to the home page')
    navigate("/Payment", {replace: true});
     setUsersData(usersData);
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
    <ChoseCourse/>
    <ModeOfStudy/>
    <br/>
    	<button className="application-button" type='submit'>Submit</button>
  </form>
  </div>
  )
}

export default Apply;




