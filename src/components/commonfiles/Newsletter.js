import React, {useState} from 'react';

const Newsletter = () => {

  const [subscribe, setSubscribe]= useState({email:""})

  return <div className="subscribe">
    <div>
    <h2>Subribe to our newsletter</h2>
    <p>Never miss any new amazing updates, get them right onto your mails!</p>
    <form>
      <input type="email" name="email" value={subscribe.email} onChange={e=>setSubscribe({email:e.target.value})}/>
      <button>Subscribe</button>
    </form>
    </div>
  </div>;
};

export default Newsletter;
