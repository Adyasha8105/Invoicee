import React, { useState } from "react";
import "../../../styles/ContactField.css";
import { IoPeopleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { TextField } from "../ContactForms/Input";

const FromContactField = () => {
	const [showModal, setShowModal] = useState(false);
	const [senderDetails, setSenderDetails] = useState(null);

	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm({});

	const onSubmit = (data) => {
		setShowModal(false);
		setSenderDetails(data);
	};

	return (
		<>
			<div
				onClick={() => setShowModal(true)}
				className="parent bg-gray-50 w-full border-dashed border-2 border-opacity-20 border-gray-400 hover:border-primary flex flex-row space-x-7 py-2 px-4 cursor-pointer md:mr-4"
			>
				<div className="flex flex-col">
					<p className="text-gray-500 text-xs">FROM</p>
					{!senderDetails ? (
						<div className="w-full flex flex-row items-center justify-between space-x-4 mb-2">
							<div className="text-3xl text-black">
								<IoPeopleOutline />
							</div>
							<div className="flex flex-col">
								<div className="text-black">Sender Name</div>
								<div className="font-light text-xs text-gray-500">Sender contact details</div>
							</div>
						</div>
					) : (
						<>
							<div>{senderDetails.desgination}</div>
							<div>{senderDetails.name}</div>
							<div>{senderDetails.email}</div>
							<div>{senderDetails.tax_regd_no}</div>
							<div>{senderDetails.address}</div>
							<div>{senderDetails.phone}</div>
							<div>{senderDetails.country}</div>
							<div>{senderDetails.others}</div>
						</>
					)}
				</div>
			</div>

			{showModal ? (
				<>
					<div className="justify-center items-center md:flex sm:mx-6 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="py-2 px-4 flex flex-row items-center justify-between border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-xl font-semibold">Sender's Details</h3>
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
													label="Name"
													name="name"
													register={register}
													errors={errors}
													rules={{ maxLength: 20, required: true, min: 3 }}
												/>
												<TextField
													label="Designation"
													name="desgination"
													register={register}
													errors={errors}
													rules={{ maxLength: 20, required: true, min: 3 }}
												/>
											</div>
											<div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
												<TextField
													label="Email"
													name="email"
													register={register}
													errors={errors}
													rules={{
														required: true,
														pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
													}}
												/>
												<TextField
													label="Tax regd. No. (GST)"
													name="tax_regd_no"
													register={register}
													errors={errors}
													rules={{ maxLength: 20, required: false, min: 3 }}
												/>
											</div>

											<hr className="solid" />
											<div>
												<TextField
													label="Address"
													name="address"
													register={register}
													errors={errors}
													rules={{ required: true, maxLength: 40, min: 5 }}
												/>
											</div>

											<div className="w-full flex md:flex-row flex-col justify-between md:space-x-8 md:space-y-0 space-y-4">
												<TextField
													label="Phone"
													name="phone"
													register={register}
													errors={errors}
													rules={{ required: true, maxLength: 20 }}
												/>
												<TextField
													label="Country"
													name="country"
													register={register}
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

export default FromContactField;
