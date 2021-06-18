import React from "react";

const TextField = ({ label, register, rules, errors, name }) => {
    return (
        <div>
            <div className="text-gray-500 text-sm text-left mb-1">
                {label}
                {rules.required ? (
                    <span className="text-red-400">*</span>
                ) : null}
            </div>
            <input
                className="w-full border-black p-1 border rounded"
                {...register(name, { ...rules })}
            />
            {errors[name] && errors[name].type === "required" && (
                <p className="mb-1 text-sm text-red-500 text-left">
                    {label} is required
                </p>
            )}
            {errors[name] && errors[name].type === "maxLength" && (
                <p className="mb-1 text-sm text-red-500 text-left">
                    {label} should be have maximum of {rules.maxLength}{" "}
                    characters
                </p>
            )}
            {errors[name] && errors[name].type === "min" && (
                <p className="mb-1 text-sm text-red-500 text-left">
                    {label} should be contain atleast {rules.min} characters
                </p>
            )}
            {errors[name] && errors[name].type === "pattern" && (
                <p className="mb-1 text-sm text-red-500 text-left">
                    {label} is invalid
                </p>
            )}
        </div>
    );
};
export default TextField;
