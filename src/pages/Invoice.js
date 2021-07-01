import React from "react";
import NewInvoiceForm from "../components/NewInvoiceForm";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/SideBar/Navbar";

function Invoice() {
  return (
    <div>
      <Navbar />
      <div className="xl:flex md:flex-row flex-col-reverse md:grid">
        <NewInvoiceForm />
        <SideBar />
      </div>
    </div>
  );
}

export default Invoice;
