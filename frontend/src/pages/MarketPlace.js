import React, { useEffect } from "react";
import ProductCard from "../components/MarketPlace/ProductCard";
import useProductsContext from "../hooks/useProductsContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuthContext } from "../hooks/useAuthContext";

let productCount = 0;

function MarketPlace() {
	const { user } = useAuthContext();
	const { products, dispatch } = useProductsContext();

	useEffect(() => {
		const fetchProducts = async () => {
			if (!user) {
				return;
			}
			const response = await fetch("/api/items/", {
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

	// productCount = products.map((product) => (productCount += 1));

	return (
		<div id="marketplace">
			<Navbar />
			<div className="my-10 flex flex-col items-center md:flex-row md:justify-center md:mx-auto mx-2 flex-wrap">
				{products &&
					products.map((product) => (
						<ProductCard key={product._id} product={product} user={user} />
					))}
			</div>
			<Footer />
		</div>
	);
}

export { productCount };
export default MarketPlace;
