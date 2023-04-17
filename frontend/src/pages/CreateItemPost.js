import React from "react";
import ItemPostForm from "../components/CreateItemPost/ItemPostForm";
import Navbar from "../components/Navbar";

function CreateItemPost() {
	return (
		<div id="item-post-form">
			<Navbar />
			<ItemPostForm />
		</div>
	);
}

export default CreateItemPost;
