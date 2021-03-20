import React from "react";
import Input from "components/Input";
import Button from "components/Button";

const QuizForm = ({ name, setName, handleSubmit }) => {
	return (
		<form className="mt-8 mx-auto" onSubmit={handleSubmit}>
			<Input
				label="Quiz Name"
				type="text"
				placeholder="Science"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button type="submit" buttonText="Submit" />
		</form>
	);
};

export default QuizForm;
