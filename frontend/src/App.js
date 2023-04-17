import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import MarketPlace from "./pages/MarketPlace";
import CreateItemPost from "./pages/CreateItemPost";
import RequestItem from "./pages/RequestItem";
import RequestedItem from "./pages/RequestedItem";
import UserRequests from "./pages/UserRequests";
import UserPosts from "./pages/UserPosts";
import Profile from "./pages/Profile";

function App() {
	const { user } = useAuthContext();
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={!user ? <Home /> : <Navigate to="/home" />}
					/>
					<Route path="/signup" element={<UserSignup />} />
					<Route
						path="/login"
						element={!user ? <UserLogin /> : <Navigate to="/home" />}
					/>
					<Route
						path="/home"
						element={user ? <MarketPlace /> : <Navigate to="/" />}
					/>
					<Route
						path="/explore"
						element={user ? <MarketPlace /> : <Navigate to="/" />}
					/>
					<Route
						path="/profile"
						element={user ? <Profile /> : <Navigate to="/" />}
					/>
					<Route
						path="/post-item"
						element={user ? <CreateItemPost /> : <Navigate to="/" />}
					/>
					<Route
						path="/request-item"
						element={user ? <RequestItem /> : <Navigate to="/" />}
					/>
					<Route
						path="/requested-items"
						element={user ? <RequestedItem /> : <Navigate to="/" />}
					/>
					<Route
						path="/user-requests"
						element={user ? <UserRequests /> : <Navigate to="/" />}
					/>
					<Route
						path="/user-posts"
						element={user ? <UserPosts /> : <Navigate to="/" />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
