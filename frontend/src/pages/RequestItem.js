import React from "react";
import ItemRequestForm from "../components/Request/ItemRequestForm";
import Navbar from "../components/Navbar";
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
