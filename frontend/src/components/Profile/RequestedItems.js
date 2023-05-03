import React from "react";
import useRequestProductsContext from "../../hooks/useRequestProductsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../../hooks/useAuthContext";

function RequestedItems({ product }) {
	const { user } = useAuthContext();

	const { dispatch } = useRequestProductsContext();

	const handleClick = async () => {
		if (!user) {
			return;
		}
		const response = await fetch("/api/items/requests/" + product._id, {
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
		<div>
			<div className="w-[350px] text-center my-10 bg-purple-300 border border-purple-200 rounded-lg shadow-purple-400 shadow-xl dark:bg-gray-800 dark:border-gray-700">
				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
						{product.title}
					</h5>
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
		</div>
	);
}

export default RequestedItems;
