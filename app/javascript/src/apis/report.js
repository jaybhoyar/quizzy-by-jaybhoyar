import axios from "axios";

const list = () => axios.get("/reports");

const create = (payload) => axios.post("/reports", payload);

const download = () => axios.get("/reports/new");

const reportsApi = {
	list,
	create,
	download,
};

export default reportsApi;
