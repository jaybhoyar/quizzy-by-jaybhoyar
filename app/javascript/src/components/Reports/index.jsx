import React, { useState, useEffect } from "react";
import reportsApi from "apis/report";

const Reports = () => {
	const [attempts, setAttempts] = useState([]);

	const fetchAttempts = async () => {
		try {
			const response = await reportsApi.list();
			setAttempts(response.data.attempts);
		} catch (error) {
			//
		}
	};

	useEffect(() => {
		fetchAttempts();
	}, []);

	return <div> Reports Here: {console.log(attempts)}</div>;
};

export default Reports;
