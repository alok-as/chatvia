import { Navigate } from "react-router-dom";

import Layout from "../../layout";
import { useAuthStore } from "../../../../store/auth";

const ProtectedRoute = () => {
	const { profile } = useAuthStore();

	if (!profile) {
		return <Navigate to="/login" replace={true} />;
	}

	return <Layout />;
};

export default ProtectedRoute;
