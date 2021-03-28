import axios from "axios";

const create = (quiz_id) => axios.post(`/publishes`, quiz_id);

const publishApi = {
	create,
};

export default publishApi;
