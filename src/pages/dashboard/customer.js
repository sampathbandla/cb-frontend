import React from "react";
import { useTable } from "react-table";
import "./css/customer.scss";

function Customer() {
	const columns = React.useMemo(
		() => [
			{
				Header: "Sub ID",
				accessor: "subid"
			},
			{
				Header: "Full Name",
				accessor: "fullName"
			},
			{
				Header: "Status",
				accessor: "status"
			},
			{
				Header: "Due",
				accessor: "due"
			},
			{
				Header: "Expiry",
				accessor: "expiry"
			}
		],
		[]
	);
	const data = React.useMemo(() => [
		{
			subid: "123",
			fullName: "Sampath Bandla",
			status: "Active",
			due: "1000",
			expiry: "12-07-2021"
		},
		{
			subid: "123",
			fullName: "Sampath Bandla",
			status: "Active",
			due: "1000",
			expiry: "12-07-2021"
		},
		{
			subid: "123",
			fullName: "Sampath Bandla",
			status: "Active",
			due: "1000",
			expiry: "12-07-2021"
		}
	]);
	const tableInstance = useTable({ columns, data });
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow
	} = tableInstance;
	return (
		<div className="customer">
			<p className="breadcumb">
				Dashboard / <span>Customers</span>
			</p>
			<h1 className="customer___title">Customers</h1>
			<hr />
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr key="" {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th key="" {...column.getHeaderProps()}>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row);
						return (
							<tr key="" {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
										<td key="" {...cell.getCellProps()}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Customer;
