import React from "react";
import "../styles/InputField.css";

export default function InputField({ label, inputType, defaultValue }) {
	return (
		<div className="parentInputField flex md:flex-row flex-col items-center space-x-2 md:mb-0 mb-4">
			<div className="font-bold text-sm">{label}</div>
			<input
				type={inputType}
				className="inputFieldParent flex-shrink-1 min-w-min text-sm bg-gray-50 border-dashed border-2 border-opacity-20 border-gray-200 rounded-md hover:border-primary focus:outline-none p-1"
				defaultValue={defaultValue}
			/>
		</div>
	);
}
