import React from "react";
import PostedItems from "../components/Profile/PostedItems";
import Navbar from "../components/Navbar";
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
