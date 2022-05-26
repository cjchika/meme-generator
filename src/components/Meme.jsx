import React, { useState } from "react";
import "./Meme.css";
import MemesData from "./MemesData";

const Meme = (props) => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(MemesData);

  const getMemeImage = (props) => {
    const memesArr = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
          className="form-input"
          placeholder="Top Text"
        />
        <input
          type="text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
          className="form-input"
          placeholder="Bottom Text"
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
