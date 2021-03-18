import React from "react";

import Input from "components/Input";
import Button from "components/Button";

const LoginForm = ({ handleSubmit, setEmail, setPassword }) => {
	return (
		<div className="flex pt-12 justify-center min-h-screen px-8">
			<div className="w-full max-w-md">
				<h2
					className="mt-6 text-4xl font-extrabold leading-9
         text-center text-bb-gray-700"
				>
					Login
				</h2>
				<form className="mt-8" onSubmit={handleSubmit}>
					<Input
						label="Email"
						type="text"
						placeholder="oliver@example.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						label="Password"
						type="password"
						placeholder="********"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit" buttonText="Submit" />
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
