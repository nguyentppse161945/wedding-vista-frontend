 
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { ChevronLeft, ChevronRight } from "react-feather";

SwiperCore.use([Navigation, Autoplay]);

const WebsiteComponent = ({ icon, title, description, bgImage }) => {
  const websiteData = [
    {
      id: 187,
      image: 'https://cdn1.weddingwire.com/assets/img/wedsites/thumb/en/charcoal_floral_md.jpg',
      imageMobile: 'https://cdn1.weddingwire.com/assets/img/wedsites/thumb_mobile/en/charcoal_floral.jpg',
    },
    {
      id: 337,
      image: 'https://cdn0.weddingwire.com/website/fotos/templates/337_thumb_md.jpg?v=571af',
      imageMobile: 'https://cdn0.weddingwire.com/website/fotos/templates/337_thumb_mobile.jpg?v=571af',
    },
    // Add more website data here
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Create your wedding website</h2>
        <p className="mt-2 text-lg text-gray-600">Quickly set up your site and share all your details with your guests.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {websiteData.map((website) => (
            <div key={website.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-48 object-cover" src={website.image} alt="" />
              <img className="w-full h-48 object-cover sm:hidden" src={website.imageMobile} alt="" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-white hover:bg-slate-700 hover:text-white font-bold py-2 px-4 rounded text-slate-700">Check out more designs</button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteComponent;