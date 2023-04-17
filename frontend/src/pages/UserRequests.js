import React, { useEffect } from "react";
import RequestedItems from "../components/Profile/RequestedItems";
import Navbar from "../components/Navbar";
import useRequestProductsContext from "../hooks/useRequestProductsContext";
import { useAuthContext } from "../hooks/useAuthContext";

let requestCount = 0;

function UserRequests() {
	const { user } = useAuthContext();
	const { requestProducts, dispatch } = useRequestProductsContext();

	useEffect(() => {
		const fetchProducts = async () => {
			if (!user) {
				return;
			}
			const response = await fetch("/api/items/requests/all", {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const productsJson = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_PRODUCTS", payload: productsJson });
			}
		};

		if (user) {
			fetchProducts();
		}
	}, [dispatch, user]);

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
