import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import SearchComponent from "./SearchComponent";



const VendorComponent = () => {
  return (
    <div className="bg-white-500 p-1 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center z-0">
      
        <div className="max-w-md top-10rem">
         <motion.div
      className="bg-white-500 py-12 z-0 hover:z-0"
      initial={{ y: -100, opacity: 0, filter: "blur(4px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 2.25, ease: "easeOut" }}
    >
     <div>
     <h2 className="text-3xl font-extrabold text-black z-0 hover:z-5">
            Let's find your wedding team
          </h2>
          
          <p className="mt-4 text-lg text-slate-800">
            Search over 250,000 local professionals with reviews, pricing,
            availability, and more.
          </p>
          <SearchComponent/>
          

     </div>
     </motion.div>


        </div>
        <div className="max-w-lg">
          <img
            src="https://nld.mediacdn.vn/2019/11/10/597a1040-2-1573351685214685995574.jpg"
            alt="Wedding banner"
            className="rounded-lg shadow-lg"
          />
          
        </div>

      </div>
    </div>
  );
};

export default VendorComponent;
