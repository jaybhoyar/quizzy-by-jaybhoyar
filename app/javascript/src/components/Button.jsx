import React from "react";

const Button = ({ type = "button", buttonText, onClick }) => {
	return (
		<div className="mt-5 py-4">
			<button
				type={type}
				onClick={onClick}
				className="flex justify-center px-6 py-3
         text-xl font-medium leading-5 text-white transition duration-150
         ease-in-out bg-quizzy-green border border-transparent rounded-md outline-none"
			>
				{buttonText}
			</button>
		</div>
	);
};

export default Button;
