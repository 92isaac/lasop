import React, {useState}from 'react';

const CardPaymentPage = () => {
  const [pay, setPay] =useState({cName:"", ccNum:"", expMonth:"", exyYear:"", cvv:""})
  return  <form >
           <div className="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" ></i>
              <i className="fa fa-cc-amex" ></i>
              <i className="fa fa-cc-mastercard" ></i>
              <i className="fa fa-cc-discover" ></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" value={pay.cName} onChange={e=>setPay({cName:e.target.value})} placeholder="David Shuaib"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" value={pay.ccNum} onChange={e=>setPay({ccNum:e.target.value})} placeholder="0000-1111-2222-3333"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" value={pay.expMonth} onChange={e=>setPay({expMonth:e.target.value})} placeholder="September"/>

            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" value={pay.exyYear} onChange={e=>setPay({exyYear:e.target.value})} placeholder="2018"/>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" value={pay.cvv} onChange={e=>setPay({cvv:e.target.value})} placeholder="352"/>
              </div>
            </div>
          </div>
        <input type="submit" value="Pay" className="btn"/>
        </form>
;
};

export default CardPaymentPage;
