import React from "react";
import Navbar from "../components/Navbar";
import BoughtItems from "../components/Profile/BoughtItems";
import Footer from "../components/Footer";

function UserHistory() {
	return (
		<div id="user-history">
			<Navbar />
			<BoughtItems />
			<Footer />
		</div>
	);
}

export default UserHistory;
