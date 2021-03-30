import axios from "axios";

const create = (payload) => axios.post("/users", payload);

const usersApi = {
	create,
};

export default usersApi;
