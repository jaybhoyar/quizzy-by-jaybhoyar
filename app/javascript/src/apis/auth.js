import axios from "axios";

const login = (payload) => axios.post("/sessions", payload);

const logout = () => axios.delete(`/sessions`);

const authApi = {
	login,
	logout,
};

export default authApi;
