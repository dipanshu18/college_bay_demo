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

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/signup" element={<UserSignup />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/home" element={<MarketPlace />} />
					<Route path="/explore" element={<MarketPlace />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/post-item" element={<CreateItemPost />} />
					<Route path="/request-item" element={<RequestItem />} />
					<Route path="/requested-items" element={<RequestedItem />} />
					<Route path="/user-requests" element={<UserRequests />} />
					<Route path="/user-posts" element={<UserPosts />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
