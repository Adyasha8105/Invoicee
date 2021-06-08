import {GrGallery} from "react-icons/gr";
import React from "react";

const FileInputField = () => {
    return (
        <div className="w-full border-dashed border border-gray-400 flex flex-row space-x-2 py-4 pl-4">
            <div className="text-2xl">
                <GrGallery/>
            </div>
            <div className="">Select a file for your logo</div>
        </div>
    );
}

export default FileInputField;