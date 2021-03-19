import React, { useState } from "react";

import LoginForm from "components/Authentication/Form/LoginForm";
import authApi from "apis/auth";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await authApi.login({
				login: { email, password },
			});
			window.location.href = "/";
		} catch (error) {
			//
		}
	};

	return (
		<LoginForm
			setEmail={setEmail}
			setPassword={setPassword}
			handleSubmit={handleSubmit}
		/>
	);
};

export default Login;
