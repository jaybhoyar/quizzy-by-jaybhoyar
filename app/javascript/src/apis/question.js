import axios from "axios";

const create = ({ quiz_id, payload }) =>
	axios.post(`/quizzes/${quiz_id}/questions`, payload);

const questionApi = {
	create,
};

export default questionApi;
