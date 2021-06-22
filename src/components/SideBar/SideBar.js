import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import options from "../../data/currencysymbol.json"
import { useDispatch } from "react-redux";
import { updateCurrency } from "../../actions";

export default function SideBar() {
  const dispatch = useDispatch();
	const [currency, setCurrency] = useState({
		value: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setCurrency({ ...currency, [e.target.name]: value });
    dispatch(updateCurrency(value))
	};

	return (
		<div className="py-4 px-10 w-auto md:grid flex ">
			<div className="flex flex-col w-full space-y-8">
				<select className="mt-4" value="Blank template" name="template">
					<option value="Blank template">Blank Template1</option>
					<option value="Blank template">Blank Template2</option>
					<option value="Blank template">Blank Template3</option>
					<option value="Blank template">Blank Template4</option>
					<option value="Blank template">Blank Template5</option>
					<option value="Blank template">Blank Template6</option>
				</select>

				<h1 className="text-xl font-bold">Invoice settings</h1>
				<div className="flex flex-col justify-start items-between space-y-4">
					<div className="flex flex-col justify-between space-y-2 md:mb-0 mb-4 my-2">
						<div className="text-sm">Discount</div>
						<input
							type="Text"
							className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
							defaultValue="0"
						/>
					</div>

					<div className="flex flex-col justify-between space-y-2 md:mb-0 mb-4 my-2">
						<div className="text-sm">Value Added Tax (VAT)</div>
						<input
							type="Text"
							className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
							defaultValue="0"
						/>
					</div>
				</div>

				<select name="currency" onChange={handleChange}>
					{options.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
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
							<FiDownload />
							<div className="font-bold text-sm">Download</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
