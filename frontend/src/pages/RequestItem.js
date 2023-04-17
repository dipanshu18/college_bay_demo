import React from "react";
import ItemRequestForm from "../components/Request/ItemRequestForm";
import Navbar from "../components/Navbar";

function RequestItem() {
	return (
		<div id="request-item">
			<Navbar />
			<ItemRequestForm />
		</div>
	);
}

export default RequestItem;
