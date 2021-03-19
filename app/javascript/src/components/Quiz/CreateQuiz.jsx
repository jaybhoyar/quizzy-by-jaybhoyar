import React, { useState } from "react";

import Input from "components/Input";
import Button from "components/Button";

import quizzesApi from "apis/quiz";

const CreateQuiz = () => {
	const [name, setName] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await quizzesApi.create({
				quiz: { name },
			});
			window.location.href = "/";
		} catch (error) {
			//
		}
	};

	return (
		<div className="w-2/6 mx-auto p-5">
			<h1 className="text-4xl font-bold mx-auto my-8">Add New Quiz</h1>
			<form className="mt-8 mx-auto" onSubmit={handleSubmit}>
				<Input
					label="Quiz Name"
					type="text"
					placeholder="Science"
					onChange={(e) => setName(e.target.value)}
				/>
				<Button type="submit" buttonText="Submit" />
			</form>
		</div>
	);
};

export default CreateQuiz;
