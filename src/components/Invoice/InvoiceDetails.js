import React from "react";
import "../../styles/InputField.css";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentInvoice} from "../../actions";

const InvoiceDetails = () => {
    const [input, setInput] = useState({
        invoiceNo: "",
        invoiceDate: "",
        invoiceDueDate: "",
    });

    const currentInvoice = useSelector((state) => state.invoiceReducer); 
    const dispatch = useDispatch(); 

    console.log("changing invoice details:");
    console.log({ currentInvoice }); 

    function onChangeHandler(evt) {
        const value = evt.target.value;
        setInput({
            ...input,
            [evt.target.name]: value,
        });

        dispatch(updateCurrentInvoice("details", input)); 
    }

    return (
        <div>
            <div className="parentInputField flex md:flex-row flex-col items-center space-x-2 md:mb-0 mb-4 my-2">
                <div className="font-bold text-sm">Invoice No:</div>
                <input
                    type="text"
                    name="invoiceNo"
                    placeholder="001"
                    value={input.invoiceNo}
                    onChange={onChangeHandler}
                    className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
                />

                <div className="font-bold text-sm">Invoice Date:</div>
                <input
                    type="date"
                    name="invoiceDate"
                    value={input.invoiceDate}
                    onChange={onChangeHandler}
                    className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
                />

                <div className="font-bold text-sm">Invoice Due Date:</div>
                <input
                    type="date"
                    name="invoiceDueDate"
                    value={input.invoiceDueDate}
                    onChange={onChangeHandler}
                    className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
                />
            </div>
        </div>
    );
};
export default InvoiceDetails;
