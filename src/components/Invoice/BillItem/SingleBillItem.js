import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiPencil, BiSave, BiTrash } from "react-icons/all";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../../actions";

const SingleBillItem = ({ billState, index, isEditable, setIsEditable }) => {
	const currencySymbol = useSelector((state) => state.currencySymbol.currency);
	const dispatch = useDispatch();
	const [localBillState, setLocalBillState] = useState({
		itemName: billState.itemName,
		quantity: billState.quantity,
		rate: billState.rate,
		tax: billState.tax,
		subtotal: billState.subtotal,
		description: billState.description,
	});

	const updateBillItem = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setLocalBillState({ ...localBillState, [e.target.name]: value });
	};

	const saveUpdatedItem = () => {
		var quantity = Number(localBillState.quantity);
		var rate = Number(localBillState.rate);
		var tax = Number(localBillState.tax);
		var amount = quantity * rate;

		var total = amount + amount * (tax / 100);
        total = total.toFixed(2);

		dispatch(updateItem({ ...localBillState, subtotal: total.toString() }, index));
	};

	const handleDelete = () => {
		dispatch(deleteItem(index));
	};

	return (
		<div className="item-parent w-full flex flex-col mt-4">
			<div className="w-full grid grid-cols-8 text-sm">
				{!isEditable ? (
					<>
						<div className="mx-1 py-2 col-span-3">{billState.itemName}</div>
						<div className="mx-1 py-2 col-span-1 text-center">{billState.quantity}</div>
						<div className="mx-1 py-2 col-span-1 text-center">{billState.rate}</div>
						<div className="mx-1 py-2 col-span-1 text-center">{billState.tax}</div>
					</>
				) : (
					<>
						<input
							name="itemName"
							value={localBillState.itemName}
							onChange={(e) => updateBillItem(e)}
							type="text"
							className="mx-1 px-1 py-2 col-span-3 border border-gray-300"
						/>
						<input
							name="quantity"
							value={localBillState.quantity}
							onChange={(e) => updateBillItem(e)}
							type="number"
							min="0"
							className="mx-1 px-1 py-2 col-span-1 border border-gray-300"
						/>
						<input
							name="rate"
							value={localBillState.rate}
							onChange={(e) => updateBillItem(e)}
							type="number"
							step="0.01"
							min="0"
							className="mx-1 px-1 py-2 col-span-1 border border-gray-300"
						/>
						<input
							name="tax"
							value={localBillState.tax}
							onChange={(e) => updateBillItem(e)}
							type="number"
							step="0.01"
							min="0"
							className="mx-1 px-1 py-2 col-span-1 border border-gray-300"
						/>
					</>
				)}
				<div className="flex flex-row justify-end items-center lg:space-x-12 md:space-x-8 space-x-4 col-span-2">
					<div className="text-sm">
						{currencySymbol} {billState.subtotal}
					</div>
					<div className="space-x-4">
						<button onClick={(e) => setIsEditable(!isEditable)}>
							{isEditable ? (
								<button onClick={(e) => saveUpdatedItem()}>
									<BiSave />
								</button>
							) : (
								<BiPencil />
							)}
						</button>
						<button onClick={(e) => handleDelete()}>
							<BiTrash />
						</button>
					</div>
				</div>
			</div>
			<div className="w-full grid grid-cols-12">
				{!isEditable ? (
					<div className="mx-1 py-1 px-1 my-2 col-span-6 text-sm">{billState.description}</div>
				) : (
					<textarea
						value={localBillState.description}
						name="description"
						onChange={(e) => updateBillItem(e)}
						placeholder="description"
						className="mx-1 py-1 px-1 my-2 col-span-6 border border-gray-300 text-sm"
					/>
				)}
			</div>
		</div>
	);
};

export default SingleBillItem;
