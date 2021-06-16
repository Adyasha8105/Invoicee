import React, { useState } from "react";
import "../../../styles/ContactField.css";
import { BsPerson } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { TextField } from "../ContactForms/Input";

const ToContactField = () => {
	const [showModal, setShowModal] = useState(false);
	const [recipientDetails, setRecipientDetails] = useState(null);

	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();

	const onSubmit = (data) => {
		setShowModal(false);
		setRecipientDetails(data);
	};

	return (
		<>
			<div
				onClick={() => setShowModal(true)}
				className="parent bg-gray-50 w-full border-dashed border-2 border-opacity-20 border-gray-400 hover:border-primary flex flex-row space-x-7 py-2 px-4 cursor-pointer md:ml-4"
			>
				<div className="flex flex-col">
					<p className="text-gray-500 text-xs">TO</p>
					{!recipientDetails ? (
						<div className="w-full flex flex-row items-center justify-between space-x-4 mb-2">
							<div className="text-3xl text-black">
								<BsPerson />
							</div>
							<div className="flex flex-col">
								<div className="text-black">Recipient Name</div>
								<div className="font-light text-xs text-gray-500">Recipient contact details</div>
							</div>
						</div>
					) : (
						<>
							<div>{recipientDetails.name_of_the_company}</div>
							<div>{recipientDetails.name}</div>
							<div>{recipientDetails.email}</div>
							<div>{recipientDetails.tax_regd_no}</div>
							<div>{recipientDetails.address}</div>
							<div>{recipientDetails.phone}</div>
							<div>{recipientDetails.country}</div>
							<div>{recipientDetails.others}</div>
						</>
					)}
				</div>
			</div>

			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="py-2 px-4 flex flex-row items-center justify-between border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-xl font-semibold">Recipient's Details</h3>
									<button
										className="border-0 text-black opacity-2 text-3xl leading-none font-bold focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<div className="text-black text-2xl block outline-none focus:outline-none">
											×
										</div>
									</button>
								</div>
								<div className="relative p-6 flex-auto">
									<div className="my-4 text-blueGray-500 text-lg leading-relaxed">
										
										<form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
											<div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
												<TextField
													label="Name of the Company"
													register={register}
													name="name_of_the_company"
													errors={errors}
													rules={{ maxLength: 20, required: false, min: 3 }}
												/>
												<TextField
													label="Name"
													register={register}
													name="name"
													errors={errors}
													rules={{ maxLength: 20, required: true, min: 3 }}
												/>
											</div>
											<div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
												<TextField
													label="Email"
													register={register}
													name="email"
													errors={errors}
													rules={{
														required: true,
														pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
													}}
												/>
												<TextField
													label="Tax regd. No. (GST)"
													register={register}
													name="tax_regd_no"
													errors={errors}
													rules={{ maxLength: 20, required: false, min: 3 }}
												/>
											</div>

											<hr className="solid" />
											<div>
												<TextField
													label="Address"
													register={register}
													name="address"
													errors={errors}
													rules={{ required: false, maxLength: 40, min: 10 }}
												/>
											</div>

											<div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
												<TextField
													label="Phone"
													register={register}
													name="phone"
													errors={errors}
													rules={{ required: true, maxLength: 20 }}
												/>
												<TextField
													label="Country"
													register={register}
													name="country"
													errors={errors}
													rules={{ required: true, maxLength: 20 }}
												/>
											</div>
											<div>
												<TextField
													label="Others"
													name="others"
													register={register}
													errors={errors}
													rules={{ required: false, maxLength: 40, min: 10 }}
												/>
											</div>
											<div className="flex items-center justify-end pt-4 border-t border-solid border-blueGray-200 rounded-b">
												<button
													className="bg-primary text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
													type="submit"
												>
													Save Changes
												</button>
											</div>
										</form>
									</div>
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

export default ToContactField;
