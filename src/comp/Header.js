import React, { Component } from "react";

import "../styles/Header.css";
import "../img/Logo.svg";


function Header(){
	let textBtn = "Войти";
	let textA_1 = "О нас";
	let textA_2 = "Условия";
	let textA_3 = "Частые вопросы";

	return (

		<header>
	  		<noscript>Ваш браузер не поддерживает JavaScript!</noscript>
	  		<a className={ "navbar-logo" } href="#">
	      		<img src=".img/Logo.svg/" alt="Логотип SkillDrive"></img>
	  		</a>
			<div id="burger1"></div>
			<div id="burger2"></div>
			<div id="burger3"></div>
			<nav>
		      	<ul className={ "nav-menu" } aria-current="page">
		        	<li>
		            	<a href="#">{ textA_1 }</a>
		        	</li>
		        	<li>
		            	<a href="#">{ textA_2 }</a>
		        	</li>
		           <li>
		            	<a href="#">{ textA_3 }</a>
		        	</li>
		    	</ul>
		    	<button aria-label="Sign_In">{ textBtn }</button>
			</nav>
		</header>

	);
}

export default Header;