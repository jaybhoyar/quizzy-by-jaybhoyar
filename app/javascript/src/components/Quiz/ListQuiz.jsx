/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Table from "components/Quiz/Table";
import quizzesApi from "apis/quiz";

const ListQuizzes = () => {
	const [quizzes, setQuizzes] = useState([]);

	const fetchQuizzes = async () => {
		try {
			const response = await quizzesApi.list();
			setQuizzes(response.data.quizzes);
		} catch (error) {
			//
		}
	};

	const destroyTask = async (id) => {
		try {
			await quizzesApi.destroy(id);
		} catch (error) {
			//
		} finally {
			window.location.href = "/";
		}
	};

	useEffect(() => {
		fetchQuizzes();
	}, []);

	const columns = [
		{
			Header: "Quiz Name",
			accessor: "name",
		},
		{
			Header: "",
			accessor: "id",
			Cell: ({ row }) => (
				<div className="text-right pr-6">
					<Link
						to={`/quizzes/edit/${row.original.id}`}
						className="px-6 py-3 mr-6
            text-base font-medium leading-4 transition duration-150
            ease-in-out bg-yellow-500 border border-transparent rounded-md outline-none"
					>
						Edit
					</Link>
					<button
						onClick={() => destroyTask(row.original.id)}
						className="px-6 py-3
            text-base font-medium leading-4 text-white transition duration-150
            ease-in-out bg-red-500 border border-transparent rounded-md outline-none"
					>
						Delete
					</button>
				</div>
			),
		},
	];
	return <Table data={quizzes} columns={columns} />;
};

export default ListQuizzes;
