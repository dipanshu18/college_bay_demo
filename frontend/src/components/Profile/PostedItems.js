import React from "react";
import useProductsContext from "../../hooks/useProductsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../../hooks/useAuthContext";

function PostedItems({ product }) {
	const { user } = useAuthContext();
	const { dispatch } = useProductsContext();

	const handleClick = async () => {
		if (!user) {
			return;
		}
		const response = await fetch("/api/items/" + product._id, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		});

		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_PRODUCT", payload: json });
		}
	};

	return (
		<div className="md:w-1/4 w-4/5 mb-10 mx-4 md:mx-4 bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl dark:bg-gray-800 dark:border-gray-700">
			<img className="p-8 rounded-t-lg" src="" alt={product.title} />
			<div className="px-5 pb-5">
				<a href="/product-info">
					<h5 className="text-md font-semibold tracking-tight text-purple-900 dark:text-white">
						{product.title}
					</h5>
				</a>
				<div className="flex items-center justify-between">
					<span className="text-xl font-bold text-purple-900 dark:text-white">
						₹{product.price}
					</span>
				</div>
			</div>
			<div className="text-center mb-6">
				<button
					onClick={handleClick}
					type="button"
					className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
					Delete
					<span className="ml-3">
						<i class="fa-solid fa-trash-can"></i>
					</span>
				</button>
			</div>
			<div className="flex mx-6 my-4 items-center justify-between">
				<span className="text-sm font-semibold text-purple-900 dark:text-white">
					{formatDistanceToNow(new Date(product.createdAt), { addSuffix: true })}{" "}
				</span>
			</div>
		</div>
	);
}

export default PostedItems;
