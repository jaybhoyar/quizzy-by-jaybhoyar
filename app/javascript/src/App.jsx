import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavBar from "components/NavBar";
import Login from "components/Authentication/Login";

const App = () => {
	return (
		<Router>
			<NavBar />
			<div className="bg h-screen">
				<Switch>
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
