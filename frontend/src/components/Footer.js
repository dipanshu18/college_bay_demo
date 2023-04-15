import React from "react";

function Footer() {
	return (
		<footer className="p-4 bg-purple-300 text-center md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
			<span className="text-sm text-purple-500 sm:text-center dark:text-gray-400">
				© 2023{" "}
				<a href="/home" className="hover:underline">
					CollegeBay™
				</a>
				. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap justify-center items-center mt-3 text-sm text-purple-500 dark:text-gray-400 sm:mt-0">
				<li>
					<a href="/about" className="mr-4 hover:underline md:mr-6">
						About
					</a>
				</li>
				<li>
					<a href="/privacy-policy" className="mr-4 hover:underline md:mr-6">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href="/contact" className="hover:underline">
						Contact
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
