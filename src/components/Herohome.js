import React from "react";

function HeroHome() {
	return (
		<section className="relative">
			<div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
				aria-hidden="true"
			>
				<svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#FECCCB" offset="77.402%" />
							<stop stopColor="#FECCCB" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1232" cy="48" r="128" />
						<circle cx="155" cy="343" r="64" />
						<circle cx="944" cy="540" r="65" />
					</g>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					<div className="text-center pb-12 md:pb-16">
						<h1
							className="text-8xl font-extrabold leading-tighter tracking-tighter mb-4"
							data-aos="zoom-y-out"
						>
							Online Invoice <br/>
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-black-400">
								Generator
							</span>
						</h1>
						<div className="max-w-3xl mx-auto">
							<p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              It allows you rapidly to make invoices with our attractive invoice templates for various fields.
              The invoices you make can be saved and downloaded as a PDF. <br />
              <p className="font-bold my-2">Did we say its free of cost!</p>
							</p>
							<div
								className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
								data-aos="zoom-y-out"
								data-aos-delay="300"
							>
								<div>
									<button className="bg-black text-white font-bold rounded-md py-3 px-6 hover:bg-pink-700 w-full mb-4 sm:w-auto sm:mb-0">
										Create Now
									</button>
								</div>
								<div>
									<button className="bg-black text-white font-bold rounded-md py-3 px-6 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">
										Learn more
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;
