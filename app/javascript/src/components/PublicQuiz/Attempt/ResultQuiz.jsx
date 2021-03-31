import React from "react";

const ResultQuiz = ({ attemptedAnswers }) => {
	console.log(attemptedAnswers, "----");
	return (
		<div className="py-10 w-full mx-auto">
			results
			{/* {questions &&
				questions.map((obj, index) => {
					return (
						<div key={index} className="mt-4 p-3 border bg-white">
							<div className="flex justify-start items-center">
								<span className="pr-6">{`Question ${
									index + 1
								}`}</span>
								<h2 className="text-xl">
									{obj.question.title}
								</h2>
							</div>
							<div className="pl-20">
								{obj.options.map((option, i) => {
									return (
										<div
											key={i}
											className="p-3 flex justify-start items-center"
										>
											<input
												className="mr-16"
												type="radio"
												name={obj.question.title}
												onChange={() =>
													handleAnswer(
														option,
														obj.question,
														index
													)
												}
												value={option.value}
											/>
											<h2 className="text-xl">
												{option.value}
											</h2>
										</div>
									);
								})}
							</div>
						</div>
					);
				})} */}
		</div>
	);
};

export default ResultQuiz;
