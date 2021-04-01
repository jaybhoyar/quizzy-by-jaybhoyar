import React from "react";
import { useTable } from "react-table";

const Table = ({ data, columns }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ data, columns });
	return (
		<div className="mt-6 w-full">
			<table {...getTableProps()} className="w-full">
				<thead>
					{headerGroups.map((headerGroup, index) => (
						<tr
							key={index}
							{...headerGroup.getHeaderGroupProps()}
							className="bg-quizzy-navy-blue"
						>
							{headerGroup.headers.map((column, index) => (
								<th
									key={index}
									{...column.getHeaderProps()}
									className="py-4 text-xl text-white text-left pl-6"
								>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr
								key={i}
								{...row.getRowProps()}
								className="bg-white"
							>
								{row.cells.map((cell, i) => {
									return (
										<td
											key={i}
											{...cell.getCellProps()}
											className="text-xl font-medium leading-4 py-4 text-left pl-6 border-b border-gray-300"
										>
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
};

export default Table;
