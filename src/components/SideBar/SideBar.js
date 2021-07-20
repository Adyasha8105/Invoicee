import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import options from "../../data/currencysymbol.json";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrency,
  addDiscount,
  addVAT,
  updateCurrentInvoice,
} from "../../actions";
import invoicepdf from "../Invoicepdf/Invoicepdf";

export default function SideBar() {
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState({
    value: "",
  });

  const subtotalList = useSelector((state) => state.billReducer.billItems);

  const invoiceState = useSelector((state) => state.invoiceReducer);

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrency({ ...currency, [e.target.name]: value });
    dispatch(updateCurrency(value));
    dispatch(updateCurrentInvoice("currency", value));
  };

  const updateDiscountChange = (e) => {
    const value = e.target.value;
    setDiscount(value);
    dispatch(addDiscount(value));
    var summary = {
      subtotal: invoiceState.summary.subtotal,
      tax: invoiceState.summary.tax,
      discount: value,
      vat: invoiceState.summary.vat,
      total: invoiceState.summary.total,
    };
    dispatch(updateCurrentInvoice("summary", summary));
  };

  const updateVAT = (e) => {
    const value = e.target.value;
    setVat(value);
    dispatch(addVAT(value));
    var summary = {
      subtotal: invoiceState.summary.subtotal,
      tax: invoiceState.summary.tax,
      discount: invoiceState.summary.discount,
      vat: value,
      total: invoiceState.summary.total,
    };
    dispatch(updateCurrentInvoice("summary", summary));
  };

  const previewPdf = () => {
    var tempSubtotal = 0;
    subtotalList.forEach((val) => {
      tempSubtotal += Number(val.subtotal);
    });

    var tempTotal = (
      Number(tempSubtotal) +
      Number(invoiceState.summary.tax) +
      Number(invoiceState.summary.vat) * 0.01 * Number(tempSubtotal) -
      Number(invoiceState.summary.discount) * 0.01 * Number(tempSubtotal)
    ).toFixed(2);

    var summary = {
      subtotal: tempSubtotal,
      tax: invoiceState.summary.tax,
      discount: invoiceState.summary.discount,
      vat: invoiceState.summary.vat,
      total: tempTotal,
    };

    dispatch(updateCurrentInvoice("summary", summary));
    console.log({ invoiceState });
    invoicepdf(invoiceState);
  };

  const downloadPdf = () => {};

  return (
    <div className="py-4 px-10 w-auto flex flex-col justify-between">
      <div className="flex flex-col w-full space-y-8">
        <h1 className="text-2xl font-bold mt-12">Invoice Settings</h1>
        <div className="flex flex-col justify-start items-between space-y-8">
          <div className="flex flex-col justify-between space-y-2 md:mb-0 mb-4 my-2">
            <div className="text-sm">Discount (in %)</div>
            <input
              type="number"
              min="0"
              step="0.01"
              value={discount}
              onChange={updateDiscountChange}
              className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
            />
          </div>

          <div className="flex flex-col justify-between space-y-2 md:mb-0 mt-8 mb-4 my-2">
            <div className="text-sm">Value Added Tax (VAT)</div>
            <input
              type="number"
              min="0"
              step="0.01"
              value={vat}
              onChange={updateVAT}
              className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-2 md:mb-0 mt-8 mb-4 my-2">
          <div className="text-sm">Select a currency</div>
          <select
            name="currency"
            onChange={handleChange}
            className="p-2 bg-gray-50 text-sm border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
          >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <button
            onClick={previewPdf}
            className="focus:outline-none border-2 border-primary bg-white w-28 py-2 rounded-lg hover:bg-primary hover:text-white "
          >
            <div className="flex flex-row items-center justify-center space-x-2">
              <AiOutlineEye />
              <div className="font-bold text-sm">Preview</div>
            </div>
          </button>
          <button
            onClick={downloadPdf}
            className="focus:outline-none border-2 border-primary bg-primary w-32 py-2 rounded-lg hover:opacity-75"
          >
            <div className="flex flex-row items-center justify-center space-x-2 text-white ">
              <FiDownload />
              <div className="font-bold text-sm text-white cursor-pointer ">
                Download
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
