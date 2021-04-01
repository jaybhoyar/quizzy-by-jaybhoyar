import axios from "axios";

const list = () => axios.get("/reports");

const reportsApi = {
	list,
};

export default reportsApi;
