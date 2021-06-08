import React from "react";

export const BillHeader = () => {
    return(
        <div className="w-full bg-gray-200 grid grid-cols-8 border-t border-b border-gray-400 font-bold text-sm mt-8 p-2">
            <div className="col-span-3">Item</div>
            <div className="col-span-1">HRS/QTY</div>
            <div className="col-span-1">Rate</div>
            <div className="col-span-1">Tax</div>
            <div className="col-span-2">Subtotal</div>
        </div>
    );
}