import React from "react";
import "../styles/ContactField.css";

const ContactField = ({ icon, label, subLabel, fromOrTo }) => {
	return (
		<div className="parent bg-gray-50 w-full border-dashed border-2 border-opacity-20 border-gray-400 hover:border-primary flex flex-row space-x-7 py-2 px-4">
			<div className="flex flex-col">
				<p className="text-gray-500 text-xs">{fromOrTo}</p>
				<div className="w-full flex flex-row items-center justify-between space-x-4 mb-2">
					<div className="text-3xl text-black">{icon}</div>
					<div className="flex flex-col">
						<div className="text-black">{label}</div>
						<div className="font-light text-xs text-gray-500">{subLabel}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactField;
