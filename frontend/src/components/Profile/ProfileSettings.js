import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import useUsersContext from "../../hooks/useUsersContext";

function ProfileSettings() {
	const { user } = useAuthContext();
	const { users, dispatchUser } = useUsersContext();

	useEffect(() => {
		const fetchUser = async () => {
			if (!user) {
				return;
			}
			const response = await fetch("/api/user/" + users._id, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const userJson = await response.json();

			if (response.ok) {
				dispatchUser({ type: "SET_USER", payload: userJson });
			}
		};

		if (user) {
			fetchUser();
		}
	}, [dispatchUser, user]);

	return (
		<div id="profile-settings">
			<div className="flex flex-col justify-center items-center my-10">
				<div className="w-full max-w-lg bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-xl dark:bg-gray-800 dark:border-gray-700">
					<div className="flex flex-col mt-10 pb-10">
						<div className="mx-auto">
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Name:
								</span>
								{users.fullName}
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Email:
								</span>
								{users.email}
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Phone No.:
								</span>
								{users.phoneNo}
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									College:
								</span>
								{users.college}
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Posts:
								</span>
								<Link to="/user-posts">
									<span>{users.postedItems}</span>
								</Link>
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Requests:
								</span>
								<Link to="/user-requests">
									<span>{users.requests}</span>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileSettings;
