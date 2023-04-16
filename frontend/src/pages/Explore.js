import MarketPlace from "./MarketPlace";
import ProductInfo from "./ProductInfo";
import CreateItemPost from "./CreateItemPost";
import RequestItem from "./RequestItem";
import RequestedItem from "./RequestedItem";
import RequestedItemInfo from "./RequestedItemInfo";
import UserRequests from "./UserRequests";
import UserHistory from "./UserHistory";
import UserPosts from "./UserPosts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Explore() {
	return (
		<div className="explore">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<MarketPlace />} />
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
			<Footer />
		</div>
	);
}

export default Explore;
