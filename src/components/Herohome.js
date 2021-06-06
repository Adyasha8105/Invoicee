import React from "react";

function HeroHome() {
    let primaryThemeColor = "#FECCCB";
    return (
        <section className="relative">
            <div
                className="absolute"
                aria-hidden="true"
            >
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%"/>
                            <stop stopColor={primaryThemeColor} offset="77.402%"/>
                            <stop stopColor={primaryThemeColor} offset="100%"/>
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="48" r="128"/>
                        <circle cx="255" cy="343" r="64"/>
                        <circle cx="1232" cy="540" r="65"/>
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="pt-28 pb-12 md:pt-40 md:pb-20">
                    <div className="text-center pb-12 md:pb-16">
                        <h1
                            className="md:text-8xl text-7xl font-extrabold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                        >
                            Online Invoice <br/>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-200">
								Generator
							</span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-gray-600 my-8" data-aos="zoom-y-out" data-aos-delay="150">
                                It allows you rapidly to make invoices with our attractive invoice templates for various
                                fields.
                                The invoices you make can be saved and downloaded as a PDF. <br/>
                                <p className="font-bold my-2">Did we say its free of cost!</p>
                            </p>
                            <div
                                className="flex md:flex-row flex-col md:justify-center md:space-x-7"
                            >
                                <button
                                    className="bg-primary text-black font-bold rounded-md py-3 px-6 transition-all duration-200 ease-in-out w-full mb-4 md:w-auto md:mb-0 hover:opacity-75">
                                    Create Now
                                </button>
                                <button
                                    className="bg-black text-white font-bold rounded-md py-3 px-6 w-full md:w-auto transition-all duration-200 ease-in-out hover:opacity-75">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
