import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import "./css/header.scss";
function Header() {
	return (
		<div className="header">
			<div className="logo mobile">CB</div>
			<p className="header___username">Sampath Cable Networks</p>
			<button className="logout">
				<AiOutlineLogout />
				<span>Logout</span>
			</button>
			<button className="mobile mobileMenuBtn">
				<BiMenu />
			</button>
		</div>
	);
}

export default Header;
