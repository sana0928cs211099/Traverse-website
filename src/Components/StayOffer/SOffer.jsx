import React, { useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const offers = {
  all: [
    {
      id: 1,
      category: "Stays",
      title: "Free Hotel Stay in Dubai",
      description: "Secure your seat by paying 25% now, 75% later!",
      validity: "Limited period offer",
      img: "https://www.metanoiatravelguide.com/images/Emirates%20Offers%20Free%20Hotel%20Stay%20in%20Dubai%20for%20Long%20Layover%20Passengers.jpg",
    },
    {
      id: 2,
      category: "Stays",
      title: "Belmont Hotel Mactan Cebu",
      description: "Get daily breakfast & free airport transfers!",
      validity: "Limited period offer",
      img: "https://th.bing.com/th/id/OIP.RRv85EMz1t2dfjPVau8-XAHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      category: "Stays",
      title: "Budget Hotel Deals",
      description: "Book hotels with extra discounts and amenities.",
      validity: "Limited period offer",
      img: "https://gos3.ibcdn.com/top-1506586697.jpg",
    },
    {
      id: 4,
      category: "Stays",
      title: "Holiday Resort Packages",
      description: "Enjoy exclusive resort offers for families and couples.",
      validity: "Limited period offer",
      img: "https://pbs.twimg.com/media/Dz6VFIOWwAAoS9V.jpg:large",
    },
    {
      id: 5,
      category: "Stays",
      title: "Top Hotels Under ₹999",
      description: "Best deals on budget stays across cities.",
      validity: "Limited period offer",
      img: "https://gos3.ibcdn.com/top-1583912638.jpg",
    },
    {
      id: 6,
      category: "Stays",
      title: "Luxury Hotel Deals",
      description: "Book 5-star hotels with huge savings!",
      validity: "Limited period offer",
      img: "https://www.black-boy-inn.com/wp-content/uploads/2023/01/stay-3-nights-for-the-price-of-2-1.jpg",
    },
  ],
};

const SOffer = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const scrollRef = useRef(null);


  return (
    <div className="w-[54.2vw] mx-auto p-6 mt-20 mb-16 bg-[#8181cc] rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Hotel Stay Offers</h1>

      <div className="relative">
    

        {/* Scrollable Offers */}
        <div
          ref={scrollRef}
          className=" grid grid-cols-3 gap-3"
        >
          {offers[selectedCategory].map((offer) => (
            <div
              key={offer.id}
              className=" bg-white h-80 w-80 rounded-lg shadow-lg hover:shadow-gray-800 p-4 flex-shrink-0"
            >
              <img
                src={offer.img}
                alt={offer.title}
                className="rounded w-full h-40 object-cover mb-3"
              />
              <h2 className="font-bold text-lg mb-1">{offer.title}</h2>
              <p className="text-sm mb-1">{offer.description}</p>
              <p
                className={`text-sm font-semibold ${
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

export default SOffer;
