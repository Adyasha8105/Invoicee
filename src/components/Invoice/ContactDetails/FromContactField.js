import React from "react";
import "../../../styles/ContactField.css";
import { IoPeopleOutline } from "react-icons/io5";
import SenderDetails from "../ContactForms/SenderDetails";

const ContactField = () => {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<>
			<div
				onClick={() => setShowModal(true)}
				className="parent bg-gray-50 w-full border-dashed border-2 border-opacity-20 border-gray-400 hover:border-primary flex flex-row space-x-7 py-2 px-4 cursor-pointer md:mr-4"
			>
				<div className="flex flex-col">
					<p className="text-gray-500 text-xs">FROM</p>
					<div className="w-full flex flex-row items-center justify-between space-x-4 mb-2">
						<div className="text-3xl text-black">
							<IoPeopleOutline />
						</div>
						<div className="flex flex-col">
							<div className="text-black">Sender Name</div>
							<div className="font-light text-xs text-gray-500">Sender contact details</div>
						</div>
					</div>
				</div>
			</div>

			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-xl font-semibold">Sender Details</h3>
									<button
										className="p-1 ml-auto border-0 text-black opacity-2 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<div className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</div>
									</button>
								</div>
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
										<SenderDetails />
									</p>
								</div>
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="bg-primary text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};

export default ContactField;
