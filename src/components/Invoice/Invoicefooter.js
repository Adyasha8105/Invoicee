import React from "react";
import { useState } from "react";

const Invoicefooter = () => {
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
            className="px-2 py-1 w-full text-sm text-black focus:outline-none bg-gray-50 font-semibold border-dashed border-2 border-gray-200"
            type="text"
            placeholder="Additional Notes, Payment instruction etc."
            name="invoice"
            value={state.invoice}
            onChange={onChangeHandler}
        />
    );
};
export default Invoicefooter;

