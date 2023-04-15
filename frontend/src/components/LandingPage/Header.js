import React from "react";

function Header() {
	return (
		<header id="header" className="text-center py-[15vh]">
			<h1 className="my-4 text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-5xl lg:text-6xl">
				CollegeBay
			</h1>
			<p className="mb-6 text-md font-normal text-purple-500 lg:text-lg sm:px-16 xl:px-48">
				The platform allows college students to buy and sell various items such as
				textbooks, notes, electronic devices, and other supplies that are in good
				condition and can be reused. We provide an easy-to-use platform where
				students can create listings, search for items, and communicate with buyers
				and sellers. This will let students acquire the things they need for college
				while reducing waste and contributing to a sustainable future.
			</p>
			<span className="inline-block animate-bounce rounded-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-center text-white text-sm">
				<svg
					className="w-6 h-6 mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
					/>
				</svg>
			</span>
		</header>
	);
}

export default Header;
