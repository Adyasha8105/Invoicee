import React from "react";
import Navbar from "../components/Homepage/Navbar";
import HeroHome from "../components/Homepage/Herohome"
import FeaturesBlock from "../components/Homepage/FeaturesBlock"
import Creators from "../components/Homepage/creators"
import Footer from "../components/Homepage/Footer"

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Navbar/>
            <main className="flex-grow">
                <HeroHome/>
                <FeaturesBlock/>
                <Creators/>
                <Footer/>
            </main>
        </div>
    );
}

export default Home;
