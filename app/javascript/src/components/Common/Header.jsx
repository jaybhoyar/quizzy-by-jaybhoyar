import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
	return (
		<div className="flex items-center justify-between h-16">
			<div className="flex items-center">
				<h1 className="text-black font-bold text-2xl">{title}</h1>
			</div>
			<div className="flex items-center justify-between">
				<Link
					to="/admin/quizzes/create"
					className="flex justify-center px-6 py-3
         text-xl font-medium leading-5 text-white transition duration-150
         ease-in-out bg-quizzy-teal border border-transparent rounded-md"
				>
					Add new quiz
				</Link>
			</div>
		</div>
	);
};

export default Header;
