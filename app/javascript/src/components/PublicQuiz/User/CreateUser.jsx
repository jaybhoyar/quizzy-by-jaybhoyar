import React, { useState } from "react";

import UserForm from "components/PublicQuiz/User/UserForm";

const CreateUser = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
	};

	return (
		<UserForm
			firstName={firstName}
			setFirstName={setFirstName}
			lastName={lastName}
			setLastName={setLastName}
			email={email}
			setEmail={setEmail}
			handleSubmit={handleSubmit}
		/>
	);
};

export default CreateUser;
