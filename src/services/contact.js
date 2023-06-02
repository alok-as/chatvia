import request from "./request";

const Contact = {
	create(data) {
		return request.post("/contact", data);
	},
	get() {
		return request.get("/contact");
	},
};

export default Contact;
