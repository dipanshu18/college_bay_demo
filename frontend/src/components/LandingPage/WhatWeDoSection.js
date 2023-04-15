import React from "react";

function WhatWeDoSection() {
	return (
		<section id="what-we-do" className=" bg-purple-300 py-[10vh]">
			<h1 className="text-center text-4xl lg:text-5xl pt-7 font-bold text-purple-900">
				What we do?
			</h1>
			<div className="py-6 flex lg:flex-row lg:justify-center flex-col items-center">
				<div className=" max-w-sm md:mx-4 my-6 bg-white border border-purple-200 rounded-lg shadow-2xl">
					<div className="p-10 text-center">
						<a href="#0">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900">
								Zero Charges
							</h5>
						</a>
						<p className="mb-3 p-2 font-normal text-purple-700 ">
							CollegeBay is a dedicated space where users can find items that are
							available at no cost. CollegeBay encourages users to sell their used
							items and helps other students who may be in need or want them at a
							negotiable cost.
						</p>
					</div>
				</div>
				<div className=" max-w-sm md:mx-4 my-6 bg-white border border-purple-200 rounded-lg shadow-2xl">
					<div className="p-10 text-center">
						<a href="#0">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900">
								Easy Access
							</h5>
						</a>
						<p className="mb-3 p-2 font-normal text-purple-700">
							CollegeBay is designed to provide users with easy access to the items
							they need for college. Users can search for items by keywords, making it
							easy to find what they are looking for.
						</p>
					</div>
				</div>
				<div className=" max-w-sm md:mx-4 my-6 bg-white border border-purple-200 rounded-lg shadow-2xl">
					<div className="p-10 text-center">
						<a href="#0">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900">
								Chat Interaction
							</h5>
						</a>
						<p className="mb-3 p-2 font-normal text-purple-700">
							CollegeBay includes a chat function that allows users to communicate with
							each other in real-time. This feature enables buyers and sellers to
							discuss details about items, negotiate prices, and arrange for pick-up or
							delivery.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhatWeDoSection;
