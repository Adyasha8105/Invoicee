import React from "react";

import {GrGallery} from "react-icons/gr";
import {IoPeopleOutline} from "react-icons/io5";
import {BsPerson} from 'react-icons/bs';
import InputField from "../components/InputField";
import ContactField from "../components/ContactField";
import FileInputField from "../components/FileInputField";
import {BillHeader} from "../components/BillHeader";

function NewInvoiceForm() {
    return (
        <div className="flex flex-col bg-gray-200 w-screen h-screen p-16">
            {/* invoice parent */}
            <div className="flex flex-col bg-white max-w-2xl h-full px-8">
                {/* First row: Logo and Invoice type */}
                <div className="flex flex-row space-x-8 py-8 text-gray-500">
                    <FileInputField />
                    <div className="w-full flex flex-col border-dashed border border-gray-400">
                        <div className="text-xs mx-4 mt-2">Invoice</div>
                    </div>
                </div>
                {/* Second row: From and To */}
                <div className="flex flex-row space-x-8 text-gray-500 mb-8">
                    <ContactField label="Sender Name" subLabel="Sender contact details" fromOrTo="FROM"
                                  icon={<IoPeopleOutline/>}/>
                    <ContactField label="Recipient Name" subLabel="Recipient contact details" fromOrTo="TO"
                                  icon={<BsPerson/>}/>
                </div>
                {/* Third row: Invoice details */}
                <div className="flex flex-row w-full items-center">
                    <div className="flex flex-col w-full">
                        <InputField inputType="text" label="Invoice No:" defaultValue="001"/>
                        <InputField inputType="date" label="Invoice Date:" defaultValue=""/>
                    </div>
                    <div className="w-full">
                        <InputField inputType="date" label="Invoice Date:" defaultValue=""/>
                    </div>
                </div>
                {/* Fourth row: Billing details */}
                <BillHeader />
                <button className="w-full bg-white transition-all duration-200 border-2 border-transparent hover:border-blue-500 hover:text-blue-500 focus:outline-none rounded-md mt-4 px-4 py-2 text-gray-600">
                    Add new invoice item
                </button>
            </div>
        </div>
    );
}

export default NewInvoiceForm;
