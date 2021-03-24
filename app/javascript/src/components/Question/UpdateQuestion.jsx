import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import QuestionForm from "components/Question/Form/QuestionForm";
import questionApi from "apis/question";

const UpdateQuestion = () => {
	const { quiz_id, id } = useParams();
	const [questionDetails, setQuestionDetails] = useState("");
	const [title, setTitle] = useState("");
	const [options, setOptions] = useState([]);
	const [correctOption, setCorrectOption] = useState("");

	const fetchQuestionDetails = async () => {
		try {
			const response = await questionApi.show(quiz_id, id);
			setQuestionDetails(response.data.question);
			setTitle(response.data.question.title);
			setOptions(response.data.options);
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

	const handleSubmit = async (event) => {
		event.preventDefault();
		let options_attributes = getOptionAttributes();
		try {
			console.log(options_attributes);
			await questionApi.update({
				quiz_id,
				id,
				payload: {
					question: {
						title,
						options_attributes,
					},
				},
			});
			console.log(options_attributes);
			// window.location.href = `/quizzes/${quiz_id}/show`;
		} catch (error) {
			//
		}
	};

	useEffect(() => {
		fetchQuestionDetails();
	}, []);

	return (
		<div className="w-1/2 mx-auto p-5">
			<h1 className="text-2xl font-bold mt-5">{questionDetails.title}</h1>
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

export default UpdateQuestion;