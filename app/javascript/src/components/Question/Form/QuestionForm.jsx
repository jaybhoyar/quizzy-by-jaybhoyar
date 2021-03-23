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
	function handleAddMoreInputs() {
		const newOptions = [...options];
		newOptions.push({ value: "" });
		setOptions(newOptions);
	}

	function handleRemoveInputs(index) {
		const newOptions = [...options];
		newOptions.splice(index, 1);
		setOptions(newOptions);
	}

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
			{options.map((option, index) => (
				<div key={index} className="flex">
					<Input
						label={`Option ${index + 1}`}
						type="text"
						placeholder=""
						value={option.value}
						onChange={(e) => handleOnChange(e, index)}
					/>
					{index >= 2 ? (
						<button
							type="button"
							className="mt-3 text-2xl text-blue"
							onClick={() => handleRemoveInputs(index)}
						>
							-
						</button>
					) : (
						""
					)}
				</div>
			))}
			{options.length < 4 ? (
				<button
					type="button"
					className="mt-3 text-blue underline"
					onClick={() => handleAddMoreInputs()}
				>
					+ Add option
				</button>
			) : (
				""
			)}

			<Button type="submit" buttonText="Submit" />
		</form>
	);
};

export default QuestionForm;
