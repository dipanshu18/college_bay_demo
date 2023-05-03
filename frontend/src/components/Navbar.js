import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
	const { logout } = useLogout();

	const handleClick = () => {
		logout();
	};

	return (
		<nav className="bg-purple-300 border-purple-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
			<div className="container max-w-6xl flex flex-wrap items-center justify-around mx-auto">
				<Link to="/home">
					<div className="flex items-center">
						<span className="self-center text-purple-700 text-xl font-semibold whitespace-nowrap dark:text-white">
							College<span className="underline">Bay</span>
						</span>
					</div>
				</Link>
				<div className="flex items-center md:order-2">
					<Link to="/profile">
						<div className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Manage
						</div>
					</Link>
					<div className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 ">
						<button onClick={handleClick}>Log out</button>
					</div>
					<button
						data-collapse-toggle="navbar-cta"
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-cta"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"></path>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-cta">
					<ul className="flex flex-col p-4 mt-4 border border-purple-100 rounded-lg bg-purple-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-purple-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<Link to="/home">
								<span className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white">
									Home
								</span>
							</Link>
						</li>
						<li>
							<Link to="/request-item">
								<span className="block py-2 pl-3 pr-4 text-purple-500 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
									Request
								</span>
							</Link>
						</li>
						<li>
							<Link to="/post-item">
								<span className="block py-2 pl-3 pr-4 text-purple-500 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
									Post
								</span>
							</Link>
						</li>
						<li>
							<Link to="/requested-items">
								<span className="block py-2 pl-3 pr-4 text-purple-500 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
									Requested Items
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
