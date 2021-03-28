import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import quizzesApi from "apis/quiz";
import questionApi from "apis/question";
import publishApi from "apis/publish";

const ShowQuiz = () => {
	const { id } = useParams();
	const [quizDetails, setQuizDetails] = useState("");
	const [questions, setQuestions] = useState([]);

	const fetchQuizDetails = async () => {
		try {
			const response = await quizzesApi.show(id);
			setQuizDetails(response.data.quiz);
			setQuestions(response.data.questions);
		} catch (error) {
			//
		}
	};

	const destroyQuestion = async (question_id) => {
		try {
			await questionApi.destroy(id, question_id);
			window.location.href = `/admin/quizzes/${id}/show`;
		} catch (error) {
			//
		}
	};

	const publishQuiz = async () => {
		try {
			await publishApi.create({ quiz_id: id });
			fetchQuizDetails();
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
						to={`/admin/quizzes/${quizDetails.id}/questions/create`}
						className="flex justify-center px-6 py-3 text-xl font-medium mr-4 
            leading-5 text-white bg-quizzy-teal border border-transparent rounded-md"
					>
						Add questions
					</Link>
					{!quizDetails.slug && questions.length ? (
						<button
							onClick={publishQuiz}
							className="flex justify-center px-6 py-3 text-xl font-medium 
            leading-5 text-white bg-quizzy-teal border border-transparent rounded-md"
						>
							Publish
						</button>
					) : (
						""
					)}
				</div>
			</div>
			{quizDetails.slug ? (
				<div className="py-3 px-4 text-xl flex items-center">
					Published, your public link is -
					<p className="pl-3 text-quizzy-blue font-bold tracking-wide cursor-pointer">
						{window.location.origin + "/public/" + quizDetails.slug}
					</p>
				</div>
			) : (
				""
			)}
			<div className="mt-4">
				{questions &&
					questions.map((obj, index) => {
						return (
							<div key={index} className="mt-4">
								<div
									keys={index}
									className="p-3 flex justify-start items-center"
								>
									<span className="pr-6">{`Question ${
										index + 1
									}`}</span>
									<h2 className="text-xl">
										{obj.question.title}
									</h2>
									<div className="pl-6">
										<Link
											to={`/admin/quizzes/${id}/questions/${obj.question.id}/edit`}
											className="p-2 mr-3 bg-yellow-500"
										>
											Edit
										</Link>
										<button
											onClick={() =>
												destroyQuestion(obj.question.id)
											}
											className="p-2 mr-3 bg-quizzy-error-red"
										>
											Delete
										</button>
									</div>
								</div>
								{obj.options.map((option, i) => {
									return (
										<div
											key={i}
											className="p-3 flex justify-start items-center"
										>
											<span className="pr-6">{`Option ${
												i + 1
											}`}</span>
											<h2 className="text-xl">
												{option.value}
											</h2>
											{option.is_correct ? (
												<span className="pl-5 text-quizzy-green">
													Correct Answer
												</span>
											) : (
												""
											)}
										</div>
									);
								})}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default ShowQuiz;
