import React, { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
function Alert(props) {
	var [classes, setClasses] = useState("");
	useEffect(() => {
		if (props.alertMsg === "") {
			setClasses("alert hide");
		} else {
			setClasses("alert");
		}
	}, [props]);
	return (
		<div className={classes}>
			<RiErrorWarningLine />
			<p>{props.alertMsg}</p>
		</div>
	);
}

export default Alert;
