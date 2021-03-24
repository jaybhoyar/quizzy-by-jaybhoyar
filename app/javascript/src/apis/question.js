import axios from "axios";

const create = ({ quiz_id, payload }) =>
	axios.post(`/quizzes/${quiz_id}/questions`, payload);

const show = (quiz_id, id) => axios.get(`/quizzes/${quiz_id}/questions/${id}`);

const update = ({ quiz_id, id, payload }) =>
	axios.put(`/quizzes/${quiz_id}/questions/${id}`, payload);

const questionApi = {
	create,
	update,
	show,
};

export default questionApi;
