import { GrGallery } from "react-icons/gr";
import React, { useState } from "react";

const FileInputField = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null)

	const fileChangedHandler = (event) => {
		setSelectedFile(event.target.files[0])
		let reader = new FileReader()
	
		reader.onloadend = () => {
			setImagePreviewUrl(reader.result)
		}
		reader.readAsDataURL(event.target.files[0])
	}
	
	let $imagePreview = (
		<div className="mx-auto mb-1 md:text-lg text-sm">Select a file for your logo</div>
	)
	if (imagePreviewUrl) {
		$imagePreview = <img className="flex-end float-right" src={imagePreviewUrl} width="25%" alt="icon" />
	}

	return (
		<button className="parent w-full border-dashed border-2 border-gray-400 border-opacity-20 bg-gray-50 hover:border-primary">
			<div className="w-full flex md:flex-row flex-col md:space-x-2 py-4 px-4">
				<div className="text-center flex flex-row md:justify-start justify-center  text-5xl">
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
