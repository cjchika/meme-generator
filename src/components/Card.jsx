import React from "react";
import './Card.css'
import Pic from "../Images/Pic1.png"
import Location from "../Images/Location.png"



const Card = (props) => {
  return (
		<div className="container">
				<img src={Pic} alt="" />
				<div className="container-details">
					<div className="container-head">
						<img src={Location} alt="" />
						<p>{props.location}</p>
						<a href="www.google.com">View On Google Maps</a>
					</div>
						<h1>{props.title}</h1>
						<h3>{props.startDate} - {props.endDate}</h3>
						<p className="container-para">{props.description}
						</p>
				</div>
			<hr/>
		</div>
     
  )
};

export default Card;