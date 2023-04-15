import React from "react";
import Navbar from "../components/Navbar";
import ProductDescription from "../components/ProductInfo/ProductDescription";
import Footer from "../components/Footer";

function ProductInfo() {
	return (
		<div id="product-info">
			<Navbar />
			<ProductDescription />
			<Footer />
		</div>
	);
}

export default ProductInfo;
