import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ItemRequestCard({ product }) {
	return (
		<div id="requested-item">
			<div class="w-[350px] my-10 mx-3 bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-xl dark:bg-gray-800 dark:border-gray-700">
				{/* <img class="rounded-t-lg" src="" alt={product.title} /> */}

				<div class="p-5">
					<h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
						{product.title}
					</h5>
					<div className="flex items-center justify-center">
						<span className="text-sm font-semibold text-purple-900 dark:text-white">
							Requester: {product.requesterName}
						</span>
					</div>
					<div class="flex justify-center items-center mt-4 space-x-3 md:mt-2">
						<a
							href={`https://wa.me/+91${product.phoneNo}`}
							class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-xl px-5 py-4 text-center">
							Contact Requester
							<svg
								aria-hidden="true"
								class="inline w-5 h-5 ml-2 -mr-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"></path>
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
		</div>
	);
}

export default ItemRequestCard;
