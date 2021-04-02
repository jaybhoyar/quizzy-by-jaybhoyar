import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "components/Common/Loader";
import QuizForm from "components/Quiz/Form/QuizForm";

import quizzesApi from "apis/quiz";

const EditTask = ({ history }) => {
	const [name, setName] = useState("");
	const { id } = useParams();
	const [loading, setLoading] = useState(Boolean);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await quizzesApi.update({
				id,
				payload: { quiz: { name } },
			});

			history.push("/");
		} catch (error) {
			//
		}
	};

	const fetchQuizDetails = async () => {
		try {
			setLoading(true);
			const response = await quizzesApi.show(id);
			setName(response.data.quiz.name);
			setLoading(false);
		} catch (error) {
			//
		}
	};

	const loadData = async () => {
		await fetchQuizDetails();
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<div className="w-2/6 mx-auto p-8 mt-8 ">
			<h1 className="text-4xl font-bold mx-auto my-4 text-center">
				Edit Quiz
			</h1>
			{!loading ? (
				<QuizForm
					name={name}
					setName={setName}
					handleSubmit={handleSubmit}
				/>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default EditTask;
