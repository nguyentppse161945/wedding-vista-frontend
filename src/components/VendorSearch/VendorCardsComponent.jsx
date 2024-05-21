import React from "react";
import { CiBank } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Button from "../Button";

const VendorCard = ({ icon, title, description, bgImage }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 p-4 m-2 h-16rem">
      <div className="relative flex items-center justify-center h-24 mb-4">
        <div
          className="absolute bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            width: "225px",
            height: "88px",
          }}
        />
        <div className="relative z-10">{icon}</div>
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
          alt="Wedding Photographers"
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
        <img src="https://cdn1.weddingwire.com/assets/svg/original/illustration/catering.svg" alt="Wedding Caterers" className="h-8" />
      ),
      bgImage: "src/assets/smallImg/caterers.png",
      title: "Wedding Caterers",
      description:
        "Find experienced chefs, bartenders, and caterers to craft the ultimate menu to remember.",
    },
    {
      icon: (
        <img src="https://cdn1.weddingwire.com/assets/svg/original/illustration/dress.svg" alt="Wedding Attire" className="h-8" />
      ),
      bgImage: "src/assets/smallImg/dress2.png",
      title: "Wedding Attire",
      description:
        "Shop in style for your unique wedding look by exploring boutiques and stores near you.",
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-6">
      <h2 className="text-2xl font-bold mb-8">Find every vendor you need</h2>
      <p className="text-gray-600 mb-8">
        Connect with seasoned wedding pros to help bring your day to life.
      </p>
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
        {vendorCards.map((card, index) => (
          <SwiperSlide key={index}>
            <VendorCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-8">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 my-2 px-4 rounded-full mr-4">
          Wedding Planners
        </button>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
};

export default VendorCardsComponent;
