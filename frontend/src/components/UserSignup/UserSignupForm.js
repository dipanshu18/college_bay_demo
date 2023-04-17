import React from "react";
import { Link } from "react-router-dom";

function UserSignupForm() {
	return (
		<div class="bg-purple-300">
			<h1 class="my-4 text-center text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-3xl lg:text-4xl dark:text-white">
				Let's get started
			</h1>
			<h2 class="my-4 text-center text-3xl font-extrabold leading-none tracking-tight text-purple-900 md:text-xl lg:text-2xl dark:text-white">
				Create an account
			</h2>
			<div class="max-w-xl mx-auto p-10 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl">
				<form>
					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-purple-900 dark:text-white">
							Email address
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
							Password
						</label>
						<input
							type="password"
							id="password"
							class="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="fullName"
							class="block mb-2 text-sm font-medium text-purple-900 dark:text-white">
							Full Name
						</label>
						<input
							type="text"
							id="fullName"
							class="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="phoneNo"
							class="block mb-2 text-sm font-medium text-purple-900 dark:text-white">
							Phone (Don't add +91)
						</label>
						<input
							type="tel"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							id="phoneNo"
							class="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="college"
							class="block mb-2 text-sm font-medium text-purple-900 dark:text-white">
							College
						</label>
						<input
							type="text"
							id="college"
							class="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="text-center mt-4">
						<a
							href="#0"
							class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Create
						</a>
					</div>
					<div class="mt-2 text-sm font-medium text-purple-400 dark:text-gray-300">
						Already have an account?
						<Link to="/login">
							<span class="text-purple-700 hover:underline dark:text-blue-500">
								Log In
							</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UserSignupForm;
