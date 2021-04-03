import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Loader from "components/Common/Loader";

import quizzesApi from "apis/quiz";
import questionApi from "apis/question";
import publishApi from "apis/publish";

const ShowQuiz = () => {
	const { id } = useParams();
	const [quizDetails, setQuizDetails] = useState("");
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(Boolean);

	const fetchQuizDetails = async () => {
		setLoading(true);
		try {
			const response = await quizzesApi.show(id);
			setQuizDetails(response.data.quiz);
			setQuestions(response.data.questions);
			setLoading(false);
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
			{!loading ? (
				<>
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
						<div className="px-4 py-3 my-2 text-base flex items-center bg-white shadow">
							Published, your public link is -
							<p className="pl-3 text-quizzy-blue font-bold tracking-wide cursor-text">
								{window.location.origin +
									"/public/" +
									quizDetails.slug}
							</p>
						</div>
					) : (
						""
					)}
					<div className="mt-4">
						{questions.length ? (
							questions.map((obj, index) => {
								return (
									<div
										key={index}
										className="mt-5 p-4 border bg-white"
									>
										<div className="flex justify-between items-center pb-3 border-b">
											<h2 className="text-xl">
												<span className="pr-6 font-extrabold">{`Q ${
													index + 1
												}`}</span>
												{obj.question.title}
											</h2>
											<div className="pl-6">
												<Link
													to={`/admin/quizzes/${id}/questions/${obj.question.id}/edit`}
												>
													<i className="ri-pencil-fill text-quizzy-light-gray text-2xl mr-6"></i>
												</Link>
												<button
													onClick={() =>
														destroyQuestion(
															obj.question.id
														)
													}
												>
													<i className="ri-delete-bin-6-fill text-quizzy-error-red text-2xl"></i>
												</button>
											</div>
										</div>
										{obj.options.map((option, i) => {
											return (
												<div
													key={i}
													className="m-2 flex justify-start items-center text-quizzy-light-gray"
												>
													<i className="ri-checkbox-blank-circle-fill text-light-gray pr-4"></i>
													<h2 className="text-base">
														{option.value}
													</h2>
													{option.is_correct ? (
														<span className="pl-5  text-semibold text-quizzy-green">
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
							})
						) : (
							<div className="flex justify-center mt-24">
								<p className="py-12 font-bold text-3xl text-gray-400 tracking-wide">
									Quiz has no questions
								</p>
							</div>
						)}
					</div>
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default ShowQuiz;
