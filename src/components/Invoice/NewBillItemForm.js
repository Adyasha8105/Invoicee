import React from "react";
import { BiPencil, BiTrash } from "react-icons/all";

const NewBillItemForm = () => {
	return (
		<div className="item-parent w-full flex flex-col mt-4">
			<div className="w-full grid grid-cols-8 text-sm">
				<input type="text" className="mx-1 py-2 col-span-3 border border-gray-300" />
				<input type="text" className="mx-1 py-2 col-span-1 border border-gray-300" />
				<input type="text" className="mx-1 py-2 col-span-1 border border-gray-300" />
				<input type="text" className="mx-1 py-2 col-span-1 border border-gray-300" />
				<div className="flex flex-row justify-end items-center space-x-2 col-span-2">
					<div className="text-sm">$23.00</div>
					<div className="space-x-4">
						<button>
							<BiPencil />
						</button>
						<button>
							<BiTrash />
						</button>
					</div>
				</div>
			</div>
			<div className="w-full grid grid-cols-8">
				<textarea
					placeholder="Description"
					className="mx-1 py-1 px-1 my-2 col-span-6 border border-gray-300 text-sm"
				/>
			</div>
		</div>
	);
};

export default NewBillItemForm;
