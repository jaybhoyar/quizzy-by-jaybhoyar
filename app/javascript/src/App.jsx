import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "components/NavBar";
import Login from "components/Authentication/Login";
import Dashboard from "./components/Dashboard";
import CreateQuiz from "./components/Quiz/CreateQuiz";

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
					<Route exact path="/create" component={CreateQuiz} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
