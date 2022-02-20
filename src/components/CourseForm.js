import React from 'react'


function CourseForm(props) {
    return (
        <React.Fragment key={props.id}>
        <h1>{props.fName} {props.lName}</h1>
    <h3>Course: <span>{props.course}</span></h3>
    <h3>Mode Of Study: <span>{props.modeOfStudy}</span></h3>
    <h3>Time: <span>{props.timeOfStudy}</span></h3>
    <h3>Fee: <span>{props.modeOfStudy === "Weekdays" ? `N ${10000}` : `N ${20000}`}</span></h3>
    </React.Fragment>
    )
}

export default CourseForm