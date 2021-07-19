import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentInvoice } from "../../actions";

const InvoiceHeading = () => {
    const [state, setState] = useState({
        invoice: "",
    });

    const currentInvoice = useSelector((state) => state.invoiceReducer); 
    const dispatch = useDispatch(); 

    console.log(state.invoice); 
    console.log("changing invoice heading");
    console.log({ currentInvoice }); 

    function onChangeHandler(evt) {
        dispatch(updateCurrentInvoice("title", evt.target.value)); 
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
        
    }

    return (
        <input
            className="px-2 py-1 sm:text-xl text-sm text-black self-center text-center focus:outline-none font-semibold parent bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-400 hover:border-primary"
            type="text"
            name="invoice"
            placeholder="INVOICE"
            value={state.invoice}
            onChange={onChangeHandler}
        />
    );
};
export default InvoiceHeading;

