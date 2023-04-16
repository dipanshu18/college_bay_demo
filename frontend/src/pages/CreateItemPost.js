import React from "react";
import ItemPostForm from "../components/CreateItemPost/ItemPostForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CreateItemPost() {
	return (
		<div id="item-post-form">
			<Navbar />
			<ItemPostForm />
			<Footer />
		</div>
	);
}

export default CreateItemPost;
