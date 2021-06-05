import React from "react";
import Navbar from "../components/Navbar";

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Site header */}
			<Navbar />
			<main className="flex-grow">{/* contents */}</main>
		</div>
	);
}

export default Home;
