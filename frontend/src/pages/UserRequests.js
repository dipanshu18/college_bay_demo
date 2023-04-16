import React from "react";
import RequestedItems from "../components/Profile/RequestedItems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserRequests() {
	return (
		<div id="user-requests">
			<Navbar />
			<RequestedItems />
			<Footer />
		</div>
	);
}

export default UserRequests;
