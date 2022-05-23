import React, { useState } from "react";
import './Meme.css'
import MemesData from "./MemesData";

const Meme = () => {
	const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage: ""});
	const [allMemeImages, setAllMemeImages] = useState(MemesData)

	const getMemeImage = (props) => {
		const memesArr = allMemeImages.data.memes;
		const randomNum = Math.floor(Math.random() * memesArr.length);
		const url = memesArr[randomNum].url
		setMeme(prevMeme => ({
			...prevMeme, 
			randomImage: url
		}))
	}

	return (
		<div>
			<div action="submit" className="form">
					<input type="text" className="form-input" placeholder="Top Text"/>
					<input type="text" className="form-input" placeholder="Bottom Text"/>
					<button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
					<div className="image-container">
						<img src={meme.randomImage} alt="" />
					</div>
			</div>
		</div>
	)
};

export default Meme;