import React from "react";

function Footer() {
	return (
		<footer>
			<div class="bg-gray-100 pt-12 px-4 mt-20">
				<div class="mx-auto container flex flex-col items-center justify-center">
					<div>
						<img src={require("../Images/Favicon.svg").default} width="80" height="76" alt="logo" />
					</div>
					<div class="text-black flex flex-col items-center md:f-f-l pt-3">
						<h1 class="text-2xl font-black items-center">Write. Create. Print.</h1>
						<div class="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
							<h2 class="md:mr-6 pb-4 md:py-0 cursor-pointer">Download Now</h2>
							<h2 class="cursor-pointer">License</h2>
						</div>
						<div class="my-6 text-base text-color f-f-l">
							<ul class="md:flex items-center">
								<li class="md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
								<li class="md:mr-6 cursor-pointer pt-4 lg:py-0">Features</li>
								<li class="md:mr-6 cursor-pointer pt-4 lg:py-0">Creators</li>
								<li class="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
							</ul>
						</div>
					</div>
					<div class="w-9/12 h-0.5 bg-white rounded-full"></div>
					<div class="flex justify-between items-center pt-12"></div>
					<div class="text-sm text-color mb-10 f-f-l">
						<p>© 2021 Prodify. All rights reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
