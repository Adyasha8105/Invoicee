import React from "react";
import {
	FaBeer,
	FaDribbbleSquare,
	FaSketch,
	FaWaze,
	FaAmericanSignLanguageInterpreting,
	FaChalkboardTeacher,
} from "react-icons/fa";

function FeaturesBlocks() {
	return (
		<section className="relative">
			<div
				className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-200 pointer-events-none"
				aria-hidden="true"
			></div>
			<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-white transform translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="md:text-6xl text-4xl font-extrabold leading-tighter tracking-tighter mb-4">
							How Simple works
						</h2>
						<p className="text-xl text-gray-600">Feature block section</p>
					</div>

					<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect className="fill-current text-primary" width="64" height="64" rx="32" />

									<g strokeWidth="2" transform="translate(19.429 20.571)">
										<g className="text-2xl text-gray-600">
											<FaBeer />
										</g>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Initial Contact
							</h4>
							<p className="text-gray-600 text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>

						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect className="fill-current text-primary" width="64" height="64" rx="32" />
									<g strokeWidth="2" transform="translate(19.429 20.571)">
										<g className="text-2xl text-gray-600">
											<FaDribbbleSquare />
										</g>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Discovery Session
							</h4>
							<p className="text-gray-600 text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>

						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect className="fill-current text-primary" width="64" height="64" rx="32" />
									<g strokeWidth="2" transform="translate(19.429 20.571)">
										<g className="text-2xl text-gray-600">
											<FaSketch />
										</g>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Contracting</h4>
							<p className="text-gray-600 text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>

						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect className="fill-current text-primary" width="64" height="64" rx="32" />
									<g transform="translate(22.857 19.429)" strokeWidth="2">
										<g className="text-2xl text-gray-600">
											<FaWaze />
										</g>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Fast Prototyping
							</h4>
							<p className="text-gray-600 text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>

						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect className="fill-current text-primary" width="64" height="64" rx="32" />
									<g strokeWidth="2" transform="translate(19.429 20.571)">
										<g className="text-2xl text-gray-600">
											<FaAmericanSignLanguageInterpreting />
										</g>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Design Phase</h4>
							<p className="text-gray-600 text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>

						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<svg
								className="w-16 h-16 p-1 -mt-1 mb-2"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<rect className="fill-current text-primary" width="64" height="64" rx="32" />
									<g strokeWidth="2" transform="translate(19.429 20.571)">
										<g className="text-2xl text-gray-600">
											<FaChalkboardTeacher />
										</g>
									</g>
								</g>
							</svg>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Develop & Launch
							</h4>
							<p className="text-gray-600 text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturesBlocks;
