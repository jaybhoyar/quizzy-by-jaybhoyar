import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import QuestionForm from "components/Question/Form/QuestionForm";
import questionApi from "apis/question";
import quizzesApi from "apis/quiz";

const CreateQuestion = () => {
	const { quiz_id } = useParams();
	const [quizDetails, setQuizDetails] = useState("");
	const [title, setTitle] = useState("");
	const [options, setOptions] = useState([{ value: "" }, { value: "" }]);
	const [correctOption, setCorrectOption] = useState("");

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
		const options_attributes = getOptionAttributes();
		try {
			await questionApi.create({
				quiz_id,
				payload: {
					question: {
						title,
						options_attributes,
					},
				},
			});
			window.location.href = `/admin/quizzes/${quiz_id}/show`;
		} catch (error) {
			//
		}
	};

	function getOptionAttributes() {
		const options_attributes = options.map((option, index) => ({
			value: option.value,
			is_correct: option.value === correctOption,
		}));
		return options_attributes;
	}

	useEffect(() => {
		fetchQuizDetails();
	}, []);

	return (
		<div className="w-1/2 mx-auto p-5">
			<h1 className="text-2xl font-bold mt-5">{quizDetails.name}</h1>
			<QuestionForm
				title={title}
				setTitle={setTitle}
				options={options}
				setOptions={setOptions}
				correctOption={correctOption}
				setCorrectOption={setCorrectOption}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default CreateQuestion;
