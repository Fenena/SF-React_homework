import React, { Component, Fragment } from "react";

import "../styles/app.css";
import Header from "./Header";
import Footer from "./Footer";

class app extends Component {
	render(){
		return (
			<Fragment>
				<Header />
				<Footer />
			</Fragment>
		);
	}
}

export default app;