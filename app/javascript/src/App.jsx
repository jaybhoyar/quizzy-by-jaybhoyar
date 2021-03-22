import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "components/NavBar";
import Login from "components/Authentication/Login";
import Dashboard from "./components/Dashboard";
import CreateQuiz from "./components/Quiz/CreateQuiz";
import ShowQuiz from "./components/Quiz/ShowQuiz";

import EditQuiz from "./components/Quiz/EditQuiz";

import { registerIntercepts } from "apis/axios";

const App = ({ currentUser }) => {
	useEffect(() => {
		registerIntercepts();
	}, []);

	return (
		<Router histo>
			<ToastContainer />
			<NavBar currentUser={currentUser} />
			<div className="bg-quizzy-bg min-h-screen">
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/quizzes/create" component={CreateQuiz} />
					<Route exact path="/quizzes/:id/show" component={ShowQuiz} />
					<Route exact path="/quizzes/:id/edit" component={EditQuiz} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
