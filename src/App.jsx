import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";

import Profile from "./components/features/auth/profile";
import ProtectedRoute from "./components/features/auth/protected-route";

import RecentChats from "./components/features/chat/recent-chats";

import "./assets/sass/main.scss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/app" element={<ProtectedRoute />}>
					<Route index element={<Navigate to="/app/chat" />} />

					<Route path="profile" element={<Profile />} />
					<Route path="chat" element={<RecentChats />} />
					<Route
						path="groups"
						element={<div>This is the chat</div>}
					/>

					<Route path="*" element={<Navigate to="/app/chat" />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />

				<Route path="*" element={<Navigate to="/app/chat" />} />
			</Routes>

			<ToastContainer
				position="bottom-right"
				autoClose={4000}
				newestOnTop={false}
				closeOnClick
				theme="light"
			/>
		</BrowserRouter>
	);
};

export default App;
