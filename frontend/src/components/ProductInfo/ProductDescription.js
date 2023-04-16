import React from "react";

function ProductDescription({ product }) {
	return (
		<div class="m-4 rounded-lg max-w-5xl mx-auto">
			<div class="text-center flex flex-col items-center w-full mb-10 bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl dark:bg-gray-800 dark:border-gray-700">
				<img
					class="p-8 rounded-t-lg max-w-md"
					src="https://flowbite.com/docs/images/products/apple-watch.png"
					alt="product image"
				/>
				<h2 class="text-4xl w-1/2 font-extrabold text-purple-900 dark:text-white">
					{product.title}
					<br />
					<span class="text-xl font-semibold text-purple-900 dark:text-white">
						₹{product.price}
					</span>
				</h2>
				<div class="my-4 w-1/2">
					<ul class="my-2 flex text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
						<li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
							Owner = {product.owner}
						</li>
						<li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
							Location = {product.location}
						</li>
					</ul>
				</div>
				<div class="my-4 w-1/2">
					<h2 class="text-4xl font-extrabold text-purple-900 dark:text-white">
						Description
					</h2>
					<p class="text-lg text-purple-500 my-4">{product.description}</p>
				</div>
			</div>

			<div class="flex flex-col justify-center items-center my-10">
				<div class="w-full max-w-sm bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-xl dark:bg-gray-800 dark:border-gray-700">
					<div class="mx-auto flex flex-col items-center pb-10">
						<img
							class="w-24 h-24 my-3 rounded-full shadow-purple-400 shadow-xl"
							src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
							alt="Bonnie image"
						/>
						<h5 class="mb-1 text-xl font-medium text-purple-900 dark:text-white">
							Bonnie Green
						</h5>
						<span class="text-sm text-purple-500 dark:text-gray-400">
							Visual Designer
						</span>
						<div class="flex mt-4 space-x-3 md:mt-2">
							<a
								href=" https://wa.me/+917990582647"
								class="mx-2 mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-xl px-5 py-4 text-center">
								Contact Seller
								<svg
									aria-hidden="true"
									class="inline w-5 h-5 ml-2 -mr-1"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDescription;
