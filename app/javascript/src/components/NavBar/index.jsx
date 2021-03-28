import React from "react";
import { Link } from "react-router-dom";

import authApi from "apis/auth";

const NavBar = ({ currentUser }) => {
	const handleLogout = async (event) => {
		event.preventDefault();
		try {
			await authApi.logout();
		} catch (error) {
			//
		} finally {
			window.location.href = "/login";
		}
	};
	return (
		<nav className="bg-quizzy-navy-blue">
			<div className="flex items-center justify-between h-16">
				<div className="flex items-center ml-6">
					<Link to="/" className="text-white font-bold text-2xl">
						Quizzy
					</Link>
				</div>
				<div className="flex items-center justify-between mr-8">
					{currentUser ? (
						<h2 className="text-lg pt-1 pr-3 leading-5 text-quizzy-teal font-medium	border-gray-600 border-r">
							{`${currentUser.first_name} ${currentUser.last_name}`}
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
							Logout
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
