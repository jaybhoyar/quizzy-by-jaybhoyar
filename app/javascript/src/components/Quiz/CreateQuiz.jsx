import React, { useState } from "react";

import QuizForm from "components/Quiz/Form/QuizForm";

import quizzesApi from "apis/quiz";

const CreateQuiz = () => {
	const [name, setName] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await quizzesApi.create({
				quiz: { name },
			});
			window.location.href = "/";
		} catch (error) {
			//
		}
	};

	return (
		<div className="w-2/6 mx-auto p-5">
			<h1 className="text-4xl font-bold mx-auto my-8">Add New Quiz</h1>
			<QuizForm
				name={name}
				setName={setName}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default CreateQuiz;
