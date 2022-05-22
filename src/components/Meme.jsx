import React from "react";
import './Meme.css'
import MemesData from "./MemesData";

const Meme = () => {
	let url;

	const getMemeImage = (props) => {
		const memesArr = MemesData.data.memes;
  	const randomNum = Math.floor(Math.random() * memesArr.length);
  	url = memesArr[randomNum].url
    console.log(url)
	}

	return (
		<div>
			<div action="submit" className="form">
					<input type="text" className="form-input" placeholder="Top text"/>
					<input type="text" className="form-input" placeholder="Bottom Text"/>
					<button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
		</div>
	)
};

export default Meme;