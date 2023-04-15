import React from "react";

function UserLoginForm() {
	return (
		<div className="bg-purple-300 h-screen">
			<h1 class="my-10 text-center text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-3xl lg:text-4xl dark:text-white">
				Hey, welcome back!
			</h1>
			<div class="max-w-xl mx-auto p-10 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl">
				<form>
					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-purple-900 dark:text-white">
							Your email
						</label>
						<input
							type="email"
							id="email"
							class="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-purple-900 dark:text-white">
							Your password
						</label>
						<input
							type="password"
							id="password"
							class="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="flex justify-between items-start mb-6">
						<div class="text-center">
							<a
								href="#0"
								class="hover:underline text-sm font-semibold text-purple-900 hover:text-purple-700">
								Forgot Password?
							</a>
						</div>
					</div>
					<div class="text-center">
						<a
							href="/explore"
							class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Login to your account
						</a>
					</div>
					<div class="mt-6 text-sm font-medium text-purple-400 dark:text-gray-300">
						Not registered?
						<a
							href="/signup"
							class="text-purple-700 hover:underline dark:text-blue-500">
							Create account
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UserLoginForm;
