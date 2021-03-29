import React from "react";
import { useParams } from "react-router";

const ShowPublicQuiz = () => {
	const { slug } = useParams();

	return (
		<div className="flex justify-center items-center min-h-screen">
			<h2 className="text-2xl font-bold">Link is accessible</h2>
		</div>
	);
};

export default ShowPublicQuiz;
