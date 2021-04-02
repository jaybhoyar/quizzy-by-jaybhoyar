import React from "react";

import reportsApi from "apis/report";

const ReportDownload = () => {
	const handleDownloadReport = async () => {
		try {
			await reportsApi.download();
		} catch (error) {
			//
		}
	};
	return (
		<div className="flex justify-center flex-col items-center mt-32">
			<p className="py-12 font-bold text-3xl text-gray-400 tracking-wide">
				Report is now ready for Download
			</p>
			<a
				// onClick={handleDownloadReport}
				href="/reports/new"
				className="flex justify-center px-6 py-3 block 
									text-xl font-medium leading-5 text-white transition 
									bg-quizzy-blue border border-transparent rounded-md"
			>
				Download
			</a>
		</div>
	);
};

export default ReportDownload;
