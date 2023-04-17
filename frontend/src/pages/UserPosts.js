import React, { useEffect } from "react";
import PostedItems from "../components/Profile/PostedItems";
import Navbar from "../components/Navbar";
import useProductsContext from "../hooks/useProductsContext";
import { useAuthContext } from "../hooks/useAuthContext";

function UserPosts() {
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

	return (
		<div id="user-posts">
			<Navbar />
			<div className="my-10 flex flex-col items-center md:flex-row md:justify-center md:mx-auto mx-2 flex-wrap">
				{products &&
					products.map((product) => (
						<PostedItems key={product._id} product={product} />
					))}
			</div>
		</div>
	);
}

export default UserPosts;
