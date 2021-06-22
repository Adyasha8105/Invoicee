import React, { useState } from "react";
import { useSelector } from "react-redux";

const InvoiceSummary = () => {
	const currencySymbol = useSelector((state) => state.currencySymbol.currency);

    const subtotalList = useSelector((state) => state.billReducer.billItems);

    const discount = useSelector((state) => state.sideBarReducer.discount);
    console.log(discount); 
    const vat = useSelector((state) => state.sideBarReducer.vat); 

    const [tax, setTax] = useState(0); 
    const [input, setInput] = useState({
        tax: 0,
    });

    var subtotal = 0;
    subtotalList.forEach((val) => {
        subtotal = subtotal + Number(val.subtotal); 
    });
    console.log(subtotal); 


	function onChangeHandler(evt) {
		const value = evt.target.value;
		setInput({
			...input,
			[evt.target.name]: value,
		});

        var tempTax = subtotal * value * 0.01; 
        setTax(tempTax.toFixed(2)); 

	}

	return (
		<div>
			<div className="w-full bg-gray-200 border-t border-b border-gray-400 font-bold text-sm mt-8 p-2 text-center">
				Invoice Summary
			</div>
			<div className="text-gray-600 text-sm px-2">
				<div className="py-2 border-b border-gray-300 flex">
					<div className="w-4/5">Subtotal</div>
					<div className="ml-2">{currencySymbol}&nbsp;{subtotal.toFixed(2)}</div>
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
					<div className="ml-2">{currencySymbol}&nbsp;{tax}</div>
				</div>
                {Number(discount) > 0 ? (
				<div className="py-2 border-b border-gray-300 flex">
					<div className="text-sm w-4/5">
                        Discount ({discount}%)	
					</div>
					<div className="ml-2">{currencySymbol}&nbsp;{(discount * 0.01 * Number(subtotal)).toFixed(2)}</div>
				</div>
                ): null}
                {Number(vat) > 0 ? (
				<div className="py-2 border-b border-gray-300 flex">
					<div className="text-sm w-4/5">
                        VAT ({vat}%)	
					</div>
					<div className="ml-2">{currencySymbol}&nbsp;{(vat * 0.01 * Number(subtotal)).toFixed(2)}</div>
				</div>
                ): null}
				<div className="py-2 border-b border-gray-300 flex">
					<div className="w-4/5">Total</div>
					<div className="ml-2">{currencySymbol}&nbsp;{(Number(subtotal) + Number(tax) + (Number(vat) * 0.01 * Number(subtotal)) - (Number(discount) * 0.01 * Number(subtotal))).toFixed(2)}</div>
				</div>
			</div>
		</div>
	);
};

export default InvoiceSummary;
