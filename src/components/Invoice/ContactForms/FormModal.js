import React from 'react';
import ModalInputField from "./ModalInputField";

function FormModal() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
                <ModalInputField label="Name of the company" required="false"/>
                <ModalInputField label="Full name" required="true"/>
            </div>
            <div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
                <ModalInputField label="Tax regd. no. (GST)" required="false"/>
                <ModalInputField label="Email" required="true"/>
            </div>
            <hr className="solid"/>
            <div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
                <ModalInputField label="Address 1" required="true"/>
                <ModalInputField label="Address 2" required="false"/>
            </div>
            <div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
                <ModalInputField label="Phone" required="true"/>
                <ModalInputField label="Country" required="true"/>
            </div>
            <ModalInputField label="Another" required="false" />
        </div>
    );
}

export default FormModal;