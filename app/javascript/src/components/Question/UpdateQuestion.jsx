import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import QuestionForm from "components/Question/Form/QuestionForm";
import questionApi from "apis/question";

const UpdateQuestion = () => {
	const { quiz_id, id } = useParams();
	const [title, setTitle] = useState("");
	const [options, setOptions] = useState([]);
	const [correctOption, setCorrectOption] = useState("");
	const [removedOptions, setRemovedOptions] = useState([]);

	const fetchQuestionDetails = async () => {
		try {
			const response = await questionApi.show(quiz_id, id);
			setFormData(response);
		} catch (error) {
			//
		}
	};

	function setFormData(response) {
		setTitle(response.data.question.title);
		setOptions(response.data.options);
		setRemovedOptions(response.data.options);
		const correctAnswer = response.data.options.filter(
			(option) => option.is_correct
		);
		setCorrectOption(correctAnswer[0].value);
	}

	function getRemovedOptions() {
		const filteredOptions = removedOptions.filter(
			(option) => !options.includes(option)
		);
		return filteredOptions.map((option) => {
			return {
				...option,
				_destroy: true,
			};
		});
	}

	function getOptionAttributes() {
		const options_attributes = options.map((option) => ({
			...option,
			is_correct: option.value === correctOption,
		}));

		return options_attributes.concat(getRemovedOptions());
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		let options_attributes = getOptionAttributes();
		getRemovedOptions();
		try {
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
			window.location.href = `/admin/quizzes/${quiz_id}/show`;
		} catch (error) {
			//
		}
	};

	useEffect(() => {
		fetchQuestionDetails();
	}, []);

	return (
		<div className="w-1/2 mx-auto p-5">
			<h1 className="text-2xl font-bold mt-5">Update Question</h1>
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
