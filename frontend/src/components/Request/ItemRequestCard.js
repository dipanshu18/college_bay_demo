import React from "react";

function ItemRequestCard() {
	return (
		<div id="requested-item">
			<div
				id="banner"
				class="flex justify-between w-full p-4 border-b border-purple-200 bg-purple-300 dark:bg-gray-700 dark:border-gray-600">
				<div class="flex items-center mx-auto">
					<p class="flex items-center text-sm font-normal text-purple-500 dark:text-gray-400">
						<span class="inline-flex p-1 mr-3 bg-purple-200 rounded-full dark:bg-gray-600">
							<svg
								class="w-4 h-4 text-purple-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true">
								<path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
							</svg>
							<span class="sr-only">Light bulb</span>
						</span>
						<span class="text-center text-purple-700">
							This is the request section where you add request for the item and
							sellers will be able to see it and comment if it's available. <br />
							Or else they will upvote so that it increases the reach of the post and
							appropriate sellers can contact you.
						</span>
					</p>
				</div>
			</div>
			<div class="max-w-5xl flex flex-wrap mx-auto items-center justify-around">
				<div class="max-w-md my-10 bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-xl dark:bg-gray-800 dark:border-gray-700">
					<img
						class="rounded-t-lg"
						src="https://flowbite.com/docs/images/products/apple-watch.png"
						alt=""
					/>

					<div class="p-5">
						<a href="/requested-item-info">
							<h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
								Item 1
							</h5>
						</a>
						<p class="text-center mb-3 font-normal text-purple-700 dark:text-gray-400">
							Here are the biggest enterprise technology acquisitions of 2021 so far,
							in reverse chronological order.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemRequestCard;
