import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import QuestionForm from "components/Question/Form/QuestionForm";
import questionApi from "apis/question";
import quizzesApi from "apis/quiz";

const UpdateQuestion = () => {
	const { quiz_id, id } = useParams();
	const [questionDetails, setQuestionDetails] = useState("");
	const [title, setTitle] = useState("");
	const [options, setOptions] = useState();
	const [correctOption, setCorrectOption] = useState("");

	const fetchQuestionDetails = async () => {
		try {
			const response = await questionApi.show(quiz_id, id);
			console.log(response.data.question);
			setQuestionDetails(response.data.question);
		} catch (error) {
			//
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
	};

	useEffect(() => {
		fetchQuestionDetails();
	}, []);

	return (
		<div className="w-1/2 mx-auto p-5">
			<h1 className="text-2xl font-bold mt-5">{questionDetails.title}</h1>
			{/* <QuestionForm
				title={title}
				setTitle={setTitle}
				options={options}
				setOptions={setOptions}
				correctOption={correctOption}
				setCorrectOption={setCorrectOption}
				handleSubmit={handleSubmit}
			/> */}
		</div>
	);
};

export default UpdateQuestion;
