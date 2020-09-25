import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import Chart from "chart.js";

function Index() {
	return (
		<div className="dashboard___index">
			<p className="dashboard___index___title">Dashboard</p>
			<div className="dashboard___index___search">
				<input type="text" placeholder="Search ..." />
				<button>
					<BiSearchAlt />
				</button>
			</div>
			<div className="dashboard___index___graphsDiv">
				<div className="dashboard___index___graphsDiv___boxesActiveChart dashboard___index___graphsDiv___chart">
					<p>Boxes Active</p>
					<Doughnut
						data={{
							labels: ["InActive", "Active"],
							datasets: [
								{
									label: "# of Boxes",
									data: [44, 254],
									backgroundColor: [
										"rgba(255, 99, 132, 0.2)",
										"rgba(54, 162, 235, 0.2)"
									],
									borderColor: [
										"rgba(255, 99, 132, 1)",
										"rgba(54, 162, 235, 1)"
									],
									borderWidth: 1
								}
							],
							options: {
								legend: {
									display: false
								},
								tooltips: {
									callbacks: {
										label: function (tooltipItem) {
											return tooltipItem.yLabel;
										}
									}
								},
								scales: {
									yAxes: [
										{
											ticks: {
												beginAtZero: true
											}
										}
									]
								}
							}
						}}
						width={200}
						height={200}
						options={{ maintainAspectRatio: false, responsive: false }}
					/>
				</div>
				<div className="dashboard___index___graphsDiv___boxesActiveChart dashboard___index___graphsDiv___chart">
					<p>Daily Collection</p>
					<Bar
						data={{
							labels: ["Today", "Yestarday"],
							datasets: [
								{
									label: "Daily Collection",
									data: [44, 254],
									backgroundColor: [
										"rgba(255, 99, 132, 0.2)",
										"rgba(54, 162, 235, 0.2)"
									],
									borderColor: [
										"rgba(255, 99, 132, 1)",
										"rgba(54, 162, 235, 1)"
									],
									borderWidth: 1
								}
							],
							options: {
								scales: {
									yAxes: [
										{
											ticks: {
												beginAtZero: true
											}
										}
									]
								}
							}
						}}
						legend={false}
						width={200}
						height={200}
						options={{ maintainAspectRatio: false }}
					/>
				</div>
				<div className="dashboard___index___graphsDiv___boxesActiveChart dashboard___index___graphsDiv___chart">
					<p>Renews</p>
					<Line
						data={{
							labels: ["InActive", "Active"],
							datasets: [
								{
									label: "# of Boxes",
									data: [44, 254],
									backgroundColor: [
										"rgba(255, 99, 132, 0.2)",
										"rgba(54, 162, 235, 0.2)"
									],
									borderColor: [
										"rgba(255, 99, 132, 1)",
										"rgba(54, 162, 235, 1)"
									],
									borderWidth: 1
								}
							],
							options: {
								scales: {
									yAxes: [
										{
											ticks: {
												beginAtZero: true
											}
										}
									]
								}
							}
						}}
						legend={false}
						width={200}
						height={200}
						options={{ maintainAspectRatio: false }}
					/>
				</div>
			</div>
			<div className="dashboard___index___tablesDiv">
				<div className="dashboard___index___tablesDiv___table">
					<p className="title">Recent Package Changes</p>
					<table>
						<thead>
							<tr>
								<th>Sub ID</th>
								<th>Old Package ID</th>
								<th>New Package ID</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>123</td>
								<td>1254863</td>
								<td>1254867</td>
							</tr>
							<tr>
								<td>123</td>
								<td>1254863</td>
								<td>1254867</td>
							</tr>
							<tr>
								<td>123</td>
								<td>1254863</td>
								<td>1254867</td>
							</tr>
							<tr>
								<td>123</td>
								<td>1254863</td>
								<td>1254867</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="dashboard___index___tablesDiv___table">
					<p className="title">Recent Bills</p>
					<table>
						<thead>
							<tr>
								<th>Sub ID</th>
								<th>Paid Amount</th>
								<th>Taken By</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>123</td>
								<td>500</td>
								<td>Naresh</td>
							</tr>
							<tr>
								<td>123</td>
								<td>522</td>
								<td>Usha</td>
							</tr>
							<tr>
								<td>123</td>
								<td>250</td>
								<td>Saidulu</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="dashboard___index___tablesDiv___table">
					<p className="title">Recent Package Renews</p>
					<table>
						<thead>
							<tr>
								<th>Sub ID</th>
								<th>Pacakges</th>
								<th>No of Months</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>123</td>
								<td>1254863</td>
								<td>2</td>
								<td>500</td>
							</tr>
							<tr>
								<td>123</td>
								<td>1254863</td>
								<td>2</td>
								<td>500</td>
							</tr>
							<tr>
								<td>123</td>
								<td>1254863</td>
								<td>2</td>
								<td>500</td>
							</tr>
							<tr>
								<td>123</td>
								<td>1254863</td>
								<td>2</td>
								<td>500</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Index;
