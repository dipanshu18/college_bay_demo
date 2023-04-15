import React from "react";

function GetStartedSection() {
	return (
		<section id="get-started" className="bg-white text-center py-[10vh]">
			<h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-purple-900 md:text-3xl lg:text-4xl">
				So what are you waiting for, let's get started
			</h1>
			<div className="my-10">
				<a
					href="/signup"
					className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-bold rounded-lg text-xl px-5 py-4 text-center">
					Count me in
					<svg
						aria-hidden="true"
						className="inline w-5 h-5 ml-2 -mr-1"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"></path>
					</svg>
				</a>
			</div>
		</section>
	);
}

export default GetStartedSection;
