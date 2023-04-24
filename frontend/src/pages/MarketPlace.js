import React, { useEffect } from "react";
import ProductCard from "../components/MarketPlace/ProductCard";
import useProductsContext from "../hooks/useProductsContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuthContext } from "../hooks/useAuthContext";
import useUsersContext from "../hooks/useUsersContext";

let productCount = 0;

function MarketPlace() {
	const { user } = useAuthContext();
	const { users, dispatchUser } = useUsersContext();
	const { products, dispatch } = useProductsContext();

	useEffect(() => {
		const fetchUsers = async () => {
			if (!user) {
				return;
			}
			const response = await fetch("/api/user/all", {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const usersJson = await response.json();
			console.log(usersJson);

			if (response.ok) {
				dispatchUser({ type: "SET_USERS", payload: usersJson });
			}
		};

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
			fetchUsers();
		}
	}, [dispatch, dispatchUser, user]);

	let userCount = 0;
	return (
		<div id="marketplace">
			<Navbar />
			<div className="my-10 flex flex-col items-center md:flex-row md:justify-center md:mx-auto mx-2 flex-wrap">
				{products &&
					products.map((product) => (
						<ProductCard
							key={product._id}
							product={product}
							user={users[userCount]}
						/>
					))}
				{console.log(users)}
			</div>
		</div>
	);
}

export { productCount };
export default MarketPlace;
