import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import Profile from "./pages/Profile";
import MarketPlace from "./pages/MarketPlace";
import ProductInfo from "./pages/ProductInfo";
import CreateItemPost from "./pages/CreateItemPost";
import RequestItem from "./pages/RequestItem";
import RequestedItem from "./pages/RequestedItem";
import RequestedItemInfo from "./pages/RequestedItemInfo";
import UserRequests from "./pages/UserRequests";
import UserHistory from "./pages/UserHistory";
import UserPosts from "./pages/UserPosts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/home" element={<MarketPlace />} />
					<Route path="/signup" element={<UserSignup />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/explore" element={<MarketPlace />} />
					<Route path="/product-info" element={<ProductInfo />} />
					<Route path="/post-item" element={<CreateItemPost />} />
					<Route path="/request-item" element={<RequestItem />} />
					<Route path="/requested-items" element={<RequestedItem />} />
					<Route path="/requested-item-info" element={<RequestedItemInfo />} />
					<Route path="/user-requests" element={<UserRequests />} />
					<Route path="/user-history" element={<UserHistory />} />
					<Route path="/user-posts" element={<UserPosts />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
