import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";

const QuestionForm = ({
	title,
	setTitle,
	options,
	setOptions,
	handleSubmit,
}) => {
	function handleOnChange(e, index) {
		let newArr = [...options];
		newArr[index].value = e.target.value;
		setOptions(newArr);
	}

	return (
		<form className="mt-4 mx-auto" onSubmit={handleSubmit}>
			<Input
				label="Question"
				type="text"
				placeholder="Science"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			{options.map((option, index) => {
				return (
					<Input
						key={index}
						label={`Option ${index}`}
						type="text"
						placeholder=""
						value={option.value}
						onChange={(e) => handleOnChange(e, index)}
					/>
				);
			})}
			<Button type="submit" buttonText="Submit" />
		</form>
	);
};

export default QuestionForm;
