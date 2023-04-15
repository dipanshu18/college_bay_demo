import React from "react";
import Navbar from "../components/Navbar";
import ItemRequestForm from "../components/Request/ItemRequestForm";
import Footer from "../components/Footer";

function RequestItem() {
	return (
		<div id="request-item">
			<Navbar />
			<ItemRequestForm />
			<Footer />
		</div>
	);
}

export default RequestItem;
