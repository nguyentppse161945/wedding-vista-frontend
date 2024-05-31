import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { CiShop } from "react-icons/ci";

const PeekToolsComponent = () => {
  const tools = [
    {
      title: "Your free wedding website",
      description:
        "Give your guests all the info and tell your love story, with a 100% customizable site.",
      buttonText: "Create your free website",
      icon: "https://cdn1.weddingwire.com/assets/svg/original/illustration/websites.svg",
    },
    {
      title: "Invites and paper",
      description:
        "Get free samples of save the dates and invites before you decide.",
      buttonText: "Request free samples",
      icon: "https://cdn1.weddingwire.com/assets/svg/original/illustration/envelope.svg",
    },
    {
      title: "Planning tools",
      description:
        "All under control: Checklist, Budget Planner, Seating Chart and much more!",
      buttonText: "Discover our tools",
      icon: "	https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg",
    },
    // {
    //   title: "Wedding Venues",
    //   description:
    //     "All under control: Checklist, Budget Planner, Seating Chart and much more!",
    //   buttonText: "Discover our tools",
    //   icon: "	https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg",
    // },
    {
      title: "Vendors",
      description:"Find the best wedding vendors near you in every category",
      buttonText: "Gather your Team",
      icon: "https://cdn1.weddingwire.com/assets/svg/original/illustration/catering.svg",
    },
 

  ];

  return (
    <div className="bg-gray-50 py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 ">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enjoy planning your wedding
            </h2>
            <p className="text-gray-700">
              Start planning your wedding with us, it's free!
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mt-8 md:mt-0 ">
            {/* <button className="bg-gradient-to-r from-pink-200 to-yellow-200 hover:bg-pink-300 text-pink-500 font-semibold py-2 px-4 rounded-full m-8 h-full mb-4 transition-transform transform hover:scale-105 sparkle">
  Wedding Planners
</button> */}
            <div className=" ml-[13rem] wrapper bg-gradient-to-r from-pink-200 to-yellow-200 hover:bg-pink-300 text-pink-500 font-semibold rounded-full relative button-container">
              <a
                href="#"
                className="block w-64 h-12 leading-12 font-bold text-center uppercase text-white bg-gray-800 border-2 border-gray-800 transition-all duration-300 hover:w-48 hover:bg-transparent hover:text-pink-500 hover:border-white"
              >
                Wedding Planner
              </a>
              <div className="icon absolute top-0 right-0 w-12 h-12 border-2 border-transparent transform rotate-45 z-0 transition-all duration-300 hover:right-[-25%] hover:border-pink-500">
                <svg
                  className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] fill-orange-500 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>

            {/* Add more buttons as needed */}
          </div>
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md border-4 hover:shadow-lg  transition-transform transform hover:scale-105 duration-300 m-3 p-6 flex ">
                <div>
                  <div className="flex justify-between h-[160px]">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
                        {tool.title}
                      </h3>
                      <p className="text-gray-700 mb-4 ">{tool.description}</p>
                    </div>
                    <img
                      className="svgIcon svgIcon__websites planYourWeddingTile__icon"
                      src={tool.icon}
                      alt="illustration websites"
                      width={56}
                      height={56}
                    />
                  </div>
                  <button className="bg-white border-2 border-slate-200 hover:shadow-lg  text-black font-semibold py-2 px-4 rounded-md transition-transform transform hover:scale-105">
                    {tool.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <button className="bg-white-200 hover:shadow-lg  text-pink-900 font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105">
            Find a couple's website or registry
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeekToolsComponent;
