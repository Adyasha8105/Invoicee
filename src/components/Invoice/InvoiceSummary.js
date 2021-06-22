import React, { useState } from "react";
import { useSelector } from "react-redux";

const InvoiceSummary = () => {
	const currencySymbol = useSelector((state) => state.currencySymbol.currency);
	const [input, setInput] = useState({
		tax: "0",
	});

	function onChangeHandler(evt) {
		const value = evt.target.value;
		setInput({
			...input,
			[evt.target.name]: value,
		});
	}

	return (
		<div>
			<div className="w-full bg-gray-200 border-t border-b border-gray-400 font-bold text-sm mt-8 p-2 text-center">
				Invoice Summary
			</div>
			<div className="text-gray-600 text-sm px-2">
				<div className="py-2 border-b border-gray-300 flex">
					<div className="w-4/5">Subtotal</div>
					<div className="ml-2">{currencySymbol}&nbsp;2078</div>
				</div>
				<div className="py-2 border-b border-gray-300 flex">
					<div className="text-sm w-4/5">
						Tax
						<input
							type="Text"
							className="mx-1 px-1 col-span-1 border border-gray-300 w-12"
							name="tax"
							value={input.tax}
							onChange={onChangeHandler}
						/>
						%
					</div>
					<div className="ml-2">{currencySymbol}&nbsp;2078</div>
				</div>
				<div className="py-2 border-b border-gray-300 flex">
					<div className="w-4/5">Total</div>
					<div className="ml-2">{currencySymbol}&nbsp;2078</div>
				</div>
			</div>
		</div>
	);
};

export default InvoiceSummary;
