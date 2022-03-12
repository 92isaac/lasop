import React from 'react'
import Logo from '../../assets/logo.png'


const AboutusHero =()=>{
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <img src={Logo} alt="logo" width="600"/>
            </div>
            <div className="col-lg-6 col-md-12">
                <ul>
                    <li><strong>We Train</strong>
<p>We provide high quality training to equip our students with industry recongnised IT skills and knowledge quality companies are looking for.</p></li>
                    <li><strong>Mentorship</strong>
<p>You are assigned to a professional who reviews your codes and helps when you get stuck</p></li>
                    <li><strong>Career Service</strong>
<p>Our career service team connects graduates to the right tech employers in the market place.</p></li>
                    <li><strong>Hiring Service</strong>
<p>Our career service team connects graduates to the right tech employers in the market place.</p></li>
                </ul>
            </div>
        </div>
    </div>)
}

export default AboutusHero