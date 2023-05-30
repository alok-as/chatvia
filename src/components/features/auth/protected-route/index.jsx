import { Navigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/auth";

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/login" replace={true} />;
	}

	return children;
};

export default ProtectedRoute;
