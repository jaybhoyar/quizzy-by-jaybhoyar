import React from "react";

const Input = ({
	type = "text",
	label,
	value,
	onChange,
	placeholder,
	styles = "",
	required = true,
}) => {
	return (
		<div className={`mt-4 ${styles}`}>
			{label && (
				<label
					className="block text-base font-medium
              leading-5 text-gray-600 py-2 tracking-wide"
				>
					{label}
				</label>
			)}
			<div className="rounded-md shadow-sm">
				<input
					type={type}
					required={required}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className="block w-full px-2 py-2 placeholder-gray-400
					text-gray-900 tracking-wide text-base font-medium
          transition duration-150 ease-in-out border
          border-gray-300 rounded-md appearance-none
          focus:outline-none focus:shadow-outline-poll-blue
          focus:border-blue-300"
				/>
			</div>
		</div>
	);
};

export default Input;
