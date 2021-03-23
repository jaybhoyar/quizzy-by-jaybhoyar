import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import QuestionForm from "components/Question/Form/QuestionForm";
import questionApi from "apis/question";
import quizzesApi from "apis/quiz";

const CreateQuestion = () => {
	const { id } = useParams();
	const [quizDetails, setQuizDetails] = useState("");
	const [title, setTitle] = useState("");
	const [options, setOptions] = useState([{ value: "" }, { value: "" }]);

	const fetchQuizDetails = async () => {
		try {
			const response = await quizzesApi.show(id);
			setQuizDetails(response.data.quiz);
		} catch (error) {
			//
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await questionApi.create({
				quiz_id: id,
				payload: {
					question: {
						title,
						options_attributes: [
							{ value: option1, is_correct: true },
						],
					},
				},
			});
		} catch (error) {
			//
		}
	};

	useEffect(() => {
		fetchQuizDetails();
	}, []);

	return (
		<div className="w-2/6 mx-auto p-5">
			<h1 className="text-xl font-bold my-8">{quizDetails.name}</h1>
			<QuestionForm
				title={title}
				setTitle={setTitle}
				options={options}
				setOptions={setOptions}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default CreateQuestion;
