import React, {useState} from 'react';

const label = [
  {
    tiltle: 'Lecture time',
    inpTyp: "type",
    name:'time',
    value: 'fgh',
  },
  {
    tiltle: 'm',
    inpTyp: "tye",
    name:'time',
    value: 'fgh',
  },
  {
    tiltle: 'Lecture time',
    inpTyp: "type",
    name:'time',
    value: 'fgh',
  },
]


const Lecturetime = () => {
  const [time, setTime]=useState({timeOfStudy:'' })
  return <div>
 {/* <label for="Course">Weekdays Study time:</label>
  <select name="pets" id="pet-select" placeholder="Mode of Study">
    <option type="radio" value={time.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})}>9am - 2pm</option>
    <option value={time.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})}>3pm - 6pm</option>
  </select>
 <label for="Course">Weeekend Study time</label>
  <select name="pets" id="pet-select" placeholder="Mode of Study">
    <option value={time.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})}>9am - 2pm</option>
    <option value={time.timeOfStudy} onChange={e=> setTime({timeOfStudy:e.target.value})}>3pm - 6pm</option>
  </select> */}




  <div>
    <label for="D">Mode of study</label>
    {/* <input type="radio" name="level0" value="D" id="D"/> */}
    <div class="sub1">
        <div>
            <input type="radio" name="level1" value="D0" id="D0"/>
            <label for="D0">Weekdays</label>
             <div class="sub255">
                <div>
                    <input type="radio" name="level2" value="D10" id="D10"/>
                    <label for="D10">9am - 2pm</label>
                </div>
                <div>
                    <input type="radio" name="level2" value="D11" id="D11"/>
                    <label for="D11">3pm - 6pm</label>
                </div>
            </div>
        </div>
        <div>
            <input type="radio" name="level1" value="D1" id="D1"/>
            <label for="D1">Weekends</label>
            <div class="sub2">
                <div>
                    <input type="radio" name="level2" value="D10" id="D10"/>
                    <label for="D10">10am - 2pm</label>
                </div>
                <div>
                    <input type="radio" name="level2" value="D11" id="D11"/>
                    <label for="D11">3pm - 6pm</label>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>;
};

export default Lecturetime;
