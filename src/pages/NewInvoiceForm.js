import React, { useEffect, useState } from "react";
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
  var width = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(width);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [width]);

  return (
    <div className="flex flex-col bg-gray-200 w-screen min-h-screen p-16">
      {/* invoice parent */}
      <div className="flex flex-col bg-white max-w-2xl min-h-full w-full px-8">
        <div className="md:w-1/2 w-full h-full self-center flex flex-col border-dashed border border-gray-400 my-4">
          <div className="text-xs mx-4 mt-2">Name of the invoice</div>
          <input
            className="mx-4 py-1 text-sm text-black focus:outline-none"
            type="text"
          />
        </div>
        {/* First row: Logo and Invoice type */}

        <div className="flex sm:flex-row flex-col md:space-x-8 md:space-y-0 space-y-4 py-8 text-gray-500">
          <div className="flex flex-col w-full">
            <InputField
              inputType="text"
              label="Invoice No:"
              defaultValue="001"
            />
            <InputField
              inputType="date"
              label="Invoice Date:"
              defaultValue=""
            />
            <InputField
              inputType="date"
              label="Invoice Date:"
              defaultValue=""
            />
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
        {windowWidth > 600 ? (
          <div>
            <BillHeader />
            <NewBillItemForm />
            <button className="w-full bg-white transition-all duration-200 border-2 border-transparent hover:border-blue-500 hover:text-blue-500 focus:outline-none rounded-md mt-4 px-4 py-2 text-gray-600">
              Add new invoice item
            </button>
          </div>
        ) : (
          <div>
            <NewBillItemFormMobile />
            <button className="w-full bg-white transition-all duration-200 border-2 border-transparent hover:border-blue-500 hover:text-blue-500 focus:outline-none rounded-md mt-4 px-4 py-2 text-gray-600">
              Add new invoice item
            </button>
          </div>
        )}
        <InvoiceSummary />
      </div>
    </div>
  );
}

export default NewInvoiceForm;
