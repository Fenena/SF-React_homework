import React, { Component } from "react";

import "../styles/app.css";

class app extends Component {
	render(){
		return (
			<header>
  			<noscript>Ваш браузер не поддерживает JavaScript!</noscript>
			<a class="navbar-logo" href="#"><img src="img/Logo.svg" alt="Логотип SkillDrive"></img></a>
				<div id="burger1"></div>
				<div id="burger2"></div>
				<div id="burger3"></div>
				<nav>
					<ul class="nav-menu" aria-current="page">
						<li>
							<a href="#">О нас</a>
						</li>
						<li>
							<a href="#">Условия</a>
						</li>
						<li>
							<a href="#">Частые вопросы</a>
						</li>
					</ul>
					<button class="sign-in" aria-label="Sign_In">Войти</button>
				</nav>
  			</header>

		);
	}
}

export defaiult App;