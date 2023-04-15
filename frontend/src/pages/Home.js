import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import WhatWeDoSection from "../components/LandingPage/WhatWeDoSection";
import GetStartedSection from "../components/LandingPage/GetStartedSection";
import ComingSoonSection from "../components/LandingPage/ComingSoonSection";

function Home() {
	return (
		<div className="h-screen">
			<Navbar />
			<Header />
			<WhatWeDoSection />
			<GetStartedSection />
			<ComingSoonSection />
			<Footer />
		</div>
	);
}

export default Home;
