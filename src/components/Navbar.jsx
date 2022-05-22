import React from "react";
import Logo from '../Images/Logo.png'
import './Navbar.css'

const Navbar = () => {
	return (
		<div>
			<nav>
				<img src={Logo} alt="" className="nav-logo"/>
				<h4 className="nav-title">My Travel Journal</h4>
			</nav>
		</div>
	)
}

export default Navbar;