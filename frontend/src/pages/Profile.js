import React from "react";
import Navbar from "../components/Navbar";
import ProfileSettings from "../components/Profile/ProfileSettings";
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
