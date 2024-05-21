import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PeekToolsComponent = () => {
  const tools = [
    {
      title: "Your free wedding website",
      description:
        "Give your guests all the info and tell your love story, with a 100% customizable site.",
      buttonText: "Create your free website",
    },
    {
      title: "Invites and paper",
      description:
        "Get free samples of save the dates and invites before you decide.",
      buttonText: "Request free samples",
    },
    {
      title: "Planning tools",
      description:
        "All under control: Checklist, Budget Planner, Seating Chart and much more!",
      buttonText: "Discover our tools",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enjoy planning your wedding
            </h2>
            <p className="text-gray-700">
              Start planning your wedding with us, it's free!
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mt-8 md:mt-0">
            <button className="bg-gradient-to-r from-pink-200 to-yellow-200 hover:bg-pink-300 text-pink-500 font-semibold py-2 px-4 rounded-full m-8 h-full mb-4 transition-transform transform hover:scale-105">
              Wedding Planners
            </button>
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
              slidesPerView: 3,
            },
          }}
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md border-4 hover:shadow-lg  transition-transform transform hover:scale-105 duration-300 m-3 p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {tool.title}
                </h3>
                <p className="text-gray-700 mb-4">{tool.description}</p>
                <button className="bg-white border-2 border-pink-300 hover:bg-gradient-to-r from-pink-300 to-pink-200 text-black font-semibold py-2 px-4 rounded-md transition-transform transform hover:scale-105">
                  {tool.buttonText}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <button className="bg-pink-200 hover:bg-pink-300 text-pink-900 font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105">
            Find a couple's website or registry
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeekToolsComponent;
