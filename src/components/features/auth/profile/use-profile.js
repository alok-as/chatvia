import { useEffect, useState } from "react";

import { useAuthStore } from "../../../../store/auth";
import User from "../../../../services/user";

const dummy = [
	{
		id: "chatvia/6486df88e0a276ae6eccb6de/6492daaeb858a97514301f0a-image3.jpeg",
		url: "http://res.cloudinary.com/ddnzkj5l3/image/upload/v1687345842/chatvia/6486df88e0a276ae6eccb6de/6492daaeb858a97514301f0a-image3.jpeg.webp",
		folder: "chatvia/6486df88e0a276ae6eccb6de",
		filename: "image3.jpeg.webp",
		size: 12.5,
	},
];

const useProfile = () => {
	const [attachments, setAttachments] = useState([]);

	const { profile } = useAuthStore((state) => ({
		profile: state.profile,
	}));

	const getUserAttachmentsHandler = async () => {
		// const { data } = await User.getAttachments();
		// setAttachments(data);
		setAttachments(dummy);
	};

	useEffect(() => {
		getUserAttachmentsHandler();
	}, []);

	return { profile, attachments };
};

export default useProfile;
