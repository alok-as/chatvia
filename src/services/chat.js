import request from "./request";

const Chat = {
	recents() {
		return request.get("/chat-message");
	},
	initiate(userId) {
		return request.post("/chat-room", {
			userIds: [userId],
		});
	},
	getConversation(roomId, params) {
		return request.get(`/chat-message/${roomId}`, {
			params,
		});
	},
	sendMessage(data) {
		return request.post("/chat-message", data);
	},
};

export default Chat;
