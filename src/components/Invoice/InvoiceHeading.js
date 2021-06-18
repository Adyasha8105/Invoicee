import React from "react";
import { useState } from "react";

const InvoiceHeading = () => {
    const [state, setState] = useState({
        invoice: "INVOICE",
    });

    function onChangeHandler(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    }
    // console.log(state);

    return (
        <input
            className="px-2 py-1 sm:text-xl text-sm text-black self-center text-center focus:outline-none bg-gray-50 font-semibold border-dashed border-2 border-gray-200"
            type="text"
            name="invoice"
            value={state.invoice}
            onChange={onChangeHandler}
        />
    );
};
export default InvoiceHeading;

