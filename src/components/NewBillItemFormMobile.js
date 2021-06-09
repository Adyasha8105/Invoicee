import React from "react";

const NewBillItemFormMobile = () => {
    return(
        <div className="w-full bg-gray-100 flex flex-col text-sm rounded-md hidden">
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Item</div>
                <input type="text" className="w-full p-2"/>
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">HRS/QTY</div>
                <input type="text" className="w-full p-2"/>
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Rate</div>
                <input type="text" className="w-full p-2"/>
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Tax</div>
                <input type="text" className="w-full p-2"/>
            </div>
            <div className="flex flex-row items-center justify-between py-2 px-4">
                <div className="w-full font-bold">Subtotal</div>
                <div className="w-full font-bold">$23.00</div>
            </div>
        </div>
    );
}

export default NewBillItemFormMobile;