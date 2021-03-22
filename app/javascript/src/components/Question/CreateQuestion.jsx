import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import quizzesApi from "apis/quiz";
import QuestionForm from "components/Question/Form/QuestionForm";

const CreateQuestion = () => {
	const { id } = useParams();
	const [quizDetails, setQuizDetails] = useState("");
	const [title, setTitle] = useState();

	const fetchQuizDetails = async () => {
		try {
			const response = await quizzesApi.show(id);
			setQuizDetails(response.data.quiz);
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
			<QuestionForm title={title} setTitle={setTitle} />
		</div>
	);
};

export default CreateQuestion;
