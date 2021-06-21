import React from "react";
import { useSelector } from "react-redux";
import { BiPencil, BiTrash } from "react-icons/all";

const NewBillItemFormMobile = ({ billState, setBillState, setDisplayBillForm }) => {
	const currencySymbol = useSelector((state) => state.currencySymbol.currency);
	const updateBillItem = (e) => {
		const value = e.target.value;
		setBillState({ ...billState, [e.target.name]: value });
	};

	return (
		<div className="w-full bg-gray-100 flex flex-col text-sm rounded-md">
			<div className="space-x-4 py-2 px-4 self-end">
				<button>
					<BiPencil />
				</button>
				<button onClick={(e) => setDisplayBillForm(false)}>
					<BiTrash />
				</button>
			</div>
			<div className="flex flex-row items-center justify-between py-2 px-4">
				<div className="w-full font-bold">Item</div>
				<input
					type="text"
					name="itemName"
					className="w-full p-2"
					value={billState.itemName}
					placeholder="Item name"
					onChange={(e) => updateBillItem(e)}
				/>
			</div>
			<div className="flex flex-row items-center justify-between py-2 px-4">
				<div className="w-full font-bold">Description</div>
				<textarea
					type="text"
					name="description"
					className="w-full p-2"
					value={billState.description}
					placeholder="description"
					onChange={(e) => updateBillItem(e)}
				/>
			</div>
			<div className="flex flex-row items-center justify-between py-2 px-4">
				<div className="w-full font-bold">HRS/QTY</div>
				<input
					type="number"
					min="0"
					name="quantity"
					className="w-full p-2"
					value={billState.quantity}
					onChange={(e) => updateBillItem(e)}
					required
				/>
			</div>
			<div className="flex flex-row items-center justify-between py-2 px-4">
				<div className="w-full font-bold">Rate</div>
				<input
					type="number"
					step="0.01"
					min="0"
					name="rate"
					className="w-full p-2"
					value={billState.rate}
					onChange={(e) => updateBillItem(e)}
				/>
			</div>
			<div className="flex flex-row items-center justify-between py-2 px-4">
				<div className="w-full font-bold">Tax</div>
				<input
					type="number"
					min="0"
					step="0.01"
					name="tax"
					className="w-full p-2"
					value={billState.tax}
					onChange={(e) => updateBillItem(e)}
				/>
			</div>
			<div className="flex flex-row items-center justify-between py-2 px-4">
				<div className="w-full font-bold">Subtotal</div>
				<div className="w-full font-bold">{currencySymbol}&nbsp;{billState.subtotal}</div>
			</div>
		</div>
	);
};

export default NewBillItemFormMobile;
