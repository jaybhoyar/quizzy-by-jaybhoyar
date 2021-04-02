import React from "react";

const ReportDownload = () => {
	const handleDownloadReport = () => {};
	return (
		<div className="flex justify-center flex-col items-center mt-32">
			<p className="py-12 font-bold text-3xl text-gray-400 tracking-wide">
				Report is now ready for Download
			</p>
			<button
				onClick={handleDownloadReport}
				className="flex justify-center px-6 py-3 block 
									text-xl font-medium leading-5 text-white transition 
									bg-quizzy-blue border border-transparent rounded-md"
			>
				Download
			</button>
		</div>
	);
};

export default ReportDownload;
