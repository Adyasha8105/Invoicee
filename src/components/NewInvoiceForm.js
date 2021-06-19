import React, { useState } from "react";
import InvoiceHeading from "./Invoice/InvoiceHeading";
import InvoiceDetails from "./Invoice/InvoiceDetails";
import FromContactField from "./Invoice/ContactDetails/FromContactField";
import ToContactField from "./Invoice/ContactDetails/ToContactField";
import FileInputField from "./Invoice/FileInputField";
import { BillHeader } from "./Invoice/BillHeader";
import NewBillItemForm from "./Invoice/NewBillItemForm";
import InvoiceSummary from "./Invoice/InvoiceSummary";
import NewBillItemFormMobile from "./Invoice/NewBillItemFormMobile";
import { addItem } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import SingleBillItem from "./Invoice/SingleBillItem";
import SingleBillItemMobile from "./Invoice/SingleBillItemMobile";

function NewInvoiceForm() {
    const billItems = useSelector((state) => state.billReducer.billItems);
    const [displayBillForm, setDisplayBillForm] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [billState, setBillState] = useState({
        itemName: "",
        quantity: "",
        rate: "",
        tax: "",
        subtotal: "0.00",
        description: "",
    });

    const dispatch = useDispatch();

    const handleAddItem = () => {
        if (!displayBillForm) {
            setDisplayBillForm(true);
            return;
        }
        if (
            billState.itemName.trim() !== "" &&
            billState.quantity.trim() !== "" &&
            billState.rate.trim() !== ""
        ) {
            var quantity = Number(billState.quantity);
            var rate = Number(billState.rate);
            var tax = Number(billState.tax);
            var amount = quantity * rate;

            var total = amount + amount * (tax / 100);
            dispatch(addItem({ ...billState, subtotal: total.toString() }));
            setBillState({
                itemName: "",
                quantity: "",
                rate: "",
                tax: "",
                subtotal: "0.00",
                description: "",
            });
            setIsEditable(false);
        }
    };

    return (
        <div className="flex flex-col bg-gray-200 w-screen min-h-screen xl:p-16 md:p-14 p-8 overflow-x-hidden">
            <div className="flex flex-col bg-white min-h-full self-center max-w-4xl w-full px-8 py-4">
                <div className="flex lg:flex-row flex-col lg:space-x-8 space-y-8 lg:space-y-0 text-gray-500 mb-8">
                    <div className="flex flex-col w-full">
                        <div className="w-full h-full flex my-4">
                            <InvoiceHeading />
                        </div>
                    </div>
                    <FileInputField />
                </div>
                <div className="flex md:flex-row flex-col space-y-0 md:space-y-0 text-gray-500 mb-8">
                    <FromContactField />
                    <ToContactField />
                </div>
                <div className="md:flex justify-between sm:inline-flex">
                    <InvoiceDetails />
                </div>
                <div>
                    {window.innerWidth > 600 ? (
                        <>
                            <BillHeader />
                            {billItems.length > 0 ? (
                                <div>
                                    {billItems.map((item, index) => (
                                        <SingleBillItem
                                            isEditable={isEditable}
                                            setIsEditable={setIsEditable}
                                            billState={item}
                                            key={index}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            ) : null}
                            {displayBillForm ? (
                                <NewBillItemForm
                                    billState={billState}
                                    setBillState={setBillState}
                                    setDisplayBillForm={setDisplayBillForm}
                                />
                            ) : null}
                        </>
                    ) : (
                        <>
                            {billItems.length > 0 ? (
                                <div>
                                    {billItems.map((item, index) => (
                                        <SingleBillItemMobile
                                            billState={item}
                                            key={index}
                                            index={index}
                                            isEditable={isEditable}
                                            setIsEditable={setIsEditable}
                                        />
                                    ))}
                                </div>
                            ) : null}
                            {displayBillForm ? (
                                <NewBillItemFormMobile
                                    billState={billState}
                                    setBillState={setBillState}
                                    setDisplayBillForm={setDisplayBillForm}
                                />
                            ) : null}
                        </>
                    )}
                    <button
                        onClick={(e) => handleAddItem()}
                        className="w-full bg-white transition-all duration-200 border-2 border-transparent border-gray-100 focus:outline-none rounded-md mt-4 px-4 py-2 text-gray-600"
                    >
                        Add new invoice item
                    </button>
                </div>
                <div className="md:w-1/2 w-full flex-col mb-4 self-end">
                    <InvoiceSummary />
                </div>
            </div>
        </div>
    );
}

export default NewInvoiceForm;
