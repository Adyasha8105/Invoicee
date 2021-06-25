import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import options from "../../data/currencysymbol.json"
import { useDispatch } from "react-redux";
import { updateCurrency, addDiscount, addVAT } from "../../actions";
import invoicepdf from "../Invoicepdf/Invoicepdf"

export default function SideBar() {
    const [discount, setDiscount] = useState(0); 
    const [vat, setVat] = useState(0); 
  const dispatch = useDispatch();
	const [currency, setCurrency] = useState({
		value: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setCurrency({ ...currency, [e.target.name]: value });
    dispatch(updateCurrency(value))
	};

    const updateDiscountChange = (e) => {
        const value = e.target.value; 
        setDiscount(value); 
        dispatch(addDiscount(value));
    }

    const updateVAT = (e) => {
        const value = e.target.value;
        setVat(value); 
        dispatch(addVAT(value));
    }

	return (
		<div className="py-4 px-10 w-auto md:grid flex ">
			<div className="flex flex-col w-full space-y-8">

				<h1 className="text-xl font-bold mt-12">Invoice settings</h1>
				<div className="flex flex-col justify-start items-between space-y-8">
					<div className="flex flex-col justify-between space-y-2 md:mb-0 mb-4 my-2">
						<div className="text-sm">Discount (in %)</div>
						<input
							type="number"
                            min="0"
                            step="0.01"
                            value={discount}
                            onChange={updateDiscountChange}
							className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
						/>
					</div>

					<div className="flex flex-col justify-between space-y-2 md:mb-0 mt-8 mb-4 my-2">
						<div className="text-sm">Value Added Tax (VAT)</div>
						<input
							type="number"
                            min="0"
                            step="0.01"
                            value={vat}
                            onChange={updateVAT}
							className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
						/>
					</div>
				</div>

                <div className="flex flex-col justify-between space-y-2 md:mb-0 mt-8 mb-4 my-2">
                    <div className="text-sm">Select a currency</div>
                    <select name="currency" onChange={handleChange} className="p-2">
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

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
							<a onClick={invoicepdf} className="font-bold text-sm cursor-pointer">Download</a>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
