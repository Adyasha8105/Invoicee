import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/Herohome"
import FeaturesBlock from "../components/FeaturesBlock"
import Creators from "../components/creators"

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			{/*  Site header */}
			<Navbar />
			<main className="flex-grow">
        <HeroHome />
				<FeaturesBlock />
				<Creators />
      </main>
		</div>
	);
}

export default Home;
