import React from "react";
import ProfileSettings from "../components/Profile/ProfileSettings";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
	return (
		<div id="profile">
			<Navbar />
			<ProfileSettings />
			<Footer />
		</div>
	);
}

export default Profile;
