import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";

import AuthProvider from "./contexts/auth";
import ProtectedRoute from "./components/features/auth/protected-route";

import "./assets/sass/main.scss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
				</Routes>

				<ToastContainer
					position="bottom-right"
					autoClose={4000}
					newestOnTop={false}
					closeOnClick
					theme="light"
				/>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
