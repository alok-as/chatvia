import request from "./request";

const Contact = {
	create(data) {
		return request.post("/contact", data);
	},
	get() {
		return request.get("/contact");
	},
	chats() {
		return request.get("/contact/chats");
	},
};

export default Contact;
