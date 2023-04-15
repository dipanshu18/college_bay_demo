import React from "react";
import Navbar from "../components/Navbar";
import ItemRequestInfo from "../components/Request/ItemRequestInfo";
import Footer from "../components/Footer";

function RequestedItemInfo() {
	return (
		<div id="requested-item-info">
			<Navbar />
			<ItemRequestInfo />
			<Footer />
		</div>
	);
}

export default RequestedItemInfo;
