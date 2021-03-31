import axios from "axios";

const show = (slug, id) => axios.get(`/public/${slug}/attempts/${id}`);

const create = ({ slug, payload }) =>
	axios.post(`/public/${slug}/attempts`, payload);

const update = ({ slug, id, payload }) =>
	axios.put(`/public/${slug}/attempts/${id}`, payload);

const attemptApi = {
	show,
	create,
	update,
};

export default attemptApi;
