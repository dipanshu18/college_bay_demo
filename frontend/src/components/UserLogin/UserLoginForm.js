import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

function UserLoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(email, password);
	};

	return (
		<div id="user-login">
			<h1 className="my-10 text-center text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-3xl lg:text-4xl dark:text-white">
				Hey, welcome back!
			</h1>
			<div className="bg-purple-300 max-w-xl mx-auto p-10 border border-purple-200 rounded-lg shadow-purple-400 shadow-2xl">
				<form onSubmit={handleSubmit}>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-purple-900 dark:text-white">
							Your email
						</label>
						<input
							type="email"
							id="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-purple-900 dark:text-white">
							Your password
						</label>
						<input
							type="password"
							id="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							value={password}
							className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div className="text-center">
						{/* <Link to="/explore"> */}
						<button
							disabled={isLoading}
							className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Login to your account
						</button>
						{/* </Link> */}
					</div>
					<div className="my-4">
						{error && (
							<div className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
								{error}
							</div>
						)}
					</div>
					<div className="mt-6 text-sm font-medium text-purple-400 dark:text-gray-300">
						Not registered?
						<Link to="/signup">
							<span className="text-purple-700 hover:underline dark:text-blue-500">
								Create account
							</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UserLoginForm;
