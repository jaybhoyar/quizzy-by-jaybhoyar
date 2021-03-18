import axios from "axios";

const create = (payload) => axios.post("/quizzes", payload);

const quizzesApi = {
	create,
};

export default quizzesApi;
