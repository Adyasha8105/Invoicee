import React from 'react';
import NewInvoiceForm from '../components/NewInvoiceForm';
import SideBar from '../components/SideBar'; 

function Invoice() {
	return (
		<div className="flex md:flex-row flex-col-reverse">
			<NewInvoiceForm />
			<SideBar />
		</div>
	);
};


export default Invoice;
