import React, { useState, useEffect } from "react";

import reportsApi from "apis/report";
import PageLoader from "components/PageLoader";
import Table from "components/Reports/Table";

const Reports = () => {
	const [attempts, setAttempts] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchAttempts = async () => {
		try {
			const response = await reportsApi.list();
			setAttempts(response.data.attempts);
		} catch (error) {
			//
		}
	};

	const handleGenerateReport = async () => {
		try {
			setLoading(true);
			const res = await reportsApi.create(attempts);
			if (res.status == 200) {
				setLoading(false);
				window.location.href = "/admin/reports/download";
			}
		} catch (error) {
			//
		}
	};

	useEffect(() => {
		fetchAttempts();
	}, []);

	const columns = [
		{
			Header: "Quiz Name",
			accessor: "quiz.name",
		},
		{
			Header: "User name",
			accessor: (row) => `${row.user.first_name} ${row.user.last_name}`,
		},
		{
			Header: "Email",
			accessor: "user.email",
		},
		{
			Header: "Correct Answers",
			accessor: "attempt.correct_answers_count",
		},
		{
			Header: "Incorrect Answers",
			accessor: "attempt.incorrect_answers_count",
		},
	];

	if (loading) {
		return (
			<PageLoader message="Your Report is being prepared for downloding..." />
		);
	}

	return (
		<div>
			{attempts.length ? (
				<div className="py-4 w-3/4 mx-auto">
					<div className="flex items-center justify-between h-16 mb-4">
						<div className="flex items-center">
							<h1 className="text-black font-bold text-2xl">
								Reports
							</h1>
						</div>
						<div className="flex items-center justify-between">
							<button
								onClick={handleGenerateReport}
								className="flex justify-center px-6 py-3
									text-xl font-medium leading-5 text-white transition 
									bg-quizzy-teal border border-transparent rounded-md"
							>
								Download
							</button>
						</div>
					</div>
					<Table data={attempts} columns={columns} />
				</div>
			) : (
				<div className="flex justify-center mt-24">
					<p className="py-12 font-bold text-3xl text-gray-400 tracking-wide">
						No Reports Founds.
					</p>
				</div>
			)}
		</div>
	);
};

export default Reports;
