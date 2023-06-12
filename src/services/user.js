import request from "./request";

const User = {
	register(data) {
		return request.post("/user", data);
	},
	login(data) {
		return request.post("/user/login", data);
	},
	getProfile(userId) {
		return request.get(`/user/${userId}`);
	},
};

export default User;
