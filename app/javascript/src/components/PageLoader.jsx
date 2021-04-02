import React from "react";

const PageLoader = ({ message = "Loading" }) => {
	return (
		<div className="flex flex-row items-center justify-center w-screen h-screen">
			<h1 className="text-lg leading-5">{message}</h1>
		</div>
	);
};

export default PageLoader;
