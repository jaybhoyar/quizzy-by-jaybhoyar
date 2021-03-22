import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import quizzesApi from "apis/quiz";

const ShowQuiz = () => {
	const { id } = useParams();
	const [quizDetails, setQuizDetails] = useState("");

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
		<div className="py-10 w-2/3 mx-auto">
			<div className="flex items-center justify-between h-16">
				<div className="flex items-center">
					<h1 className="text-black font-bold text-2xl">
						{`${quizDetails.name} quiz`}
					</h1>
				</div>
				<div className="flex items-center justify-between">
					<Link
						to={`/quizzes/${quizDetails.id}/questions/create`}
						className="flex justify-center px-6 py-3 text-xl font-medium 
            leading-5 text-white bg-quizzy-teal border border-transparent rounded-md"
					>
						Add questions
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ShowQuiz;
