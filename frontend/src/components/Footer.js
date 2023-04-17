import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="p-4 bg-purple-300 text-center md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
			<span className="text-sm text-purple-500 sm:text-center dark:text-gray-400">
				© 2023{" "}
				<Link to="/home">
					<span className="hover:underline">CollegeBay™</span>
				</Link>
				. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap justify-center items-center mt-3 text-sm text-purple-500 dark:text-gray-400 sm:mt-0">
				<li>
					<Link to="/about">
						<span className="mr-4 hover:underline md:mr-6">About</span>
					</Link>
				</li>
				<li>
					<Link to="/privacy-policy">
						<span className="mr-4 hover:underline md:mr-6">Privacy Policy</span>
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<span className="hover:underline">Contact</span>
					</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
