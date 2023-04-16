import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductDescription from "../components/ProductInfo/ProductDescription";
import Footer from "../components/Footer";
import useProductsContext from "../hooks/useProductsContext";

function ProductInfo() {
	const { products, dispatch } = useProductsContext();

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await fetch("/api/items/" + products._id);
			const productJson = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_PRODUCT", payload: productJson });
			}
		};

		fetchProduct();
	});

	return (
		<div id="product-info">
			<Navbar />
			<ProductDescription product={products} />
			<Footer />
		</div>
	);
}

export default ProductInfo;
