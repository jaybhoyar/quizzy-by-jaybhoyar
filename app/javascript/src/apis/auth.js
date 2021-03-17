import axios from "axios";

const login = (payload) => axios.post("/sessions", payload);

const authApi = {
	login,
};

export default authApi;
