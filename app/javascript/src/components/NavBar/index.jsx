import React from "react";
import { Link } from "react-router-dom";

import authApi from "apis/auth";

const NavBar = ({ currentUser }) => {
	console.log(currentUser);

	const handleLogout = async (event) => {
		event.preventDefault();
		try {
			await authApi.logout();
			window.location.href = "/login";
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<nav className="bg-quizzy-navy-blue">
			<div className="flex items-center justify-between h-16">
				<div className="flex items-center ml-6">
					<h1 className="text-white font-bold text-2xl">Quizzy</h1>
				</div>
				<div className="flex items-center justify-between w-1/12 mr-8">
					{currentUser ? (
						<h2 className="text-lg pt-1 pr-3 leading-5 text-quizzy-teal font-medium	border-bb-border border-r">
							{currentUser.first_name}
						</h2>
					) : (
						""
					)}
					{currentUser ? (
						<a
							onClick={handleLogout}
							className="inline-flex items-center pl-3 pt-1 
							transition duration-150 ease-in-out font-medium	text-lg leading-5
							text-white cursor-pointer"
						>
							LogOut
						</a>
					) : (
						<Link
							to="/login"
							className="inline-flex items-center pl-3 pt-1
												transition duration-150 ease-in-out
												font-semibold text-lg leading-5
												text-white cursor-pointer"
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
