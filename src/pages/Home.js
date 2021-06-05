import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/Herohome"

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Site header */}
			<Navbar />
			<main className="flex-grow">
        <HeroHome />
      </main>
		</div>
	);
}

export default Home;