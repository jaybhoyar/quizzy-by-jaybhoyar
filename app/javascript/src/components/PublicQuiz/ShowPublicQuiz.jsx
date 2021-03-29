import React from "react";
import { useParams } from "react-router";
import CreateUser from "components/PublicQuiz/User/CreateUser";

import quizzesApi from "apis/quiz";

const ShowPublicQuiz = () => {
	const fetchQuizDetails = () => {
		try {
			const response = await attemptsApi.show(id);
			setQuizDetails(response.data.quiz);
			setQuestions(response.data.questions);
		} catch (error) {
			//
		}
	};
	return (
		<div className="flex justify-center min-h-screen">
			<div className="w-2/6 mx-auto p-5">
				<h2
					className="mt-6 text-4xl font-extrabold leading-9
         text-center text-bb-gray-700"
				>
					Welcome to Quiz
				</h2>
				<CreateUser />
			</div>
		</div>
	);
};

export default ShowPublicQuiz;
