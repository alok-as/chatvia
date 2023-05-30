import request from "./request";

const User = {
	register(data) {
		return request.post("/user", data);
	},
};

export default User;
