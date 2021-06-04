import React from "react";

function Navbar() {
  return (
    <div className="w-screen flex flex-row justify-between items-center py-2 px-16 border-2 border-black">
      <div className="text-lg font-bold">Invoicee</div>
      <div className="flex flex-row h-full space-x-28 items-center">
        <div className="font-bold">Home</div>
        <div className="font-bold">About Us</div>
        <button className="bg-black text-white font-bold rounded-md py-2 px-4">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
