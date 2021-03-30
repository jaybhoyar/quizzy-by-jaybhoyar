import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateUser from "components/PublicQuiz/User/CreateUser";

import attemptApi from "apis/attempt";
import AttemptQuiz from "components/PublicQuiz/Attempt/AttemptQuiz";

const ShowPublicQuiz = () => {
	const { slug } = useParams();
	const [quizDetails, setQuizDetails] = useState("");
	const [questions, setQuestions] = useState([]);
	const [participant, setParticipant] = useState("");

	const fetchQuizDetails = async () => {
		try {
			const response = await attemptApi.show(slug);
			setQuizDetails(response.data.quiz);
			setQuestions(response.data.questions);
		} catch (error) {
			//
		}
	};

	const handleSubmit = () => {};

	useEffect(() => {
		fetchQuizDetails();
	}, []);

	return (
		<div className="flex justify-center min-h-screen">
			<div className="w-3/6 p-5">
				{quizDetails && (
					<h2
						className="mt-6 text-4xl font-extrabold leading-9
         text-center text-bb-gray-700"
					>
						{`Welcome to ${quizDetails.name} Quiz`}
					</h2>
				)}
				{/* {!participant.role ? (
					<CreateUser
						setParticipant={setParticipant}
						quiz={quizDetails}
					/>
				) : (
					""
				)} */}

				{/* {participant.role === "standard" ? ( */}
				<AttemptQuiz
					questions={questions}
					handleSubmit={handleSubmit}
				/>

				{/* ) : (
					""
				)} */}
			</div>
		</div>
	);
};

export default ShowPublicQuiz;
