import React, { useState } from "react";

import LoginForm from "components/Authentication/Form/LoginForm";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	return <LoginForm setEmail={setEmail} setPassword={setPassword} />;
};

export default Login;
