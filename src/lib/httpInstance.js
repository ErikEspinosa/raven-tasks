import axios from "axios";

const httpInstance = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
	timeout: 1000,
});

export default httpInstance;
