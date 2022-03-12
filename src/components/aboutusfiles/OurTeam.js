import React from 'react'
import OurteamProps from './OurteamProps' 
import ourteamdic from './ourteamdic'

const createTeamProfile =(team)=>{
    return <OurteamProps 
    key={team.teamName}
    teamImg={team.teamImg}
    teamName={team.teamName}
    teampost={team.teampost}
    
    />
}



const OurTeam =()=>{
    return <div className="ourteam-container">
            <div className="ourteam-text">
                <h4>Meet <span>our team</span></h4>
            </div>
      <div className="ourteam-img">
       {ourteamdic.map(createTeamProfile)}
      </div>
    </div>
}

export default OurTeam