import React, { useState } from "react";
import { BsSearch, BsPencil } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";

function Customer() {
	var [data, setData] = useState([
		{
			subid: "1234",
			firstname: "Sampath",
			lastname: "Bandla",
			phno: "7036774550",
			village: "Prodduturu",
			street: "Church Road",
			status: "Active",
			due: "600",
			show: true
		},
		{
			subid: "124",
			firstname: "Sandeep",
			lastname: "Bandla",
			phno: "9989079159",
			village: "Prodduturu",
			street: "Church Road",
			status: "InActive",
			due: "1,200",
			show: true
		}
	]);
	return (
		<div className="customer">
			<p className="breadcumb">
				Dashboard / <span>Customers</span>
			</p>
			<div className="search">
				<input type="text" placeholder="Search..." />
				<button>
					<BsSearch />
				</button>
			</div>
			<div className="datadetails">
				<div className="right">
					<div className="sort">
						<p>
							<BiSortDown />
							Sort By:
						</p>
						<select name="" id="" className="sort">
							<option value="">SUB ID</option>
							<option value="">First Name</option>
							<option value="">Last Name</option>
							<option value="">Street</option>
							<option value="">Village</option>
						</select>
					</div>
				</div>
			</div>
			<div className="table">
				<table>
					<tr>
						<th style={{ textAlign: "left" }}>
							<input name="" type="checkbox" id=""></input>
						</th>
						<th>Sub ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone Number</th>
						<th>Village</th>
						<th>Street</th>
						<th>Status</th>
						<th>Due</th>
						<th>Actions</th>
					</tr>
					{data.map(item =>
						item.show ? (
							<tr key="item.subid">
								<td>
									<input name="" type="checkbox" id=""></input>
								</td>
								<td>{item.subid}</td>
								<td>{item.firstname}</td>
								<td>{item.lastname}</td>
								<td>{item.phno}</td>
								<td>{item.village}</td>
								<td>{item.street}</td>
								<td>{item.status}</td>
								<td>{item.due}</td>
								<td>
									<div
										style={{ display: "flex", alignItems: "center" }}
										className="actions"
									>
										<p className="delete">
											<AiOutlineDelete className="redtext" />
										</p>
										<p className="edit">
											<BsPencil className="bluetext" />
										</p>
										<p className="view">
											<AiOutlineEye className="greentext" />
										</p>
									</div>
								</td>
							</tr>
						) : (
							""
						)
					)}
				</table>
			</div>
		</div>
	);
}

export default Customer;
