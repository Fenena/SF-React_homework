import React, { Component } from "react";

import "../styles/Footer.css";

function Footer(){
	return (

		<footer>
			<p>© SkillDrive Inc. 2020</p>
			<a href="#" aria-label="VK"><img src="../img/VK.svg" alt="Мы Вконтакте"></img></a>
			<a href="#" aria-label="Instagram"><img src="../img/INST.svg" alt="Мы в Instagram"></img></a>
          	<a href="#" aria-label="Facebook"><img src="../img/FB.svg" alt="Мы в Facebook"></img></a>
		</footer>

	);
}

export default Footer;