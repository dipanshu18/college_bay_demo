import React from "react";

function ProfileSettings() {
	const firstName = "Dipanshu";
	const lastName = "Torawane";
	const user = {
		fullName: `${firstName + " " + lastName}`,
		email: "dipanshu.torawane@vit.edu.in",
		phoneNo: "+" + 919876545678,
		college: "Vidyalankar",
		requests: 3,
		postedItems: 2,
	};
	return (
		<div id="profile-settings">
			<div className="flex flex-col justify-center items-center my-10">
				<div className="w-full max-w-lg bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-xl dark:bg-gray-800 dark:border-gray-700">
					<div className="flex flex-col pb-10">
						<div className="my-4 flex justify-center items-center">
							<img
								className="w-24 h-24 my-3 rounded-full shadow-purple-400 shadow-xl"
								src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
								alt="Bonnie image"
							/>
						</div>
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
								<a href="/user-posts">{user.postedItems}</a>
							</p>
							<p className="mb-1 text-md font-medium text-purple-900 dark:text-white">
								<span className="text-sm text-purple-500 dark:text-gray-400 px-4">
									Requests:
								</span>
								<a href="/user-requests">{user.requests}</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileSettings;
