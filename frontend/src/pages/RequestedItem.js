import React, { useEffect } from "react";
import ItemRequestCard from "../components/Request/ItemRequestCard";
import useRequestProductsContext from "../hooks/useRequestProductsContext";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";

function RequestedItem() {
	const { requestProducts, dispatch } = useRequestProductsContext();

	const { user } = useAuthContext();

	useEffect(() => {
		const fetchRequestProducts = async () => {
			if (!user) {
				return;
			}
			const response = await fetch("/api/items/requests/all", {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const requestProductsJson = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_PRODUCTS", payload: requestProductsJson });
			}
		};

		if (user) {
			fetchRequestProducts();
		}
	}, [dispatch, user]);

	return (
		<div id="requested-items">
			<Navbar />
			<div class="max-w-5xl flex flex-wrap mx-auto items-center justify-around">
				{requestProducts &&
					requestProducts.map((requestProduct) => (
						<ItemRequestCard key={requestProduct._id} product={requestProduct} />
					))}
			</div>
		</div>
	);
}

export default RequestedItem;
