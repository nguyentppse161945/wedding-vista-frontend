import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const WeddingDressComponent = () => {
  const dressData = [
    {
      id: 1,
      name: 'All Who Wander',
      image: 'https://cdn0.weddingwire.com/cat/wedding-photos/dresses/all-who-wander/raine--mfvr10067139.jpg',
      link: '/',
    },
    {
      id: 2,
      name: 'Stella York',
      image: 'https://cdn0.weddingwire.com/cat/wedding-photos/dresses/stella-york/7841--mfvr10065409.jpg',
      link: '/',
    },
    {
      id: 3,
      name: 'Justin Alexander',
      image: 'https://cdn0.weddingwire.com/cat/wedding-photos/dresses/justin-alexander/hyacinth--mfvr10061959.jpg',
      link: '/',
    },
    {
      id: 4,
      name: 'Martina Liana',
      image: 'https://cdn0.weddingwire.com/cat/wedding-photos/dresses/martina-liana/1334--mfvr10067399.jpg',
      link: '/',
    },
    {
      id: 5,
      name: 'Martina Liana Luxe',
      image: 'https://cdn0.weddingwire.com/cat/wedding-photos/dresses/martina-liana-luxe/le1319--mfvr10065561.jpg',
      link: '/',
    },
  ];

  return (
    <section className="bg-white py-12 x-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 text-slate-700">Find a Wedding Dress That's Uniquely You</h2>
          <h3 className="text-2xl font-semibold mb-4  ">Dress Catalog</h3>
          <p className="text-gray-600 mb-6">
            Discover the latest trends in wedding dresses by top designers and bridesmaid dresses. Choose your favorite from our catalog!
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="  hover:text-pink-700 font-semibold">
              Wedding Dresses
            </a>
            <a href="#" className="  hover:text-pink-700 font-semibold">
              Bridesmaid Dresses
            </a>
          </div>
        </div>
        <div className="swiper-container relative">
          <Swiper
             spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {dressData.map((dress) => (
              <SwiperSlide key={dress.id} className="h-full">
                <div className="bg-white rounded-lg shadow-lg   h-full transition-transform duration-300 transform hover:scale-105">
                  <a href={dress.link} className="block">
                    <img src={dress.image} alt={dress.name} className="w-22 h-full items-center justify-center object-cover" />
                  </a>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 ">{dress.name}</h3>
                  </div> 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center   hover:text-pink-700">
            Explore the Catalog
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeddingDressComponent;
