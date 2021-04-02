import axios from "axios";

const list = () => axios.get("/reports");

const create = (payload) => axios.post("/reports", payload);

const reportsApi = {
	list,
	create,
};

export default reportsApi;
