import ReactDOM from "react-dom";

const Portal = ({ selector = "overlays", children }) => {
	return ReactDOM.createPortal(children, document.getElementById(selector));
};

export default Portal;
