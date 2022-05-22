import React from "react";
import './Meme.css'

const Meme = () => {
	return (
		<div>
			<form action="submit" className="form">
					<input type="text" className="form-input" placeholder="Top text"/>
					<input type="text" className="form-input" placeholder="Bottom Text"/>
					<button className="form-button">Get a new meme image 🖼</button>
			</form>
		</div>
	)
};

export default Meme;