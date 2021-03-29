import axios from "axios";

const show = (slug) => axios.get(`/attempt/${slug}`);

const attemptApi = {
	show,
};

export default attemptApi;
