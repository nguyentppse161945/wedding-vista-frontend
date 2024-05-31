import React from "react";
import Breadcrumb from "../Navbar/Breadcrumb";
import SearchComponent from "../VendorSearch/SearchComponent";

const TopSearchPageComponent = () => {
  return (
    <div className="bg-white p-4 z-50 mt-[-5rem] pt-[5rem]">
       <Breadcrumb />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8 md:ml-10 ">
       

          <h2 className="text-3xl font-extrabold text-black mb-4 justify-center items-center">
            Let's find your wedding team
          </h2>
          <p className="text-lg text-slate-800 mb-6">
            Search over 250,000 local professionals with reviews, pricing,
            availability, and more.
          </p>
          <SearchComponent />
        </div>
        <div className="w-full  md:w-1/2 justify-center items-center">
          <img
            src="https://cdn.vox-cdn.com/thumbor/iX3oDk5r1P0qhw5Y7ZDmwFEYzC4=/0x0:5456x3513/1200x0/filters:focal(0x0:5456x3513):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19290067/GettyImages_586339356.jpg"
            alt="Wedding venue"
            className="   h-[200px] w-[580px] object-cover rounded-lg shadow-lg  "
          />
        </div>
      </div>
    </div>
  );
};

export default TopSearchPageComponent;