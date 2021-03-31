import React, { useState } from "react";
import { useParams } from "react-router-dom";

import UserForm from "components/PublicQuiz/User/UserForm";
import attemptApi from "apis/attempt";

const CreateUser = ({ setParticipant, setAttempt, setStage }) => {
	const { slug } = useParams();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await attemptApi.create({
				slug,
				payload: {
					user: { first_name: firstName, last_name: lastName, email },
				},
			});
			setAttempt(response.data.attempt);
			setParticipant(response.data.user);
			setStage("ATTEMPTQUIZ");
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
