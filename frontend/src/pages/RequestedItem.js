import React from "react";
import Navbar from "../components/Navbar";
import ItemRequestCard from "../components/Request/ItemRequestCard";
import Footer from "../components/Footer";

function RequestedItem() {
	return (
		<div id="requested-items">
			<Navbar />
			<ItemRequestCard />
			<Footer />
		</div>
	);
}

export default RequestedItem;
