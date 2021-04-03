import React from "react";

import Input from "components/Input";
import Button from "components/Button";

const UserForm = ({ setFirstName, setLastName, setEmail, handleSubmit }) => {
	return (
		<div className="w-3/4 mx-auto">
			<form className="mt-8" onSubmit={handleSubmit}>
				<Input
					label="First Name"
					type="text"
					placeholder="Eve"
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<Input
					label="Last Name"
					type="text"
					placeholder="Smith"
					onChange={(e) => setLastName(e.target.value)}
				/>
				<Input
					label="Email"
					type="text"
					placeholder="sam@example.com"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button type="submit" buttonText="Next" />
			</form>
		</div>
	);
};

export default UserForm;
