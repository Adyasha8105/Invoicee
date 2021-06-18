import React from "react";
import { BiPencil, BiTrash } from "react-icons/all";

const NewBillItemForm = ({ billState, setBillState, setDisplayBillForm }) => {
  const updateBillItem = (e) => {
    const value = e.target.value;
    setBillState({ ...billState, [e.target.name]: value });
  };

  return (
    <div className="item-parent w-full flex flex-col mt-4">
      <div className="w-full grid grid-cols-8 text-sm">
        <input
          name="itemName"
          value={billState.itemName}
          onChange={(e) => updateBillItem(e)}
          type="text"
          className="mx-1 py-2 col-span-3 border border-gray-300"
        />
        <input
          name="quantity"
          value={billState.quantity}
          onChange={(e) => updateBillItem(e)}
          type="number"
          min="0"
          className="mx-1 py-2 col-span-1 border border-gray-300"
        />
        <input
          name="rate"
          value={billState.rate}
          onChange={(e) => updateBillItem(e)}
          type="number"
          step="0.01"
          min="0"
          className="mx-1 py-2 col-span-1 border border-gray-300"
        />
        <input
          name="tax"
          value={billState.tax}
          onChange={(e) => updateBillItem(e)}
          type="number"
          step="0.01"
          min="0"
          className="mx-1 py-2 col-span-1 border border-gray-300"
        />
        <div className="flex flex-row justify-end items-center lg:space-x-12 md:space-x-8 space-x-4 col-span-2">
          <div className="text-sm">$23.00</div>
          <div className="space-x-4">
            <button>
              <BiPencil />
            </button>
            <button onClick={(e) => setDisplayBillForm(false)}>
              <BiTrash />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-8">
        <textarea
          value={billState.description}
          name="description"
          onChange={(e) => updateBillItem(e)}
          placeholder="description"
          className="mx-1 py-1 px-1 my-2 col-span-6 border border-gray-300 text-sm"
        />
      </div>
    </div>
  );
};

export default NewBillItemForm;
