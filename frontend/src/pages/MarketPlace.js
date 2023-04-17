import React, { useEffect } from "react";
import ProductCard from "../components/MarketPlace/ProductCard";
import useProductsContext from "../hooks/useProductsContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

let productCount = 0;

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

	// productCount = products.map((product) => (productCount += 1));

	return (
		<div id="marketplace">
			<Navbar />
			<div className="my-10 flex flex-col items-center md:flex-row md:justify-center md:mx-auto mx-2 flex-wrap">
				{products &&
					products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
			</div>
			<Footer />
		</div>
	);
}

export { productCount };
export default MarketPlace;
