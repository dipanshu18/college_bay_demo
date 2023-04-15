import React from "react";

function RequestedItems() {
	return (
		<div className="max-w-5xl flex flex-wrap mx-auto items-center justify-around">
			<div className="max-w-md my-10 bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-xl dark:bg-gray-800 dark:border-gray-700">
				<img
					className="rounded-t-lg"
					src="https://flowbite.com/docs/images/products/apple-watch.png"
					alt=""
				/>

				<div className="p-5">
					<a href="/requested-item-info">
						<h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
							Item 1
						</h5>
					</a>
					<p className="text-center mb-3 font-normal text-purple-700 dark:text-gray-400">
						Here are the biggest enterprise technology acquisitions of 2021 so far, in
						reverse chronological order.
					</p>
				</div>

				<div className="text-center mb-6">
					<button
						type="button"
						className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
						Delete
						<span className="ml-3">
							<i class="fa-solid fa-trash-can"></i>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default RequestedItems;
