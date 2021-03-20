import React, { useMemo, useState, useEffect } from "react";

import Table from "components/Quiz/Table";

const ListQuizzes = () => {
	const columns = React.useMemo(
		() => [
			{
				Header: "Column 1",
				accessor: "col1",
			},
			{
				Header: "Column 2",
				accessor: "col2",
			},
		],
		[]
	);

	const data = React.useMemo(
		() => [
			{
				col1: "Hello",
				col2: "World",
			},
			{
				col1: "react-table",
				col2: "rocks",
			},
			{
				col1: "whatever",
				col2: "you want",
			},
		],
		[]
	);
	return <Table data={data} columns={columns} />;
};

export default ListQuizzes;
