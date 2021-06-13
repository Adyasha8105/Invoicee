import {GrGallery} from "react-icons/gr";
import React from "react";

const FileInputField = () => {
    return (
        <button className="parent w-full border-dashed border-2 border-gray-400 border-opacity-20 bg-gray-50 hover:border-primary">
            <div className="w-full flex flex-row space-x-2 py-4 pl-4">
                <div className="text-2xl">
                    <GrGallery/>
                </div>
                <div className="">Select a file for your logo</div>
            </div>
        </button>
    );
}

export default FileInputField;
