import React, { useEffect } from "react";
import ProductCard from "../components/MarketPlace/ProductCard";
import useProductsContext from "../hooks/useProductsContext";

function MarketPlace() {
	const { products, dispatch } = useProductsContext();

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("/api/items/");
			const productsJson = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_PRODUCTS", payload: productsJson });
			}
		};

		fetchProducts();
	}, [dispatch]);

	return (
		<div id="marketplace">
			<div className="my-10 flex flex-col items-center md:flex-row md:justify-center md:mx-auto mx-2 flex-wrap">
				{products &&
					products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
			</div>
		</div>
	);
}

export default MarketPlace;
