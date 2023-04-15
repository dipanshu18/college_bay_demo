import React from "react";

function UserSignupForm() {
	return (
		<div class="bg-purple-300 h-screen">
			<h1 class="my-4 text-center text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-3xl lg:text-4xl dark:text-white">
				Let's get started
			</h1>
			<h2 class="my-4 text-center text-3xl font-extrabold leading-none tracking-tight text-purple-900 md:text-xl lg:text-2xl dark:text-white">
				Create an account
			</h2>
			<div class="max-w-xl mx-auto p-10 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl">
				<form>
					<div class="relative z-0 w-full mb-6 group">
						<input
							type="email"
							name="floating_email"
							id="floating_email"
							class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_email"
							class="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Email address
						</label>
					</div>
					<div class="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="floating_password"
							id="floating_password"
							class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_password"
							class="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Password
						</label>
					</div>
					<div class="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="floating_first_name"
							id="floating_first_name"
							class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_first_name"
							class="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Full Name
						</label>
					</div>
					<div class="grid md:grid-cols-2 md:gap-6">
						<div class="relative z-0 w-full mb-6 group">
							<input
								type="tel"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								name="floating_phone"
								id="floating_phone"
								class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_phone"
								class="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Phone number (Don't add +91)
							</label>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="floating_company"
								id="floating_company"
								class="block py-2.5 px-0 w-full text-sm text-purple-900 bg-transparent border-0 border-b-2 border-purple-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_company"
								class="peer-focus:font-medium absolute text-sm text-purple-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								College (Ex. Vidyalankar)
							</label>
						</div>
					</div>
					<div className="container flex justify-around flex-col items-center lg:flex-row">
						<label
							className="block text-center my-2 lg:my-auto text-sm text-purple-900"
							for="user_avatar">
							Upload profile image
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
					<div class="text-center mt-10">
						<a
							href="#0"
							class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Create
						</a>
					</div>
				</form>
			</div>

			<div class="text-center py-10 text-purple-900">
				<p>
					Already have an account?
					<a href="/login" class="underline hover:text-purple-700">
						Log In
					</a>
				</p>
			</div>
		</div>
	);
}

export default UserSignupForm;
