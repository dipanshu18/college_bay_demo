import React, { useEffect } from "react";
import ItemRequestCard from "../components/Request/ItemRequestCard";
import useRequestProductsContext from "../hooks/useRequestProductsContext";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import useUsersContext from "../hooks/useUsersContext";

function RequestedItem() {
	const { requestProducts, dispatch } = useRequestProductsContext();
	const { users, dispatchUser } = useUsersContext();
	const { user } = useAuthContext();

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

		const fetchRequestProducts = async () => {
			if (!user) {
				return;
			}
			const response = await fetch("/api/items/requests/all", {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const requestProductsJson = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_PRODUCTS", payload: requestProductsJson });
			}
		};

		if (user) {
			fetchRequestProducts();
			fetchUsers();
		}
	}, [dispatch, dispatchUser, user]);

	return (
		<div id="requested-items">
			<Navbar />
			<div className="my-10 flex flex-col items-center md:flex-row md:justify-center md:mx-auto mx-2 flex-wrap">
				{requestProducts &&
					requestProducts.map((requestProduct) => (
						<ItemRequestCard key={requestProduct._id} product={requestProduct} />
					))}
			</div>
		</div>
	);
}

export default RequestedItem;
