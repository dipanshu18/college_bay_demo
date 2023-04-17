import React from "react";
import ProfileSettings from "../components/Profile/ProfileSettings";
import Navbar from "../components/Navbar";

function Profile() {
	return (
		<div id="profile">
			<Navbar />
			<ProfileSettings />
		</div>
	);
}

export default Profile;
