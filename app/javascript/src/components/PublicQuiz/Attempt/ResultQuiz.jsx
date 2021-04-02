import React, { useState, useEffect } from "react";

import attemptApi from "apis/attempt";

const ResultQuiz = ({ public_slug, attemptId }) => {
	const [finalResult, setFinalResult] = useState([]);
	const [quiz, setQuiz] = useState("");

	const buildFinalResult = (userAnswers, questions) => {
		const obj = {};
		userAnswers.forEach(({ question_id, value }) => {
			obj[question_id] = value;
		});
		const result = questions.map(({ question, options }) => {
			return {
				question: { ...question, choosedOption: obj[question.id] },
				options,
			};
		});
		setFinalResult(result);
	};

	const getQuizWithAnswers = async () => {
		try {
			const res = await attemptApi.showQuizWithAnswers(
				public_slug,
				attemptId
			);
			buildFinalResult(res.data.attempted_answers, res.data.questions);
			setQuiz(res.data.quiz);
		} catch (error) {
			//
		}
	};

	useEffect(() => {
		getQuizWithAnswers();
	}, []);

	return (
		<div className="py-10 w-full mx-auto">
			{finalResult &&
				finalResult.map((obj, index) => {
					return (
						<div
							key={index}
							className="mt-5 p-4 border bg-white rounded-md"
						>
							<div className="flex justify-between items-center pb-3 border-b">
								<h2 className="text-xl">
									<span className="pr-6 font-extrabold">{`Q ${
										index + 1
									}`}</span>
									{obj.question.title}
								</h2>
							</div>
							<div className="pl-10">
								{obj.options.map((option, i) => {
									return (
										<div
											key={i}
											className="p-2 flex justify-start items-center"
										>
											<input
												className="mr-16"
												type="radio"
												name={obj.question.title}
												value={option.value}
												checked={
													option.value ===
													obj.question.choosedOption
												}
											/>
											{option.is_correct ? (
												<h2 className="text-xl">
													{option.value}
													<span className="ml-4 p-2 text-base bg-quizzy-green rounded-md">
														Correct Answer
													</span>
												</h2>
											) : (
												<h2 className="text-xl">
													{option.value}
												</h2>
											)}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default ResultQuiz;
