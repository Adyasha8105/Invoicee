import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import InputField from "../components/InputField";
import ContactField from "../components/ContactField";
import FileInputField from "../components/FileInputField";
import { BillHeader } from "../components/BillHeader";
import NewBillItemForm from "../components/NewBillItemForm";
import InvoiceSummary from "../components/InvoiceSummary";
import NewBillItemFormMobile from "../components/NewBillItemFormMobile";

function NewInvoiceForm() {
	return (
		<div className="flex flex-col bg-gray-200 w-screen min-h-screen xl:p-16 md:p-14 p-8 overflow-x-hidden">
			{/* invoice parent */}
			<div className="flex flex-col bg-white max-w-2xl min-h-full w-full px-8">
				<div className="sm:w-1/2 w-full h-full self-center flex flex-col my-4">
					<input className="px-2 py-1 text-md text-black self-center text-center focus:outline-none bg-gray-50 font-semibold border-dashed border border-gray-400" type="text" defaultValue="INVOICE" />
				</div>
				{/* First row: Logo and Invoice type */}

				<div className="flex sm:flex-row flex-col md:space-x-8 md:space-y-0 space-y-4 py-8 text-gray-500">
					<div className="flex flex-col w-full">
						<InputField inputType="text" label="Invoice No:" defaultValue="001" />
						<InputField inputType="date" label="Invoice Date:" defaultValue="" />
						<InputField inputType="date" label="Invoice Date:" defaultValue="" />
					</div>
					<FileInputField />
				</div>
				{/* Second row: From and To */}
				<div className="flex md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0 text-gray-500 mb-8">
					<ContactField
						label="Sender Name"
						subLabel="Sender contact details"
						fromOrTo="FROM"
						icon={<IoPeopleOutline />}
					/>
					<ContactField
						label="Recipient Name"
						subLabel="Recipient contact details"
						fromOrTo="TO"
						icon={<BsPerson />}
					/>
				</div>
				{/* Third row: Invoice details */}
				{/* Fourth row: Billing details */}
				<div>
					{window.innerWidth > 600 ? (
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
				<InvoiceSummary />
			</div>
		</div>
	);
}

export default NewInvoiceForm;
