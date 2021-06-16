import React from "react";
import "../../styles/InputField.css";
import { useState } from "react";

const InvoiceDetails = () => {
	const [input, setInput] = useState({
		invoiceNo:'001',
		invoiceDate:'',
		invoiceDueDate:''
	});

	function onChangeHandler(evt) {
		const value = evt.target.value;
		setInput({
			...input,
			[evt.target.name]: value
		});
	}
	console.log(input);

	return (
		<div>
			<div className="parentInputField flex md:flex-row flex-col items-center space-x-2 md:mb-0 mb-4 my-2">
				<div className="font-bold text-sm">Invoice No:</div>
				<input
					type="text"
					name="invoiceNo"
					value={input.invoiceNo}
					onChange={onChangeHandler}
					className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
				/>

				<div className="font-bold text-sm">Invoice Date:</div>
				<input
					type="date"
					name="invoiceDate"
					value={input.invoiceDate}
					onChange={onChangeHandler}
					className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
				/>

				<div className="font-bold text-sm">Invoice Due Date:</div>
				<input
					type="date"
					name="invoiceDueDate"
					value={input.invoiceDueDate}
					onChange={onChangeHandler}
					className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
				/>
			</div>
		</div>
	);
}
export default InvoiceDetails;