import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateUser from "components/PublicQuiz/User/CreateUser";

import attemptApi from "apis/attempt";

const ShowPublicQuiz = () => {
	const { slug } = useParams();
	const [quizDetails, setQuizDetails] = useState("");
	const [questions, setQuestions] = useState([]);

	const fetchQuizDetails = async () => {
		try {
			const response = await attemptApi.show(slug);
			setQuizDetails(response.data.quiz);
			setQuestions(response.data.questions);
		} catch (error) {
			//
		}
	};

	useEffect(() => {
		fetchQuizDetails();
	}, []);

	return (
		<div className="flex justify-center min-h-screen">
			<div className="w-2/6 mx-auto p-5">
				{quizDetails && (
					<h2
						className="mt-6 text-4xl font-extrabold leading-9
         text-center text-bb-gray-700"
					>
						{`Welcome to ${quizDetails.name} Quiz`}
					</h2>
				)}
				<CreateUser />
			</div>
		</div>
	);
};

export default ShowPublicQuiz;
