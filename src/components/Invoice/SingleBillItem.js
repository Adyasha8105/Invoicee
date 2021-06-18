import React from "react";
import { BiPencil, BiTrash } from "react-icons/all";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../actions";

const SingleBillItem = ({ billState, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(index));
  };

  return (
    <div className="item-parent w-full flex flex-col mt-4">
      <div className="w-full grid grid-cols-8 text-sm">
        <div className="mx-1 py-2 col-span-3 text-center">
          {billState.itemName}
        </div>
        <div className="mx-1 py-2 col-span-1 text-center">
          {billState.quantity}
        </div>
        <div className="mx-1 py-2 col-span-1 text-center">{billState.rate}</div>
        <div className="mx-1 py-2 col-span-1 text-center">{billState.tax}</div>
        <div className="flex flex-row justify-end items-center lg:space-x-12 md:space-x-8 space-x-4 col-span-2">
          <div className="text-sm">$23.00</div>
          <div className="space-x-4">
            <button>
              <BiPencil />
            </button>
            <button onClick={(e) => handleDelete()}>
              <BiTrash />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-8">
        {billState.description.trim() !== "" ? (
          <div className="mx-1 py-1 px-1 my-2 col-span-6 text-sm">
            {billState.description}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SingleBillItem;
