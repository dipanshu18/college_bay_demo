import React from "react";

function BoughtItems() {
	return (
		<div className="my-10 flex flex-col items-center md:flex-row md:justify-center md:mx-auto mx-2 flex-wrap">
			<div className="md:w-1/4 w-4/5 mb-10 mx-4 md:mx-4 bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl dark:bg-gray-800 dark:border-gray-700">
				<img
					className="p-8 rounded-t-lg"
					src="https://flowbite.com/docs/images/products/apple-watch.png"
					alt="product image"
				/>
				<div className="px-5 pb-5">
					<a href="/product-info">
						<h5 className="text-md font-semibold tracking-tight text-purple-900 dark:text-white">
							Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
						</h5>
					</a>
					<div className="flex items-center justify-between">
						<span className="text-xl font-bold text-purple-900 dark:text-white">
							$599
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BoughtItems;
