import React from "react";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import MemesData from "./components/MemesData";

function App() {
  const memeArr = MemesData.data.memes;
  const randomNum = Math.floor(Math.random() * memeArr.length);
  console.log(randomNum);

  return (
    <div className="App">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;
