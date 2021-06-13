import React from "react";
import NewInvoiceForm from "../components/NewInvoiceForm";
import SideBar from "../components/SideBar/SideBar";

function Invoice() {
	return (
		<div className="xl:flex md:flex-row flex-col-reverse md:grid">
			<SideBar />
			<NewInvoiceForm />
		</div>
	);
}

export default Invoice;
