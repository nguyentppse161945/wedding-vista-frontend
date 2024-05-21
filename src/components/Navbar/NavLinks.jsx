import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-2 text-left md:cursor-pointer group gap-5">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 no-underline font-poppins text-gray-600 text-lg tracking-wide relative hover:text-primary"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-8">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block w-full left-0 mt-0 ">
                  {/* dropdown */}
                  <div className="bg-white p-7 grid grid-cols-4 gap-10 mt-4">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={`${mysublinks.Head}-${index}`} >
                        <h1 className="text-lg font-semibold hover:text-primary items-center justify-center ">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, subIndex) => (
                          <li key={`${slink.link}-${subIndex}`} className="text-md text-gray-600 my-2.5 flex gap-2 hover:text-primary mr-15">
                           <div className="flex flex-row justify-center items-center gap-0">
                           <a className="justify-center items-center flex pr-2" style={{ fontSize: '2em' }}>
                              {slink.icon}
                            </a>
                            <Link to={slink.link} className="hover:text-primary font-serif">
                              {slink.name}
                            </Link>
                           </div>
                            <div className="flex flex-row justify-center items-center pt-10 mr-1">
                              <Link to={slink.link} className="hover:text-primary font-serif">
                                {slink.name2}
                              </Link>
                              <a className="justify-center items-center flex " style={{ fontSize: '3.5em', paddingLeft:'0rem', color:'pink'}}>
                                {slink.icon2}
                              </a>
                            </div>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => (
              <div key={`${slinks.Head}-${index}`}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center hover:text-primary"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head ? "chevron-up" : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                    {slinks.sublink.map((slink, subIndex) => (
                      <li key={`${slink.link}-${subIndex}`} className="py-3 pl-14 hover:text-primary">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
