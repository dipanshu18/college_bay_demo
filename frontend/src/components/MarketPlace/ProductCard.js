import React from "react";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ProductCard({ product }) {
	return (
		<div className="md:w-1/5 w-4/5 mb-10 mx-4 md:mx-4 bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl dark:bg-gray-800 dark:border-gray-700">
			{/* <img className="p-8 rounded-t-lg" src="" alt={product.title} /> */}
			<div className="px-5 py-5">
				<h5 className="text-3xl font-bold tracking-tight text-purple-900 dark:text-white">
					{product.title}
				</h5>
				<div className="flex items-center justify-between">
					<span className="text-xl font-bold text-purple-900 dark:text-white">
						₹{product.price}
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-sm font-semibold text-purple-900 dark:text-white">
						Location: {product.location}
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-sm font-semibold text-purple-900 dark:text-white">
						Owner: {product.ownerName}
					</span>
				</div>
				<div class="flex mt-4 md:mt-2">
					<a
						href={`https://wa.me/+91${product.phoneNo}`}
						class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-xl px-5 py-4 text-center">
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
				<div className="flex mt-4 items-center justify-between">
					<span className="text-sm font-semibold text-purple-900 dark:text-white">
						{formatDistanceToNow(new Date(product.createdAt), { addSuffix: true })}{" "}
					</span>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
