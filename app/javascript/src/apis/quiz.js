import axios from "axios";

const create = (payload) => axios.post("/quizzes", payload);

const quizApi = {
	create,
};

export default quizApi;
