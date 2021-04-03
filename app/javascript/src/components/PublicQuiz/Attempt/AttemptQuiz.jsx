import React from "react";

import Button from "components/Button";
const AttemptQuiz = ({ questions, handleAnswer, handleSubmit }) => {
	return (
		<div className="py-10 w-full mx-auto">
			{questions.length ? (
				<form className="mt-2" onSubmit={handleSubmit}>
					{questions.map((obj, index) => {
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
												className="p-2 flex justify-start items-center hover:bg-gray-300 hover:shadow"
											>
												<h2 className="text-xl">
													<input
														className="mr-16"
														type="radio"
														name={
															obj.question.title
														}
														onChange={() =>
															handleAnswer(
																option,
																obj.question,
																index
															)
														}
														value={option.value}
													/>
													{option.value}
												</h2>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
					<div className=" mt-4 flex justify-center items-center pr-12">
						<Button type="submit" buttonText="Submit" />
					</div>
				</form>
			) : (
				<div className="flex justify-center mt-24">
					<p className="py-12 font-bold text-3xl text-gray-400 tracking-wide">
						Quiz has no questions
					</p>
				</div>
			)}
		</div>
	);
};

export default AttemptQuiz;
