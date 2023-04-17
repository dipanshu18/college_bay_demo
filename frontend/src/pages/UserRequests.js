import React, { useEffect } from "react";
import RequestedItems from "../components/Profile/RequestedItems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useRequestProductsContext from "../hooks/useRequestProductsContext";

let requestCount = 0;

function UserRequests() {
	const { requestProducts, dispatch } = useRequestProductsContext();

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("/api/items/requests/all");
			const productsJson = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_PRODUCTS", payload: productsJson });
			}
		};

		fetchProducts();
	}, [dispatch]);

	// requestCount = requestProducts.map((product) => (requestCount += 1));

	return (
		<div id="user-requests">
			<Navbar />
			<div className="max-w-5xl flex flex-wrap mx-auto items-center justify-evenly">
				{requestProducts &&
					requestProducts.map((product) => (
						<RequestedItems key={product._id} product={product} />
					))}
			</div>
		</div>
	);
}

export { requestCount };
export default UserRequests;
