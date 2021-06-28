import React from "react";
import Navbar from "../components/Homepage/Navbar";
import HeroHome from "../components/Homepage/Herohome"
import FeaturesBlock from "../components/Homepage/FeaturesBlock"
import Videoshow from "../components/Homepage/videoshow"
import Footer from "../components/Homepage/Footer"

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Navbar/>
            <main className="flex-grow">
                <HeroHome/>
                <FeaturesBlock/>
                <Videoshow/>
                <Footer/>
            </main>
        </div>
    );
}

export default Home;
