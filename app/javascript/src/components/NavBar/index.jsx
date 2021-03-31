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
						<>
							<Link
								to="/admin/reports"
								className="text-base pt-1 pr-4 leading-5 uppercase text-quizzy-gray font-medium	border-gray-600 cursor-pointer"
							>
								Reports
							</Link>
							<h2 className="text-base pt-1 pr-4 leading-5 uppercase text-quizzy-gray font-medium	border-gray-600">
								{`${currentUser.first_name} ${currentUser.last_name}`}
							</h2>
						</>
					) : (
						""
					)}
					{currentUser ? (
						<a
							onClick={handleLogout}
							className="text-base inline-flex items-center pl-3 pt-1 font-medium uppercase leading-5
							text-quizzy-gray cursor-pointer"
						>
							Logout
						</a>
					) : (
						<Link
							to="/login"
							className="inline-flex items-center pl-3 pt-1
												font-semibold text-base uppercase leading-5
												text-quizzy-gray cursor-pointer"
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
