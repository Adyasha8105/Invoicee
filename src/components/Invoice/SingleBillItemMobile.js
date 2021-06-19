import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../actions";

const SingleBillItemMobile = ({
    billState,
    index,
    isEditable,
    setIsEditable,
}) => {
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
        console.log(e.target.value);
        const value = e.target.value;
        setLocalBillState({ ...localBillState, [e.target.name]: value });
    };

    const saveUpdatedItem = () => {
        var quantity = Number(localBillState.quantity);
        var rate = Number(localBillState.rate);
        var tax = Number(localBillState.tax);
        var amount = quantity * rate;

        var total = amount + amount * (tax / 100);

        dispatch(updateItem({ ...localBillState, "subtotal": total.toString() }, index));
        dispatch(updateItem(localBillState, index));
    };

    const handleDelete = () => {
        dispatch(deleteItem(index));
    };
    return (
        <div className="w-full bg-gray-100 flex flex-col text-sm rounded-md mb-4">
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Item</div>
                {!isEditable ? (
                    <div type="text" className="w-full p-2">
                        {billState.itemName}
                    </div>
                ) : (
                    <input
                        type="text"
                        name="itemName"
                        className="w-full p-2"
                        value={localBillState.itemName}
                        onChange={(e) => updateBillItem(e)}
                    />
                )}
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">HRS/QTY</div>
                {!isEditable ? (
                    <div type="text" className="w-full p-2">
                        {billState.quantity}
                    </div>
                ) : (
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        name="quantity"
                        className="w-full p-2"
                        value={localBillState.quantity}
                        onChange={(e) => updateBillItem(e)}
                    />
                )}
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Rate</div>
                {!isEditable ? (
                    <div type="text" className="w-full p-2">
                        {billState.rate}
                    </div>
                ) : (
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        name="rate"
                        className="w-full p-2"
                        value={localBillState.rate}
                        onChange={(e) => updateBillItem(e)}
                    />
                )}
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Tax</div>
                {!isEditable ? (
                    <div type="text" className="w-full p-2">
                        {billState.tax}
                    </div>
                ) : (
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        name="tax"
                        className="w-full p-2"
                        value={billState.tax}
                        onChange={(e) => updateBillItem(e)}
                    />
                )}
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                {billState.description.trim() !== "" ? (
                    <div className="w-full font-bold">Description</div>
                ) : null}
                {!isEditable ? (
                    <>
                        {billState.description.trim() !== "" ? (
                            <div type="text" className="w-full p-2">
                                {billState.description}
                            </div>
                        ) : null}
                    </>
                ) : (
                    <input
                        type="text"
                        name="description"
                        className="w-full p-2"
                        value={localBillState.description}
                        onChange={(e) => updateBillItem(e)}
                    />
                )}
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Subtotal</div>
                <div className="w-full font-bold">$ {localBillState.subtotal}</div>
            </div>
        </div>
    );
};

export default SingleBillItemMobile;
