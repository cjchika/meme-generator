import React, { useState } from "react";
import './Meme.css'
import MemesData from "./MemesData";

const Meme = () => {
	const [memeImage, setMemeImage] = useState('');

	const getMemeImage = (props) => {
		const memesArr = MemesData.data.memes;
		const randomNum = Math.floor(Math.random() * memesArr.length);
		setMemeImage(memesArr[randomNum].url) 
	}

	return (
		<div>
			<div action="submit" className="form">
					<input type="text" className="form-input" placeholder="Top Text"/>
					<input type="text" className="form-input" placeholder="Bottom Text"/>
					<button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
					<div className="image-container">
						<img src={memeImage} alt="" />
					</div>
			</div>
		</div>
	)
};

export default Meme;