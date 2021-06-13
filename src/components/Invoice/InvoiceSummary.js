import React from "react";

const InvoiceSummary = () => {
	return (
		<div className="md:w-1/2 w-full flex-col mb-4">
			<div className="w-full bg-gray-200 border-t border-b border-gray-400 font-bold text-sm mt-8 p-2 text-center">
				Invoice Summary
			</div>
			<div className="text-gray-600 text-sm px-2">
				<div className="py-2 border-b border-gray-300">Subtotal</div>
				<div className="py-2 border-b border-gray-300">Tax</div>
				<div className="py-2 border-b border-gray-300">
					<div className="flex flex-row">
						Total
						{/* Add a currency dropdown here */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvoiceSummary;
