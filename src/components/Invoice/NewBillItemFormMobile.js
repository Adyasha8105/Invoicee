import React from "react";

const NewBillItemFormMobile = ({
    billState,
    setBillState,
    setDisplayBillForm,
}) => {
    const updateBillItem = (e) => {
        const value = e.target.value;
        setBillState({ ...billState, [e.target.name]: value });
    };

    return (
        <div className="w-full bg-gray-100 flex flex-col text-sm rounded-md">
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Item</div>
                <input
                    type="text"
                    name="itemName"
                    className="w-full p-2"
                    value={billState.itemName}
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
                <div className="w-full font-bold">$ 0.00</div>
            </div>
        </div>
    );
};

export default NewBillItemFormMobile;
