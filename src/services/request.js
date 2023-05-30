import axios from "axios";
import { generateServerOrigin } from "../utils";

const request = axios.create({
	baseURL: generateServerOrigin(),
	withCredentials: true,
});

export default request;
