import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'

// import ChoseCourse from '../ChoseCourse';
// import ModeOfStudy from '../ModeOfStudy';


// export const StudyContext = React.createContext()

const Apply = () => {

  // const [usersData, setUsersData]=useState({fName:"", oName:"", lName:"", email:"", address:"", tell:"", course:"", modeOfStudy:'' })

  const [fName, setFName] = useState("");
  const [oName, setOName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [tell, setTell] = useState("");
  const [course, setCourse] = useState("Frontend Development");
  const [modeOfStudy, setModeOfStudy] = useState("Weekdays");
  const [timeOfStudy, setTimeOfStudy] = useState("Morning");
  



  const [focus, setFocus] = useState(false)

	const navigate = useNavigate()

   const handleSubmit=(e)=>{
	 e.preventDefault();
   navigate("/Payment", {replace: true});
  //  {usersData};
  const Message = {course: {"fName": fName, "oName": oName, "lName": lName, "email": email, 
    "address": address, "tell": tell, "course": course, "modeOfStudy": modeOfStudy,
     "timeOfStudy": timeOfStudy}}
    // alert(Message)
    fetch('http://localhost:3000/course', {
      method: 'POST',
      body: JSON.stringify(Message),
      header:{ "Content-Type": "application/json" }
    }).then(() => {
      // console.log('new message sent' + Message);
      alert('Application success; Press "OK" to return to the home page \n' + Message )
    })
  }
  
  const handleFocus =(e)=>{
    setFocus(true);
    };


    
  return (
    <div className="application-container">
  <form onSubmit={handleSubmit} className="application-form">
    <input type="text" name="fName" onChange={e=> setFName(e.target.value)}  value={fName} placeholder="FirstName" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
    <span>Input a valid firstname</span>

    <input type="text" name="oName" onChange={e=> setOName(e.target.value)}  value={oName} placeholder="Other Name" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
    <span>this field is required</span>

    <input type="text" name="lName" onChange={e=> setLName(e.target.value)}  value={lName} placeholder="LastName" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
        <span>this field is required</span>

    <input type="Email" name="email" onChange={e=> setEmail(e.target.value)}  value={email} placeholder="Email" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid email account</span>

    <input type="address" name="address" onChange={e=> setAddress(e.target.value)}  value={address} placeholder="address" onBlur={handleFocus} focus={focus.toString()}/>
    <span> this field is required</span>

    <input type="tel" name="phoneNumber" onChange={e=> setTell(e.target.value)}  value={tell} placeholder="Phone-number" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid phone number</span>

    <label for="Course">Course:</label>
    <select name="Course" id="Course-select" 
    placeholder="Course" 
    value={course} 
    onChange={e=> setCourse(e.target.value)} 
    onBlur={handleFocus} 
    required focus={focus.toString()}>

    <option>Frontend Development</option>
    <option>Backend Development</option>
    <option >Fullstack Developement</option>
    <option >UI/UX Course</option>
    <option >Android App Development(IOS and HIOS)</option>
    </select>

    <label for="Course">Mode of Study:</label>
  <select name="pets" 
  id="pet-select" 
  placeholder="Mode of Study"
  value={modeOfStudy} 
  onChange={e=> setModeOfStudy(e.target.value)}
  onBlur={handleFocus} 
  required focus={focus.toString()}
  >
    <option>Weekdays</option>
    <option>Weekends</option>
  </select>

  <label for="Course">Mode of Study:</label>
  <select name="pets" 
  id="time-select" 
  placeholder="Preferred Time"
  value={timeOfStudy} 
  onChange={e=> setTimeOfStudy(e.target.value)}
  onBlur={handleFocus} 
  required focus={focus.toString()}
  >
    <option>Morning 9am-1pm</option>
    <option>Evening 2pm-6pm</option>
  </select>

    {/* <ChoseCourse  value={course} 
    onChange={e=> setCourse(e.target.value)}
    onBlur={handleFocus} 
    required focus={focus.toString()}/> */}

    {/* <ModeOfStudy  value={modeOfStudy} 
    onChange={e=> setModeOfStudy(e.target.value)}
    onBlur={handleFocus} 
    required focus={focus.toString()}/> */}
    <br/>
    	<button className="application-button" type='submit'>Submit</button>
  </form>
  </div>
  )
}

export default Apply;




