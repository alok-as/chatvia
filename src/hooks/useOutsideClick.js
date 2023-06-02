import { useEffect, useRef } from "react";

const useOutsideClick = (onClose) => {
	const ref = useRef();

	const onOutsideClickHandler = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			onClose();
		}
	};

	useEffect(() => {
		window.addEventListener("click", onOutsideClickHandler, true);

		return () => {
			window.removeEventListener("click", onOutsideClickHandler, true);
		};
	}, []);

	return { ref };
};

export default useOutsideClick;
