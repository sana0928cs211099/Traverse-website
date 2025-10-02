import React, { useState, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const offers = {
  all: [
    {
      id: 1,
      category: 'Flight',
      title: 'Flight',
      description: 'Secure your seat by paying 25% now, 75% later!',
      validity: 'Limited period offer',
      img: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618487666251/domestic-flights-coupons.jpg',
    },
    {
      id: 2,
      category: 'Flight',
      title: 'Flight',
      description: 'Secure your seat by paying 25% now, 75% later!',
      validity: 'Limited period offer',
      img: 'https://cdn.grabon.in/gograbon/images/category/1531017071958.jpg',
    },
    {
      id: 3,
      category: 'Flight',
      title: 'Flight',
      description: 'Secure your seat by paying 25% now, 75% later!',
      validity: 'Limited period offer',
      img: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575355495/flight-offers.jpg',
    },
    {
      id: 4,
      category: 'Flight',
      title: 'Flight',
      description: 'Secure your seat by paying 25% now, 75% later!',
      validity: 'Limited period offer',
      img: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1550227761496/Air-India-Coupons.jpg',
    },
    {
      id: 5,
      category: 'Flight',
      title: 'Flight',
      description: 'Secure your seat by paying 25% now, 75% later!',
      validity: 'Limited period offer',
      img: 'https://shiftedmag.com/wp-content/uploads/2020/10/Amazing-Secrets-to-Book-a-Cheap-Flight-to-India-for-a-Great-Saving-800x396-1.jpg',
    },
    {
      id: 6,
      category: 'Flight',
      title: 'Flight',
      description: 'Secure your seat by paying 25% now, 75% later!',
      validity: 'Limited period offer',
      img: 'https://gos3.ibcdn.com/top-1528974295.jpg',
    },
  ],
};

const FOffer = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const scrollRef = useRef(null);


  return (
    <div className="w-[54.2vw] mx-auto p-6 mt-64 mb-16 bg-[#8181cc] rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Offers For You</h1>

      <div className="relative">
       

        {/* Scrollable Offers */}
        <div
          ref={scrollRef}
          className="grid grid-cols-3 gap-3"
          style={{ scrollBehavior: 'smooth' }}
        >
          {offers[selectedCategory].map((offer) => (
            <div
              key={offer.id}
              className=" bg-white h-80 w-80 rounded-lg shadow-lg hover:shadow-gray-800 p-4 flex-shrink-0"
            >
              <img
                src={offer.img}
                alt={`Offer ${offer.id}`}
                className="rounded mb-2 w-full h-40 object-cover"
              />
              <h2 className="font-bold text-lg mb-1">{offer.title}</h2>
              <p className="text-gray-700 text-sm">{offer.description}</p>
              <p
                className={`text-sm mt-2 ${
                  offer.validity.includes('Limited') ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                {offer.validity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FOffer;
