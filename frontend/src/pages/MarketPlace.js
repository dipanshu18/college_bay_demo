import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/MarketPlace/ProductCard";
import Footer from "../components/Footer";

function MarketPlace() {
	return (
		<div id="marketplace">
			<Navbar />
			<ProductCard />
			<Footer />
		</div>
	);
}

export default MarketPlace;
