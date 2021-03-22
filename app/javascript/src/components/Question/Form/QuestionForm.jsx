import React from "react";
import Input from "components/Input";
import Button from "components/Button";

const QuestionForm = ({ title, setTitle, handleSubmit = "" }) => {
	return (
		<form className="mt-4 mx-auto" onSubmit={handleSubmit}>
			<Input
				label="Question"
				type="text"
				placeholder="Science"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			{[1, 2, 3, 4].map((_, index) => {
				return (
					<Input
						key={index}
						label={`Option ${index + 1}`}
						type="text"
						placeholder="Science"
					/>
				);
			})}
			<Button type="submit" buttonText="Submit" />
		</form>
	);
};

export default QuestionForm;
