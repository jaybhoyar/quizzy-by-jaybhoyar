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
			<table {...getTableProps()} className="w-full shadow">
				<thead>
					{headerGroups.map((headerGroup, index) => (
						<tr
							key={index}
							{...headerGroup.getHeaderGroupProps()}
							className="bg-quizzy-light-gray"
						>
							{headerGroup.headers.map((column, index) => (
								<th
									key={index}
									{...column.getHeaderProps()}
									className="py-4 font-normal	text-base uppercase text-base text-white text-left pl-6"
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
											className="text-base font-medium text-gray-700 leading-4 py-3 text-left pl-6 border-b border-gray-300"
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
