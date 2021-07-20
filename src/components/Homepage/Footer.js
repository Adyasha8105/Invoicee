import React from "react";

function Footer() {
	return (
		<footer>
			<div className="bg-gray-100 pt-12 px-4 mt-20">
				<div className="mx-auto container flex flex-col items-center justify-center">
					<div>
						<img src={require("../../Images/Favicon.svg").default} width="80" height="76" alt="logo" />
					</div>
					<div className="text-black flex flex-col items-center md:f-f-l pt-3">
						<h1 className="text-2xl font-white text-secondary font-extrabold items-center my-4 text-center">Create. Edit. Print.</h1>
						{/* <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
							<h2 className="md:mr-6 pb-4 md:py-0 cursor-pointer">Download Now</h2>
							<h2 className="cursor-pointer">License</h2>
						</div> */}
						{/* <div className="my-8 text-base text-color f-f-l">
							<ul className="md:flex items-center">
								<li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center">About</li>
								<li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center">Features</li>
								<li className="md:mr-6 cursor-pointer pt-4 lg:py-0 text-center">Creators</li>
								<li className="cursor-pointer pt-4 lg:py-0 text-center">License</li>
							</ul>
						</div> */}
					</div>
					<div className="w-9/12 h-0.5 bg-secondary rounded-full opacity-20"></div>
					<div className="flex justify-between items-center pt-10"></div>
					<div className="text-sm text-color  mb-10 f-f-l">
						<p>© 2021 All rights reserved. Made with ♡.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
