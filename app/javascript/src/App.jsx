import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavBar from "components/NavBar";
import Login from "components/Authentication/Login";

const App = ({ currentUser }) => {
	return (
		<Router>
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
