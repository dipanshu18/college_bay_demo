import React from "react";

function ItemPostForm() {
	return (
		<div id="item-post">
			<h1 className="my-4 text-center text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-3xl lg:text-4xl">
				Post about the product
			</h1>
			<div className="bg-purple-300 max-w-4xl mx-auto p-10 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl my-12">
				<form>
					<div className="container flex justify-around flex-col items-center lg:flex-row">
						<label
							className="block text-center my-2 lg:my-auto text-sm text-purple-900"
							for="user_avatar">
							Upload product image
						</label>
						<form
							className="flex justify-around"
							method="post"
							enctype="multipart/form-data">
							<input
								type="file"
								className="block max-w-sm text-sm text-purple-900 border border-purple-300 rounded-lg cursor-pointer bg-purple-50"
								aria-describedby="user_avatar_help"
								id="user_avatar"
								name="img"
							/>
							<div className="inline max-w-fit mx-2 md:mx-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
								<input type="submit" name="submit" value="Upload" />
							</div>
						</form>
					</div>
					<hr className="mt-4 bg-transparent border-0 border-b-2 border-purple-700 appearance-none h-1 max-w-5xl mx-auto" />
					<div className="my-4">
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="floating_title"
								id="floating_title"
								className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_title"
								className="peer-focus:font-medium absolute text-sm text-purple-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Title
							</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="price"
								id="floating_price"
								className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_price"
								className="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Price
							</label>
						</div>
						<div className="grid md:grid-cols-2 md:gap-6">
							<div className="relative z-0 w-full mb-6 group">
								<input
									type="text"
									name="floating_owner"
									id="floating_owner"
									className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_owner"
									className="peer-focus:font-medium absolute text-sm text-purple-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Owner(1st/2nd)
								</label>
							</div>
							<div className="relative z-0 w-full mb-6 group">
								<input
									type="text"
									name="floating_location"
									id="floating_location"
									className="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_location"
									className="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Location
								</label>
							</div>
						</div>
						<div className="">
							<label for="description" className="block mb-2 text-sm text-purple-500 ">
								Product Description
							</label>
							<textarea
								id="description"
								rows="4"
								className="block p-2.5 w-full text-sm text-purple-900 bg-purple-50 rounded-lg border border-purple-300 focus:ring-purple-500 focus:border-purple-500 "
								placeholder="Enter about your product..."></textarea>
						</div>

						<div className="text-center my-5">
							<a
								href="#0"
								className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
								Create Post
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ItemPostForm;
