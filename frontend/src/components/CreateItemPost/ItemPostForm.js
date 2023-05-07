import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

function ItemPostForm() {
	const { user } = useAuthContext();
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [ownerName, setOwnerName] = useState("");
	const [phoneNo, setPhoneNo] = useState("");
	const [error, setError] = useState(null);
	const [location, setLocation] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!user) {
			setError("You must be logged in");
			return;
		}

		const product = { title, price, ownerName, phoneNo, location };

		const response = await fetch("/api/items/", {
			method: "POST",
			body: JSON.stringify(product),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();
		if (response.ok) {
			setTitle("");
			setPrice("");
			setOwnerName("");
			setPhoneNo("");
			setLocation("");
			console.log("new product added:", json);
		}
	};

	return (
		<div id="item-post">
			<h1 className="my-4 text-center text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-3xl lg:text-4xl">
				Post about the product
			</h1>
			<div className="bg-purple-300 max-w-4xl mx-auto p-10 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl my-12">
				<form onSubmit={handleSubmit}>
					{/* <div className="container flex justify-around flex-col items-center lg:flex-row">
						<label
							className="block text-center my-2 lg:my-auto text-sm text-purple-900"
							htmlFor="productImage">
							Upload product image
						</label>
						<form
							className="flex justify-around"
							method="post"
							enctype="multipart/form-data">
							<input
								type="file"
								className="block max-w-sm text-sm text-purple-900 border border-purple-300 rounded-lg cursor-pointer bg-purple-50"
								id="productImage"
								name="productImage"
								onChange={(e) => setProductImage(e.target.value)}
								value={productImage}
							/>
							<div className="inline max-w-fit mx-2 md:mx-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
								<input type="submit" name="submit" value="Upload" />
							</div> 
						</form>
					</div> */}
					<div className="my-4">
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="floating_title"
								id="floating_title"
								onChange={(e) => setTitle(e.target.value)}
								value={title}
								className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								htmlFor="floating_title"
								className="peer-focus:font-medium absolute text-sm text-purple-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Title
							</label>
						</div>

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="price"
								id="floating_price"
								onChange={(e) => setPrice(e.target.value)}
								value={price}
								className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								htmlFor="floating_price"
								className="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Price
							</label>
						</div>

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="floating_owner_name"
								id="floating_owner_name"
								onChange={(e) => setOwnerName(e.target.value)}
								value={ownerName}
								className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								htmlFor="floating_owner_name"
								className="peer-focus:font-medium absolute text-sm text-purple-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Owner Name
							</label>
						</div>

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="floating_phone_no"
								id="floating_phone_no"
								onChange={(e) => setPhoneNo(e.target.value)}
								value={phoneNo}
								className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								htmlFor="floating_phone_no"
								className="peer-focus:font-medium absolute text-sm text-purple-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Phone No.
							</label>
						</div>

						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="floating_location"
								id="floating_location"
								onChange={(e) => setLocation(e.target.value)}
								value={location}
								className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								htmlFor="floating_location"
								className="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Location
							</label>
						</div>

						<div className="text-center pt-5 mt-5">
							<button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
								Create Post
							</button>
						</div>
						<div className="my-4">
							{error && (
								<div className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
									{error}
								</div>
							)}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ItemPostForm;
