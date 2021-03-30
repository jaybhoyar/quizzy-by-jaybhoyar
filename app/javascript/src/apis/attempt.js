import axios from "axios";

const show = (slug) => axios.get(`/attempt/${slug}`);

const create = (payload) => axios.post("/attempt", payload);

const attemptApi = {
	show,
	create,
};

export default attemptApi;
