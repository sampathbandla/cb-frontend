import React, { useState } from "react";
import Alert from "../components/alert";
import "./css/index.scss";
var validator = require("email-validator");

function Index() {
	const [details, setDetails] = useState({
		companyName: "",
		adminName: "",
		adminEmail: "",
		username: "",
		password: ""
	});
	var setError = error => {
		setErr(error);
		setTimeout(() => {
			setErr("");
		}, 2000);
	};
	const [err, setErr] = useState("");
	var registerHandler = event => {
		event.preventDefault();
		if (
			details.companyName === "" ||
			details.adminName === "" ||
			details.adminEmail === "" ||
			details.username === "" ||
			details.password === ""
		) {
			setError("All fields are mandatory!");
		} else {
			if (details.companyName.length > 50 || details.companyName.length < 5) {
				setError("Company Name must be < 50 letters & > 5");
			} else {
				if (details.adminName.length > 20 || details.adminName.length < 5) {
					setError("Admin Name must be < 20 letters & > 5");
				} else {
					if (!validator.validate(details.adminEmail)) {
						setError("Admin Email is not valid!");
					} else {
						if (details.username.length > 20 || details.username.length < 5) {
							setError("Username must be < 20 letters & > 5");
						} else {
							if (details.password.length > 30 || details.password.length < 5) {
								setError("Password must be < 30 letters & > 5");
							} else {
								// TODO Send details to backend
							}
						}
					}
				}
			}
		}
	};
	return (
		<div className="index">
			<Alert alertMsg={err} />
			<div className="index___centerdiv">
				<h1 className="logo">CB</h1>
				<hr className="index___hr" />
				<p style={{ textAlign: "center" }}>Welcome</p>
				<p style={{ textAlign: "center" }} className="f_light index___p__fill">
					Please fill information needed to start
				</p>
				<form className="index___form" noValidate autoComplete="off">
					<label htmlFor="company_name">Company Name</label>
					<input
						type="text"
						className="index___form___input"
						autoComplete="new-password"
						placeholder="Company Name"
						name="company_name"
						onChange={e =>
							setDetails({ ...details, companyName: e.target.value })
						}
					/>
					<label htmlFor="admin_name">Admin Name</label>

					<input
						type="text"
						className="index___form___input"
						placeholder="Admin Name"
						autoComplete="new-password"
						name="admin_name"
						onChange={e =>
							setDetails({ ...details, adminName: e.target.value })
						}
					/>
					<label htmlFor="admin_email">Admin Email</label>

					<input
						type="text"
						className="index___form___input"
						placeholder="Admin Email"
						autoComplete="new-password"
						name="admin_email"
						onChange={e =>
							setDetails({ ...details, adminEmail: e.target.value })
						}
					/>
					<label htmlFor="username">Username</label>

					<input
						type="text"
						className="index___form___input"
						placeholder="Username"
						autoComplete="new-password"
						name="username"
						onChange={e => setDetails({ ...details, username: e.target.value })}
					/>
					<label htmlFor="password">Password</label>

					<input
						className="index___form___input"
						placeholder="Password"
						autoComplete="new-password"
						type="password"
						name="password"
						onChange={e => setDetails({ ...details, password: e.target.value })}
					/>
					<input onClick={registerHandler} type="submit" value="Register" />
				</form>
			</div>
		</div>
	);
}

export default Index;
