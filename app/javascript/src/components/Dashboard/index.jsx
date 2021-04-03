import React from "react";

import ListQuizzes from "components/Quiz/ListQuiz";
import Header from "components/Common/Header";

const Dashboard = () => {
	return (
		<div className="py-10 w-2/3 mx-auto">
			<Header title="Quizzes"/>
			<ListQuizzes />
		</div>
	);
};

export default Dashboard;
