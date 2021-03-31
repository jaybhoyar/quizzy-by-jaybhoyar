import axios from "axios";

const show = (slug) => axios.get(`/attempt/${slug}`);

const create = (payload) => axios.post("/attempt", payload);

const update = ({ id, payload }) => axios.put(`/attempt/${id}`, payload);

const attemptApi = {
	show,
	create,
	update,
};

export default attemptApi;
