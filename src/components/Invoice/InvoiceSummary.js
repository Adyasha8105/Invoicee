import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentInvoice } from "../../actions";

const InvoiceSummary = () => {
  const currencySymbol = useSelector((state) => state.currencySymbol.currency);
  const subtotalList = useSelector((state) => state.billReducer.billItems);
  const currentInvoice = useSelector((state) => state.invoiceReducer);
  const discount = useSelector((state) => state.sideBarReducer.discount);
  const vat = useSelector((state) => state.sideBarReducer.vat);

  const dispatch = useDispatch();

  const [tax, setTax] = useState(0);
  const [input, setInput] = useState({
    tax: 0,
  });

  useEffect(() => {
    var temp = {
      subtotal: "",
      tax: "",
      discount: discount,
      vat: vat,
      total: "",
    };
    dispatch(updateCurrentInvoice("summary", temp));
    // eslint-disable-next-line
  }, []);

  var subtotal = 0;
  subtotalList.forEach((val) => {
    subtotal = subtotal + Number(val.subtotal);
  });

  console.log("Changing the invoice summary");
  console.log({ currentInvoice });

  function onChangeHandler(evt) {
    const value = evt.target.value;
    setInput({
      ...input,
      [evt.target.name]: value,
    });

    var tempTax = subtotal * value * 0.01;
    setTax(tempTax.toFixed(2));

    const tempSummary = {
      subtotal: subtotal,
      tax: tempTax.toFixed(2),
      discount: discount,
      vat: vat,
      total: "",
    };
    dispatch(updateCurrentInvoice("summary", tempSummary));
  }

  return (
    <div>
      <div className="w-full bg-gray-200 border-t border-b border-gray-400 font-bold text-sm mt-8 p-2 text-center">
        Invoice Summary
      </div>
      <div className="text-gray-600 text-sm px-2">
        <div className="py-2 border-b border-gray-300 flex">
          <div className="w-4/5">Subtotal</div>
          <div className="ml-2">
            {currencySymbol}&nbsp;{subtotal.toFixed(2)}
          </div>
        </div>
        <div className="py-2 border-b border-gray-300 flex">
          <div className="text-sm w-4/5">
            Tax
            <input
              type="Text"
              className="mx-1 px-1 col-span-1 border border-gray-300 w-12"
              name="tax"
              value={input.tax}
              onChange={onChangeHandler}
            />
            %
          </div>
          <div className="ml-2">
            {currencySymbol}&nbsp;{tax}
          </div>
        </div>
        {Number(discount) > 0 ? (
          <div className="py-2 border-b border-gray-300 flex">
            <div className="text-sm w-4/5">Discount ({discount}%)</div>
            <div className="ml-2">
              {currencySymbol}&nbsp;
              {(discount * 0.01 * Number(subtotal)).toFixed(2)}
            </div>
          </div>
        ) : null}
        {Number(vat) > 0 ? (
          <div className="py-2 border-b border-gray-300 flex">
            <div className="text-sm w-4/5">VAT ({vat}%)</div>
            <div className="ml-2">
              {currencySymbol}&nbsp;{(vat * 0.01 * Number(subtotal)).toFixed(2)}
            </div>
          </div>
        ) : null}
        <div className="py-2 border-b border-gray-300 flex">
          <div className="w-4/5">Total</div>
          <div className="ml-2">
            {currencySymbol}&nbsp;
            {(
              Number(subtotal) +
              Number(tax) +
              Number(vat) * 0.01 * Number(subtotal) -
              Number(discount) * 0.01 * Number(subtotal)
            ).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSummary;
