/* eslint-disable react/prop-types */
import React from "react";
import "./App.scss";
import "./styles/assets.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import Dashboard from "./pages/dashboard";

function App(props) {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path="/" component={Dashboard} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
