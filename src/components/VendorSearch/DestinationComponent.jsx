import React from "react";
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { ChevronLeft, ChevronRight } from "react-feather";
import Button from "../Button";

SwiperCore.use([Navigation, Autoplay]);

const VendorCard = ({ title, bgImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 p-4 pt-1 m-2 h-64">
      <div className="relative flex items-center justify-center h-24 m-4 ">
        <div
          className="absolute bg-cover bg-no-repeat bg-center object-contain mt-10 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            width: "266px",
            height: "200px",
          }}
        />
        {/* <div className="relative z-10 bg-gray-200 rounded-full p-4">{icon}</div> */}
      </div>
      <h3 className="text-lg font-semibold mb-2 pt-[88px]">{title}</h3>
      {/* <p className="text-gray-600 h-full text-sm">{description}</p> */}
    </div>
  );
};

const DestinationComponent = () => {
  const vendorCards = [
    {
      bgImage:
        "https://cdn1.weddingwire.com/assets/img/destination-weddings/widget-full-color/58.jpg",
      title: "Angullia",
      description:
        "Explore and tour top-rated reception venues to book a special space to celebrate your love.",
    },
    {
      bgImage:
        "https://cdn1.weddingwire.com/assets/img/destination-weddings/widget-full-color/57.jpg",
      title: "Antigua and Barbuda",
      description:
        "Browse local photographers and their work to find one who'll capture the essence of your day.",
    },
    {
      bgImage:
        "https://cdn1.weddingwire.com/assets/img/destination-weddings/widget-full-color/59.jpg",
      title: "Aruba",
      description:
        "Find experienced chefs, bartenders, and caterers to craft the ultimate menu to remember.",
    },
    {
      bgImage:
        "https://cdn1.weddingwire.com/assets/img/destination-weddings/widget-full-color/63.jpg",
      title: "Bahamas",
    },
  ];

  //   const buttonLabels = [
  //     "Wedding Planners",
  //     "Wedding Cakes",
  //     "Wedding DJs",
  //     "Wedding Photographers",
  //     "Wedding Hair and Makeup",
  //     "Wedding Rentals",
  //   ];

  return (
    <div className="container mx-auto px-4 mb-6 pt-10">
      <h2 className="text-2xl font-bold mb-8">Plan your destination wedding</h2>
      <p className="text-gray-600 mb-8">
        No matter where in the world you want to get married, WeddingWire's
        directory of international wedding professionals can help you celebrate.
        *Local laws may restrict service availability to all. See the Equality
        Index for more information.
      </p>
      <div className="relative ">
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
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: false }} // Hide pagination indicators
        >
          {vendorCards.map((card, index) => (
            <SwiperSlide key={index}>
              <VendorCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-0 ml-2 bg-white bg-opacity-80 text-gray-800 rounded-full p-1.5 z-10">
          <ChevronLeft size={12} />
        </div>
        <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 bg-white bg-opacity-80 text-gray-800 rounded-full p-1.5 z-10">
          <ChevronRight size={12} />
        </div>
      </div>
      {/* <div className="relative mt-8">
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          navigation={{
            nextEl: '.button-swiper-button-next',
            prevEl: '.button-swiper-button-prev',
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: false }} // Hide pagination indicators
        >
          {buttonLabels.map((label, index) => (
            <SwiperSlide key={index}>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full text-sm md:text-base"
              >
                {label}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="button-swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-0 ml-2 bg-white bg-opacity-80 text-gray-800 rounded-full p-1.5 z-10">
          <ChevronLeft size={24} />
        </div>
        <div className="button-swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 bg-white bg-opacity-80 text-gray-800 rounded-full p-1.5 z-10">
          <ChevronRight size={24} />
        </div>
      </div> */}
       <div className="mt-8 text-center">
          <button className="bg-white hover:bg-slate-700 hover:text-white font-bold py-2 px-4 rounded text-slate-700"><Link to='/contact-us'>
            Contact Us Now!</Link></button>
        </div>
    </div>
  );
};

export default DestinationComponent;
