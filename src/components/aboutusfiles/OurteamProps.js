import React from "react"

const OurteamProps =(props)=>{
    return  <div className="col-img">
    <img src={props.teamImg} className="card-img" alt="..."/>
        <h5>{props.teamName}</h5>
        <h6>{props.teampost}</h6>
</div>
}

export default OurteamProps;