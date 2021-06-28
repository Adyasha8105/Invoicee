import React from "react";
import { useState } from "react";

const InvoiceHeading = () => {
    const [state, setState] = useState({
        invoice: "",
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

