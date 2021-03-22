import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";

const QuestionForm = ({ title, setTitle, handleSubmit = "" }) => {
	const [fields, setFields] = useState([{ value: null }]);

	function handleChange(i, event) {
		const values = [...fields];
		values[i].value = event.target.value;
		setFields(values);
	}

	function handleAdd() {
		const values = [...fields];
		values.push({ value: null });
		setFields(values);
	}

	function handleRemove(i) {
		const values = [...fields];
		values.splice(i, 1);
		setFields(values);
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
			<Input label="Option 1" type="text" placeholder="Science" />
			{fields.map((field, idx) => {
				return (
					<div key={`${field}-${idx}`}>
						<Input
							label="Option 1"
							type="text"
							placeholder="Science"
							onChange={(e) => handleChange(idx, e)}
						/>
						<button
							className=" text-3xl py-3 text-red-600"
							type="button"
							onClick={() => handleRemove(idx)}
						>
							_
						</button>
					</div>
				);
			})}
			{fields.length >= 2 ? (
				""
			) : (
				<button
					type="button"
					className="block py-3 text-base text-blue-600 underline"
					onClick={handleAdd}
				>
					+ Add Option
				</button>
			)}

			<Button type="submit" buttonText="Submit" />
		</form>
	);
};

export default QuestionForm;
