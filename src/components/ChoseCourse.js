import React, {useState} from 'react';



export const CourseContext = React.createContext()


const ChoseCourse = () => {
  // const [usersData, setUsersData]=useState({course:""})
  const [course, setCourse]=useState("")
  return <div>
    <CourseContext.Provider value={course}>

    <label for="Course">Course:</label>
    <select name="Course" id="Course-select" placeholder="Course" value={course} onChange={e=> setCourse(e.target.value)} >
    <option>Frontend Development</option>
    <option>Backend Development</option>
    <option value={course} onChange={e=> setCourse(e.target.value)} >Fullstack Developement</option>
    <option >UI/UX Course</option>
    <option >Android App Development(IOS and HIOS)</option>
    </select>
    </CourseContext.Provider>

  </div>;
};

export default ChoseCourse;
