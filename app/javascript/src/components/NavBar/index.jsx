import React from "react";

const NavBar = () => {
	return (
		<nav className="bg-quizzy-navy-blue">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<h1 className="text-white font-bold text-2xl">
							Quizzy
						</h1>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
