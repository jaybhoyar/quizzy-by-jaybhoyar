import React, { useState } from "react";

import LoginForm from "components/Authentication/Form/LoginForm";
import authApi from "apis/auth";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await authApi.login({
				login: { email, password },
			});
			console.log(response.data);
			window.location.href = "/";
		} catch (error) {
			console.log(error);
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
