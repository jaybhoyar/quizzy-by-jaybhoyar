import axios from "axios";

const create = ({ quiz_id, payload }) =>
	axios.post(`/quizzes/${quiz_id}/questions`, payload);

const update = ({ quiz_id, id, payload }) =>
	axios.post(`/quizzes/${quiz_id}/questions/${id}`, payload);

const questionApi = {
	create,
	update,
};

export default questionApi;
