import React, { useMemo, useState, useEffect } from "react";

import Table from "components/Quiz/Table";
import quizzesApi from "apis/quiz";

const ListQuizzes = () => {
	const [quizzes, setQuizzes] = useState([]);

	const fetchQuizzes = async () => {
		try {
			const response = await quizzesApi.list();
			console.log(response.data.quizzes);
			setQuizzes(response.data.quizzes);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchQuizzes();
	}, []);

	const columns = React.useMemo(
		() => [
			{
				Header: "Quiz Name",
				accessor: "name",
			},
			{
				Header: "Column 2",
				accessor: "id",
			},
		],
		[]
	);

	return <Table data={quizzes} columns={columns} />;
};

export default ListQuizzes;
