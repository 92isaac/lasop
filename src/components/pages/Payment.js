import React, {useState} from 'react';
import CardPaymentPage from '../CardPaymentPage';
import UssdPayment from '../UssdPayment';
// import {CourseContext} from '../ChoseCourse'


// const check = ( isActive ) => {isActive ? 'page-off' : ''}


const Payment = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(click);

  return ( <div className='Payment-page'>
    <div>
          {/* <h1>
            <CourseContext.Consumer>
             { course => {
                return <h1> {course}</h1>
              }
            }
            </CourseContext.Consumer>
          </h1> */}

          <div className="payers-details">
          <h1>David Shuiab</h1>
          <h3>Cousre: <span>FullStack Development</span></h3>
          <h3>Mode Of Study: <span>Weekdays</span></h3>
          <h3>Time: <span>Morning className</span></h3>
          <h3>Fee: <span> $10,000</span></h3>

    <div>
        <div class="custom-control custom-radio">
      <input type="radio" name="customRadio" onClick={ handleClick}/>
      <label class="form-check-label" for="customRadio1">USSD</label>
        </div>

      <div class="custom-control custom-radio">
  <input type="radio" name="customRadio"  onClick={ handleClick}/>
  <label class="form-check-label" for="customRadio2">Card payment</label>

</div>
    </div>
          </div>
    </div >
    <div >


       <div className={({ isActive }) => (isActive ? 'page-off ' : 'card-page-off ')} >
      <UssdPayment/>
      </div>

      <div className={({ isActive }) => (isActive ? 'page-off ' : 'card-page-off ')} >
       <CardPaymentPage/>
      </div> 

    </div>
  </div>)

};

export default Payment;
