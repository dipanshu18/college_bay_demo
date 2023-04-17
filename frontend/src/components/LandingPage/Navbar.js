import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav class="bg-purple-300 border-purple-200 px-2 sm:px-4 py-6 dark:bg-gray-900">
			<div class="container max-w-6xl flex flex-wrap items-center justify-around mx-auto">
				<Link to="/">
					<span class="flex items-center">
						<span class="self-center text-purple-700 text-xl font-semibold whitespace-nowrap dark:text-white">
							CollegeBay
						</span>
					</span>
				</Link>
				<div class="flex md:order-2">
					<Link to="/signup">
						<span class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Get started
						</span>
					</Link>
					<Link to="/login">
						<span class="text-white mx-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Log In
						</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
