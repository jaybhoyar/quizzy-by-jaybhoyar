import React from "react";

const QuestionInput = ({
	type = "text",
	label,
	value,
	onChange,
	placeholder,
	required = true,
}) => {
	return (
		<div className="flex justify-start items-center w-9/12 my-5">
			{label && (
				<label
					className="text-base font-medium w-1/5
              leading-5 text-gray-600 py-2 tracking-wide"
				>
					{label}
				</label>
			)}
				<input
					type={type}
					required={required}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className="block w-3/4 px-2 py-2 text-gray-700 shadow-sm rounded-md placeholder-gray-400
					text-gray-900 tracking-wide text-base font-normal	border
          border-gray-300 rounded-md appearance-none
          focus:outline-none focus:border-blue-600"
				/>
		</div>
	);
};

export default QuestionInput;
