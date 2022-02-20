import React, {useState, useEffect} from 'react';
import CardPaymentPage from '../CardPaymentPage';
import UssdPayment from '../UssdPayment';


const Payment = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(true);
  const [courses, setCourse] = useState('');


  useEffect(() =>{
    fetch('http://localhost:3000/course')
    .then(res => {
      return res.json();
    })
    .then(data => {
      // console.log(data)
      setCourse(data)
      // console.log(courses)
    })
  }, []);

  return ( 
  <div className='Payment-page'>
    {/* <div> */}

    <div className="payers-details">
      {/* Filter to show only the last filled form */}
      {/* {courses.filter(courseFilter => courses[courseFilter].id > courses.length-1).map((createCourse)) } */}
      {/* {courses.map(createCourse)} */}
      {console.log(courses)}
      {/* {courses.map(props => (
        <React.Fragment key={props.id}>
        <h1>{props.fName} {props.lName}</h1>
    <h3>Course: <span>{props.course}</span></h3>
    <h3>Mode Of Study: <span>{props.modeOfStudy}</span></h3>
    <h3>Time: <span>{props.timeOfStudy}</span></h3>
    <h3>Fee: <span>{props.modeOfStudy === "Weekdays" ? `N ${10000}` : `N ${20000}`}</span></h3>
    </React.Fragment>
    ))
      } */}
        
      <div>
        <div class="custom-control custom-radio">
        <input type="radio" name="customRadio" className={({ isActive }) => (isActive ? 'page-off' : 'card-page-off')} onClick={ handleClick}/>
        <label class="form-check-label" for="customRadio1">USSD</label>
        </div>

        <div class="custom-control custom-radio">
          <input type="radio" name="customRadio" class="form-check-input" onClick={ handleClick}/>
          <label class="form-check-label" for="customRadio2">Card payment</label>
        </div>
      </div>
        {/* </div> */}
    </div>
    <div>

      <div className={!click ? 'page-off' : ''} onClick={()=>Close()}>
      <UssdPayment/>
      </div>

      <div className={!click ? 'page-off' : ''} onClick={()=>Close()}>
       <CardPaymentPage/>
      </div>

    </div>
  </div>
  )
};

export default Payment;
