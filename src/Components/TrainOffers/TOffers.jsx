import React, { useState, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const offers = {
    all: [
      
      { id: 1, category: "Stays", title: "Stays", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://gos3.ibcdn.com/train-new-year-1577431236.jpg" },
      { id: 2, category: "Stays", title: "Stays", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://th.bing.com/th/id/OIP.5ZNO4GBwOQibaCS0mFoFEgHaD4?w=600&h=315&rs=1&pid=ImgDetMain" },
      { id: 3, category: "Stays", title: "Stays", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://i.pinimg.com/originals/bc/c8/67/bcc867c1c7936ae52aedf5a8ec98391a.png" },
      { id: 4, category: "Stays", title: "Stays", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1622009888112/train-tickets-offers.jpg" },
      { id: 5, category: "Stays", title: "Stays", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://gos3.ibcdn.com/gorail-lp-1565930679.jpg" },
      { id: 6, category: "Stays", title: "Stays", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://gos3.ibcdn.com/img-1613110986.jpg" }
      
    ]
  };


const TOffer = () => {

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef(null);
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setScrollPosition(0);
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = 0;
      }
    };
  
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= 300;
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 300;
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

  return (
    <div className="w-[54.2vw] mx-auto p-6 mt-60 mb-16 bg-[#8181cc] rounded-lg shadow-md">
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
  )
}

export default TOffer
