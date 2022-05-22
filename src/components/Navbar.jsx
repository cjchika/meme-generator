import React from "react";
import Logo from "../images/TrollFace.png"
import "./Navbar.css"

const Navbar = () => {
	return (
		<nav>
			<div className="logo-container">
				<img src={Logo} alt="" />
				<h1 className="title">Meme Generator</h1>
			</div>
			<p className="sub-title">React Course - Project 3</p>
		</nav>
	)  
}

export default Navbar;