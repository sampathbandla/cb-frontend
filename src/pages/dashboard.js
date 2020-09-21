import React from "react";
import Index from "./dashboard/index";
import Customer from "./dashboard/customer";
import Header from "../components/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/dashboard.scss";
import { AiOutlineRight } from "react-icons/ai";
function Dashboard() {
	return (
		<Router>
			<div className="dashboard">
				<div className="dashboard___sidebar">
					<h1 className="logo">CB</h1>
					<hr className="hr" />
					<ul className="dashboard___sidebar___menu">
						<li>
							<Link to="/dashboard">
								<AiOutlineRight />
								Dashboard
							</Link>
						</li>
						<li>
							<Link to="/customer">
								<AiOutlineRight />
								Customers
							</Link>
						</li>
						<li>
							<Link to="/assets">
								<AiOutlineRight />
								Assets
							</Link>
						</li>
						<li>
							<Link to="/reports">
								<AiOutlineRight />
								Reports
							</Link>
						</li>
					</ul>
					<div className="dashboard___sidebar___footer">
						<p>&copy; Cable Billing 2020</p>
					</div>
				</div>
				<div className="dashboard___content">
					<Header />
					<div className="dashboard___contentdiv">
						<Switch>
							<Route path="/dashboard" exact component={Index} />
							<Route path="/customer" exact component={Customer} />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default Dashboard;
