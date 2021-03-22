import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Table from "components/Quiz/Table";
import AlertModal from "components/Common/AlertModal";
import quizzesApi from "apis/quiz";
import { handleEvent } from "react_ujs";

const ListQuizzes = () => {
	const [quizzes, setQuizzes] = useState([]);
	const [quiz, setQuiz] = useState();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const handleClose = () => setModalIsOpen(false);

	function openModal() {
		setModalIsOpen(true);
	}

	function handleEvents(quiz) {
		setModalIsOpen(true);
		setQuiz(quiz);
	}

	const fetchQuizzes = async () => {
		try {
			const response = await quizzesApi.list();
			setQuizzes(response.data.quizzes);
		} catch (error) {
			//
		}
	};

	const destroyQuiz = async (id) => {
		try {
			await quizzesApi.destroy(id);
			handleClose();
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
			Cell: ({ row }) => (
				<Link
					to={`/quizzes/${row.original.id}/show`}
					className="cursor-pointer"
				>
					{row.original.name}
				</Link>
			),
		},
		{
			Header: "",
			accessor: "id",
			Cell: ({ row }) => (
				<div className="text-right pr-6">
					<Link
						to={`/quizzes/${row.original.id}/edit`}
						className="px-6 py-3 mr-6
            text-base font-medium leading-4 transition duration-150
            ease-in-out bg-yellow-500 border border-transparent rounded-md outline-none"
					>
						Edit
					</Link>
					<button
						onClick={() => handleEvents(row.original)}
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
	return (
		<>
			{modalIsOpen ? (
				<AlertModal
					modalStatus={modalIsOpen}
					handleClose={handleClose}
					quiz={quiz}
					destroyQuiz={destroyQuiz}
				/>
			) : (
				""
			)}
			{quizzes.length ? (
				<Table data={quizzes} columns={columns} />
			) : (
				<div className="flex justify-center mt-24">
					<p className="py-12 font-bold text-3xl text-gray-400 tracking-wide">
						You have not created any quiz.
					</p>
				</div>
			)}
		</>
	);
};

export default ListQuizzes;
