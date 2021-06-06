import React from "react";
import { GrGallery } from "react-icons/gr";

function NewInvoiceForm() {
  return (
    <div className="flex flex-col bg-gray-200 w-screen h-screen p-16">
      <div className="flex flex-col bg-white max-w-2xl h-full">
        <div className="flex flex-row space-x-8 px-8 py-8">
          <div className="w-full border border-black flex flex-row space-x-7 p-8">
            <div className="text-4xl">
              <GrGallery />
            </div>
            <div className="">Select a file for your logo</div>
          </div>
          <div className="w-full border border-black"></div>
        </div>
      </div>
    </div>
  );
}

export default NewInvoiceForm;
