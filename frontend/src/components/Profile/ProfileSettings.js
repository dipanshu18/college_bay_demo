import React from "react";
import { Link } from "react-router-dom";
import { productCount } from "../../pages/MarketPlace";
import { requestCount } from "../../pages/UserRequests";

function ProfileSettings() {
	const fullName = "Dipanshu Torawane";
	const user = {
		fullName,
		email: "dipanshu.torawane@vit.edu.in",
		phoneNo: "+" + 919876545678,
		college: "Vidyalankar",
		requests: requestCount,
		postedItems: productCount,
	};

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
								{user.fullName}
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Email:
								</span>
								{user.email}
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Phone No.:
								</span>
								{user.phoneNo}
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									<a href="#0">
										<i class="fa-regular fa-pen-to-square"></i>
									</a>
								</span>
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									College:
								</span>
								{user.college}
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Posts:
								</span>
								<Link to="/user-posts">
									<span>{user.postedItems}</span>
								</Link>
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Requests:
								</span>
								<Link to="/user-requests">
									<span>{user.requests}</span>
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
