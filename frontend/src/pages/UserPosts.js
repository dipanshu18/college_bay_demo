import React from "react";
import Navbar from "../components/Navbar";
import PostedItems from "../components/Profile/PostedItems";
import Footer from "../components/Footer";

function UserPosts() {
	return (
		<div id="user-posts">
			<Navbar />
			<PostedItems />
			<Footer />
		</div>
	);
}

export default UserPosts;
