import React from "react";

export const BillHeader = () => {
	return (
		<div className="w-full bg-gray-200 grid grid-cols-8 border-t border-b border-gray-400 font-bold text-sm mt-8 p-2">
			<div className="col-span-3 text-center">Item</div>
			<div className="col-span-1 text-center">HRS/QTY</div>
			<div className="col-span-1 text-center">Rate</div>
			<div className="col-span-1 text-center">Tax</div>
			<div className="col-span-2 text-center">Subtotal</div>
		</div>
	);
};
