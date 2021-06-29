import { GrGallery } from "react-icons/gr";
import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentInvoice} from "../../actions";

const FileInputField = () => {

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null)

    const currentInvoice = useSelector((state) => state.invoiceReducer); 
    const dispatch = useDispatch(); 

    console.log("Chaning the logo"); 
    console.log({ currentInvoice }); 

	const fileChangedHandler = (event) => {
		let reader = new FileReader()
	
		reader.onloadend = () => {
			setImagePreviewUrl(reader.result)
            dispatch(updateCurrentInvoice("logo", reader.result));
		}
		reader.readAsDataURL(event.target.files[0])
	}
	
	let $imagePreview = (
		<div className="mb-2 md:text-md text-sm">Select a file for your logo</div>
	)
	if (imagePreviewUrl) {
		$imagePreview = <img className="flex-end float-right" src={imagePreviewUrl} width="25%" alt="icon" />
	}

	return (
		<button className="parent w-full border-dashed border-2 border-gray-400 border-opacity-20 bg-gray-50 hover:border-primary">
			<div className="w-full flex md:flex-row flex-col md:space-x-2 py-4 px-4">
				<div className="text-center flex flex-row md:justify-start justify-center text-2xl">
					<GrGallery />
				</div>
				<div className="flex flex-col items-start md:items-center md:mt-0 mt-2">
				{$imagePreview}
					<label className="m-auto text-xs">
						<input type="file" name="avatar" onChange={fileChangedHandler} />
					</label>
				</div>
			</div>
		</button>
	);
};

export default FileInputField;
