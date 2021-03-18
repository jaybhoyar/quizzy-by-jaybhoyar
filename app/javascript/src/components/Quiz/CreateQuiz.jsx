import React, { useState } from "react";
import Toastr from "components/Common/Toastr";

import Input from "components/Input";
import Button from "components/Button";

const CreateQuiz = ({ history }) => {
	const [name, setName] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
	};

	return (
		<div className="w-2/6 mx-auto p-5">
			<h1 className="text-4xl font-bold mx-auto my-8">
				Add New Quiz
			</h1>
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
