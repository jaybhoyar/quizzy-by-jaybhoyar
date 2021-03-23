import React from "react";
import QuestionInput from "components/Question/Form/QuestionInput";
import Input from "components/Input";

import Button from "components/Button";

const QuestionForm = ({
	title,
	setTitle,
	options,
	setOptions,
	correctOption,
	setCorrectOption,
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
				placeholder="What is the value of pi?"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			{options.map((option, index) => (
				<div
					key={index}
					className="flex items-center justify-start w-full"
				>
					<QuestionInput
						label={`Option ${index + 1}`}
						type="text"
						placeholder={`Option ${index + 1}`}
						value={option.value}
						onChange={(e) => handleOnChange(e, index)}
					/>
					{index >= 2 ? (
						<button
							type="button"
							className=" flex justify-center p-2 rounded-md 
							outline-none text-3xl font-semibold leading-5 text-white 
							bg-quizzy-error-red"
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
					className="mt-3 text-blue-500 font-semibold underline"
					onClick={() => handleAddMoreInputs()}
				>
					+ Add option
				</button>
			) : (
				""
			)}
			<div className="flex justify-start items-center w-full my-5">
				<label
					className="text-base font-medium w-1/5
              leading-5 text-gray-600 py-2 tracking-wide"
				>
					Correct answer
				</label>
				<select
					className="block outline-none px-4 py-2 text-gray-700 shadow-sm rounded-md"
					value={correctOption}
					required={true}
					onChange={(e) => setCorrectOption(e.target.value)}
				>
					<option value="">Select correct option</option>
					{options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.value}
						</option>
					))}
				</select>
			</div>
			<div className=" mt-6 flex justify-center items-center pr-12">
				<Button type="submit" buttonText="Submit" />
			</div>
		</form>
	);
};

export default QuestionForm;
