import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo2.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import { IoMdPersonAdd } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        {/* khung tong */}
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
          <img
            src={Logo}
            alt="Weddings"
            width="214"
            height="32"
            className="md:cursor-pointer h-9"
          ></img>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-1 font-[Poppins]">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block hover:text-#19b5bc">
              Home
            </Link>
          </li> */}
          <NavLinks />
        </ul>
        <div className="md:block hidden items-center justify-center flex-col">
          <div className="flex justify-center items-center mb-1 mt-2 flex-row  rounded-lg hover:text-primary hover:shadow-sm">
            <IoMdPersonAdd style={{fontSize:'1.25rem'}}/>
            <Button label="ARE YOU A VENDOR?" className='bg-white pr-2' />
          </div>
          <div className="flex justify-center items-center space-x-4 py-2">
  <Button label="LOGIN" className="bg-white text-slate-700 hover:text-primary hover:shadow-md" />
  <Button label="JOIN NOW!" className="bg-white hover:text-primary hover:shadow-md" />
</div>

        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 z-40  pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block hover:text-#19b5bc">
              Home
            </Link>
          </li>
          <NavLinks  className=""/>
          <div className="py-5">
            <Button label="Get Started" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
