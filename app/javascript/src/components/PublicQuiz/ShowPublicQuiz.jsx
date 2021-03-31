import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import attemptApi from "apis/attempt";
import CreateUser from "components/PublicQuiz/User/CreateUser";
import AttemptQuiz from "components/PublicQuiz/Attempt/AttemptQuiz";
import ResultQuiz from "components/PublicQuiz/Attempt/ResultQuiz";

const ShowPublicQuiz = () => {
	const { slug } = useParams();
	const [quizDetails, setQuizDetails] = useState("");
	const [questions, setQuestions] = useState([]);
	const [participant, setParticipant] = useState("");
	const [attempt, setAttempt] = useState("");
	const [answers, setAnswers] = useState([]);
	const [stage, setStage] = useState("USERFORM");
	const [attemptedAnswers, setAttemptedAnswers] = useState([]);

	const fetchQuizDetails = async () => {
		try {
			const response = await attemptApi.showQuiz(slug);
			setQuizDetails(response.data.quiz);
			setQuestions(response.data.questions);
		} catch (error) {
			//
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await attemptApi.update({
				id: attempt.id,
				payload: {
					attempt_answers_attributes: answers,
				},
			});
			buildAttemptedResult(res.data.attempt_answers, questions);
			setStage("QUIZRESULT");
		} catch (error) {
			//
		}
	};

	const buildAttemptedResult = (userAnswers, questions) => {
		const obj = {};
		userAnswers.forEach(({ value, question_id }) => {
			obj[question_id] = value;
		});

		const result = questions.map(({ question, options }) => {
			return {
				question: { ...question, choosedOption: obj[question_id] },
				options,
			};
		});
		setAttemptedAnswers(result);
	};

	const handleAnswer = (option, question, index) => {
		const newAnswers = [...answers];
		const filteredOptions = newAnswers.filter(
			(ans, i) => ans.question_id !== question.id
		);
		filteredOptions.push({
			question_id: question.id,
			value: option.value,
			attempt_id: attempt.id,
		});
		setAnswers(filteredOptions);
	};

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

				{(() => {
					switch (stage) {
						case "USERFORM":
							return (
								<CreateUser
									setParticipant={setParticipant}
									setAttempt={setAttempt}
									quiz={quizDetails}
									setStage={setStage}
								/>
							);
						case "ATTEMPTQUIZ":
							return (
								<AttemptQuiz
									questions={questions}
									answers={answers}
									handleAnswer={handleAnswer}
									handleSubmit={handleSubmit}
								/>
							);
						case "QUIZRESULT":
							return (
								<ResultQuiz
									attemptedAnswers={attemptedAnswers}
								/>
							);
						default:
							return <div></div>;
					}
				})()}
			</div>
		</div>
	);
};

export default ShowPublicQuiz;
