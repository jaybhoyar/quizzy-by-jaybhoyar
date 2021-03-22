import React from "react";
import Modal from "react-modal";

const AlertModal = ({ modalStatus, handleClose, quiz, destroyQuiz }) => {
	return (
		<Modal
			style={{
				overlay: {
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "rgba(192,192,192,0.6)",
					zIndex: 1000,
				},
				content: {
					position: "absolute",
					top: "25%",
					left: "50%",
					transform: "translateX(-50%)",
					background: "#fff",
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					borderRadius: "6px",
					outline: "none",
					width: "40%",
					height: "250px",
					padding: "0px !important",
					margin: "0 auto",
				},
			}}
			ariaHideApp={false}
			isOpen={modalStatus}
			onRequestClose={handleClose}
		>
			<div
				className=""
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-headline"
			>
				<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div className="sm:flex sm:items-start py-5 px-4">
						<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
							<svg
								className="h-6 w-6 text-red-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
						</div>
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<h3
								className="text-xl align-middle font-medium text-gray-900"
								id="modal-headline"
							>
								{`Are you sure you want to delete the ${quiz.name} quiz?`}
							</h3>
						</div>
					</div>
				</div>
				<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
					<button
						type="button"
						onClick={() => destroyQuiz(quiz.id)}
						className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
					>
						Delete
					</button>
					<button
						onClick={handleClose}
						type="button"
						className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					>
						Cancel
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default AlertModal;
