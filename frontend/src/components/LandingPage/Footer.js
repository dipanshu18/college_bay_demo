import React from "react";

function Footer() {
	return (
		<footer className="text-center p-4 bg-purple-300 shadow md:px-6 md:py-8 ">
			<hr className="my-6 border-purple-200 sm:mx-auto  lg:my-8" />
			<span className="block text-sm text-purple-500 sm:text-center ">
				©{" "}
				<a href="#0" className="hover:underline">
					CollegeBay™
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
}

export default Footer;
