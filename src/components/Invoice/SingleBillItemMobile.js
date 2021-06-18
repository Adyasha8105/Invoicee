import React from "react";

const SingleBillItemMobile = ({ billState }) => {
  return (
    <div className="w-full bg-gray-100 flex flex-col text-sm rounded-md mb-4">
      <div className="flex flex-row items-center justify-between py-2 px-4">
        <div className="w-full font-bold">Item</div>
        <div type="text" className="w-full p-2">
          {billState.itemName}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-2 px-4">
        <div className="w-full font-bold">HRS/QTY</div>
        <div type="text" className="w-full p-2">
          {billState.quantity}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-2 px-4">
        <div className="w-full font-bold">Rate</div>
        <div type="text" className="w-full p-2">
          {billState.rate}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-2 px-4">
        <div className="w-full font-bold">Tax</div>
        <div type="text" className="w-full p-2">
          {billState.tax}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-2 px-4">
        <div className="w-full font-bold">Subtotal</div>
        <div className="w-full font-bold">$23.00</div>
      </div>
    </div>
  );
};

export default SingleBillItemMobile;
