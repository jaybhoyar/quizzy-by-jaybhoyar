import axios from "axios";

const showQuiz = (slug) => axios.get(`/public/${slug}/attempts/new`);

const showQuizWithAnswers = (slug, id) =>
	axios.get(`/public/${slug}/attempts/${id}`);

const create = ({ slug, payload }) =>
	axios.post(`/public/${slug}/attempts`, payload);

const update = ({ slug, id, payload }) =>
	axios.put(`/public/${slug}/attempts/${id}`, payload);

const attemptApi = {
	showQuiz,
	showQuizWithAnswers,
	create,
	update,
};

export default attemptApi;
