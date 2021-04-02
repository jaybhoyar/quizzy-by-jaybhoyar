import axios from "axios";

const showQuiz = (public_slug) =>
	axios.get(`/public/${public_slug}/attempts/new`);

const showQuizWithAnswers = (public_slug, id) =>
	axios.get(`/public/${public_slug}/attempts/${id}`);

const create = ({ public_slug, payload }) =>
	axios.post(`/public/${public_slug}/attempts`, payload);

const update = ({ public_slug, id, payload }) =>
	axios.put(`/public/${public_slug}/attempts/${id}`, payload);

const attemptApi = {
	showQuiz,
	showQuizWithAnswers,
	create,
	update,
};

export default attemptApi;
