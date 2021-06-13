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
		<div className="float-left mb-1">Select a file for your logo</div>
	)
	if (imagePreviewUrl) {
		$imagePreview = <img className="flex-end float-right" src={imagePreviewUrl} width="25%" alt="icon" />
	}

	return (
		<button className="parent w-full border-dashed border-2 border-gray-400 border-opacity-20 bg-gray-50 hover:border-primary">
			<div className="w-full flex flex-row space-x-2 py-4 pl-4">
				<div className="text-2xl">
					<GrGallery />
				</div>
				<div>
				{$imagePreview}
					<label clasName="custom-file-upload btn1">
						<input type="file" name="avatar" onChange={fileChangedHandler} />
					</label>
				</div>
			</div>
		</button>
	);
};

export default FileInputField;