import React, { useEffect } from "react";
import ItemRequestCard from "../components/Request/ItemRequestCard";
import useRequestProductsContext from "../hooks/useRequestProductsContext";
import Navbar from "../components/Navbar";

function RequestedItem() {
	const { requestProducts, dispatch } = useRequestProductsContext();

	useEffect(() => {
		const fetchRequestProducts = async () => {
			const response = await fetch("/api/items/requests/all");
			const requestProductsJson = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_PRODUCTS", payload: requestProductsJson });
			}
		};

		fetchRequestProducts();
	}, [dispatch]);

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
