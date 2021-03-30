import React, { useState } from "react";

import UserForm from "components/PublicQuiz/User/UserForm";
import usersApi from "apis/user";

const CreateUser = ({ setParticipant }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await usersApi.create({
				user: { first_name: firstName, last_name: lastName, email },
			});
			setParticipant(response.data.user);
		} catch (error) {
			//
		}
	};

	return (
		<UserForm
			setFirstName={setFirstName}
			setLastName={setLastName}
			setEmail={setEmail}
			handleSubmit={handleSubmit}
		/>
	);
};

export default CreateUser;
