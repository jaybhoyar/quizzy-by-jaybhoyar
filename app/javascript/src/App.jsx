import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavBar from "components/NavBar";

const App = () => {
	return (
		<Router>
			<NavBar />
		</Router>
	);
};

export default App;
