import React from "react";
import Navbar from "../components/Navbar";
import ItemRequestInfo from "../components/Request/ItemRequestInfo";

function RequestedItemInfo() {
	return (
		<div id="requested-item-info">
			<Navbar />
			<ItemRequestInfo />
		</div>
	);
}

export default RequestedItemInfo;
