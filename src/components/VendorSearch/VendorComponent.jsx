import React from "react";
import Button from "../Button";


const VendorComponent = () => {
  return (
    <div className="bg-white-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <div className="max-w-md top-10rem">
          <h2 className="text-3xl font-extrabold text-black">
            Let's find your wedding team
          </h2>
          <p className="mt-4 text-lg text-slate-800">
            Search over 250,000 local professionals with reviews, pricing,
            availability, and more.
          </p>
          <div className="mt-6 flex">
            <input
              type="text"
              placeholder="Wedding Venues"
              className="px-4 py-2 w-full rounded-l-md border-2 border-slate-700 focus:outline-none focus:ring-1 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Location"
              className="px-4 py-2 w-40 border-2 border-l-0 border-slate-700 focus:outline-none focus:ring-1 focus:ring-pink-400"
            />
            <div className="px-4 py-2 bg-gradient-to-r from-pink-200 to-yellow-200 text-slate-700 border-2 border-l-0 border-slate-700 rounded-r-md hover:text-black focus:outline-none focus:ring-2 focus:ring-pink-400">
              <Button label="Search" className="bg-gradient-to-r from-pink-200 to-yellow-200 hover:text-white" />
            </div>
          </div>
        </div>
        <div className="max-w-lg">
          <img
            src="\src\assets\wp44.png"
            alt="Wedding banner"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default VendorComponent;
