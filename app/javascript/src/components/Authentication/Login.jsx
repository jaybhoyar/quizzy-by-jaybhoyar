import React, { useState } from "react";

import LoginForm from "components/Authentication/Form/LoginForm";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	return <LoginForm setUsername={setUsername} setPassword={setPassword} />;
};

export default Login;
