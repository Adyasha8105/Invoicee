import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentInvoice } from "../../actions";

const Invoicefooter = () => {
    const [state, setState] = useState({
        invoice: "",
    });

    const currentInvoice = useSelector((state) => state.invoiceReducer); 
    const dispatch = useDispatch(); 

    console.log("changing invoice footer");
    console.log({ currentInvoice }); 

    function onChangeHandler(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
        dispatch(updateCurrentInvoice("additional", state.invoice));
    }

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

