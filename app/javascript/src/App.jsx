import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "components/NavBar";
import Login from "components/Authentication/Login";
import { registerIntercepts } from "apis/axios";
const App = ({ currentUser }) => {
	useEffect(() => {
		registerIntercepts();
	}, []);

	return (
		<Router>
			<ToastContainer />
			<NavBar currentUser={currentUser} />
			<div className="bg-quizzy-bg min-h-screen">
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/" render={() => <div>Home</div>} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
