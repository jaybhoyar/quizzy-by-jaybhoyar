import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import QuestionForm from "components/Question/Form/QuestionForm";
import questionApi from "apis/question";
import quizzesApi from "apis/quiz";

const UpdateQuestion = () => {
	return (
		<div className="w-1/2 mx-auto p-5">
			<h1 className="text-2xl font-bold mt-5">{quizDetails.name}</h1>
			<QuestionForm
				title={title}
				setTitle={setTitle}
				options={options}
				setOptions={setOptions}
				correctOption={correctOption}
				setCorrectOption={setCorrectOption}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default UpdateQuestion;
