import React from "react";

export default function ModalInputField({ label, required }) {
    return (
        <div className="flex flex-col text-black space-y-2">
            <label className="font-bold text-sm">
                {label} {required !== "false" ? <span className="text-red-600">*</span> : null}
            </label>
            <input id="inputField" type="text" className="border border-black rounded-md p-1 text-sm"/>
        </div>
    )
}