import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { ChevronLeft, ChevronRight } from "react-feather";
import Button from "../Button";

SwiperCore.use([Navigation, Autoplay]);

const VendorCard = ({ icon, title, description, bgImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 p-4  m-2 h-64">
      <div className="relative flex items-center justify-center h-24 mb-4 ">
        <div
          className="absolute bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            width: "225px",
            height: "88px",
          }}
        />
        <div className="relative z-10 bg-gray-200 rounded-full p-4">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 h-full text-sm">{description}</p>
    </div>
  );
};

const VendorCardsComponent = () => {
  const vendorCards = [
    {
      icon: (
        <img
          src="https://cdn1.weddingwire.com/assets/svg/original/illustration/banquet_hall.svg"
          alt="Wedding Venues"
          className="h-8"
        />
      ),
      bgImage: "src/assets/smallImg/venues.png",
      title: "Wedding Venues",
      description:
        "Explore and tour top-rated reception venues to book a special space to celebrate your love.",
    },
    {
      icon: (
        <img
          src="https://cdn1.weddingwire.com/assets/svg/original/illustration/camera_2.svg"
          alt="Wedding Photographers"
          className="h-8"
        />
      ),
      bgImage: "src/assets/smallImg/photographer.png",
      title: "Wedding Photographers",
      description:
        "Browse local photographers and their work to find one who'll capture the essence of your day.",
    },
    {
      icon: (
        <img
          src="https://cdn1.weddingwire.com/assets/svg/original/illustration/catering.svg"
          alt="Wedding Caterers"
          className="h-8"
        />
      ),
      bgImage: "src/assets/smallImg/caterers.png",
      title: "Wedding Caterers",
      description:
        "Find experienced chefs, bartenders, and caterers to craft the ultimate menu to remember.",
    },
    {
      icon: (
        <img
          src="https://cdn1.weddingwire.com/assets/svg/original/illustration/dress.svg"
          alt="Wedding Attire"
          className="h-8"
        />
      ),
      bgImage: "src/assets/smallImg/dress2.png",
      title: "Wedding Attire",
      description:
        "Shop in style for your unique wedding look by exploring boutiques and stores near you.",
    },
  ];

  const buttonLabels = [
    "Wedding Planners",
    "Wedding Cakes",
    "Wedding DJs",
    "Wedding Photographers",
    "Wedding Hair and Makeup",
    "Wedding Rentals",
  ];

  return (
    <div className="container mx-auto px-4 mb-6">
      <h2 className="text-2xl font-bold mb-8">Find every vendor you need</h2>
      <p className="text-gray-600 mb-8">
        Connect with seasoned wedding pros to help bring your day to life.
      </p>
      <div className="relative">
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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
      <div className="relative mt-8">
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
      </div>
    </div>
  );
};

export default VendorCardsComponent;
