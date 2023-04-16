import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ItemRequestCard from "../components/Request/ItemRequestCard";
import Footer from "../components/Footer";
import useRequestProductsContext from "../hooks/useRequestProductsContext";

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
			<Footer />
		</div>
	);
}

export default RequestedItem;
