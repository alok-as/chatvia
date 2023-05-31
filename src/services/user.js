import request from "./request";

const User = {
	register(data) {
		return request.post("/user", data);
	},
	login(data) {
		return request.post("/user/login", data);
	},
};

export default User;
