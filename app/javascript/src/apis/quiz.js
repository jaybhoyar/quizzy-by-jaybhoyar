import axios from "axios";

const list = () => axios.get("/quizzes");

const create = (payload) => axios.post("/quizzes", payload);

const update = ({ id, payload }) => axios.put(`/quizzes/${id}`, payload);

const quizzesApi = {
	list,
	create,
	update,
};

export default quizzesApi;
