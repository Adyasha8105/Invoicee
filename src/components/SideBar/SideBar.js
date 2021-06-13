import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi'; 

export default function SideBar() {
  return (
    <div className="py-4 px-10 w-auto md:grid flex">
      <div className="flex flex-col w-full space-y-8">
        <select className="mt-4" value="Blank template" name="template">
          <option value="Blank template">Blank Template1</option>
          <option value="Blank template">Blank Template2</option>
          <option value="Blank template">Blank Template3</option>
          <option value="Blank template">Blank Template4</option>
          <option value="Blank template">Blank Template5</option>
          <option value="Blank template">Blank Template6</option>
        </select>

        <h1 className="text-xl">Invoice settings</h1>
		<div className="flex flex-col justify-start items-between space-y-4">
          <div className="flex flex-col justify-between space-y-2 md:mb-0 mb-4 my-2">
            <div className="font-bold text-sm">Discount</div>
            <input
              type="Text"
              className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
              defaultValue="0"
            />
          </div>

          <div className="flex flex-col justify-between space-y-2 md:mb-0 mb-4 my-2">
            <div className="font-bold text-sm">Tax</div>
            <input
              type="Text"
              className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
              defaultValue="0"
            />
          </div>

          <div className="flex flex-col justify-between space-y-2 md:mb-0 mb-4 my-2">
            <div className="font-bold text-sm">Value Added Tax (VAT)</div>
            <input
              type="Text"
              className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
              defaultValue="0"
            />
          </div>
        </div>

        <select value="INR" name="currency">
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="AUD">AUD</option>
        </select>

		<div className="flex flex-row items-center space-x-4">
        <button className="focus:outline-none border-2 border-black bg-white w-28 py-2 rounded-lg">
				<div className="flex flex-row items-center justify-center space-x-2">
						<AiOutlineEye />
						<div className="font-bold text-sm">Preview</div>
				</div>
        </button>
        <button className="focus:outline-none border-2 border-primary bg-primary w-32 py-2 rounded-lg">
				<div className="flex flex-row items-center justify-center space-x-2">
						<FiDownload/>
						<div className="font-bold text-sm">Download</div>
				</div>
        </button>
		</div>
      </div>
    </div>
  );
}
