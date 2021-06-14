import React from "react";

import InputField from "./Invoice/InputField";
import FromContactField from "./Invoice/ContactDetails/FromContactField";
import ToContactField from "./Invoice/ContactDetails/ToContactField";
import FileInputField from "./Invoice/FileInputField";
import { BillHeader } from "./Invoice/BillHeader";
import NewBillItemForm from "./Invoice/NewBillItemForm";
import InvoiceSummary from "./Invoice/InvoiceSummary";
import NewBillItemFormMobile from "./Invoice/NewBillItemFormMobile";

function NewInvoiceForm() {
	const [width, setWidth] = React.useState(window.innerWidth);

	return (
		<div className="flex flex-col bg-gray-200 w-screen min-h-screen xl:p-16 md:p-14 p-8 overflow-x-hidden">
			<div className="flex flex-col bg-white min-h-full self-center max-w-4xl w-full px-8 py-4">

				<div className="flex md:flex-row flex-col md:space-x-8 space-y-8 md:space-y-0 text-gray-500 mb-8">
					<div className="flex flex-col w-full">
						<div className="w-full h-full flex my-4">
							<input
								className="px-2 py-1 md:text-xl text-sm text-black self-center text-center focus:outline-none bg-gray-50 font-semibold border-dashed border-2 border-gray-200"
								type="text"
								defaultValue="INVOICE"
							/>
						</div>
					</div>
					<FileInputField />
				</div>
				<div className="flex md:flex-row flex-col space-y-8 md:space-y-0 text-gray-500 mb-8">
					<FromContactField />
					<ToContactField />
				</div>
				<div className="md:flex justify-between sm:inline-flex">
					<InputField inputType="text" label="Invoice No:" defaultValue="001" />
					<InputField inputType="date" label="Invoice Date:" defaultValue="" />
					<InputField inputType="date" label="Invoice Due Date:" defaultValue="" />
				</div>
				<div>
					{`${width}` > 600 ? (
						<>
							<BillHeader />
							<NewBillItemForm />
						</>
					) : (
						<NewBillItemFormMobile />
					)}
					<button className="w-full bg-white transition-all duration-200 border-2 border-transparent border-gray-100 focus:outline-none rounded-md mt-4 px-4 py-2 text-gray-600">
						Add new invoice item
					</button>
				</div>
				<div className="md:w-1/2 w-full flex-col mb-4 self-end">
					<InvoiceSummary />
				</div>
			</div>
		</div>
	);
}

export default NewInvoiceForm;
