import React, { useState, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const offers = {
    all: [
      
      { id: 1, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://gos3.ibcdn.com/cabs-1539593979.jpg" },
      { id: 2, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://gos3.ibcdn.com/cabs-1539596291.jpg" },
      { id: 3, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://th.bing.com/th/id/OIP.IEavJOmwPlOlNZD-kPbyVgHaD4?w=1200&h=628&rs=1&pid=ImgDetMain" },
      { id: 4, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://th.bing.com/th/id/OIP.fC1IH9nadYJ-JsaheCUjcwHaD6?rs=1&pid=ImgDetMain" },
      { id: 5, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://i.pinimg.com/originals/2b/21/79/2b2179650063bc026dc5fc28d3351d2b.jpg" },
      { id: 6, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://th.bing.com/th/id/OIP.Lfzp-LjF_lkAXOk881-fAAHaD4?rs=1&pid=ImgDetMain" }
      
    ]
  };


const COffer = () => {

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef(null);
  

  return (
   <div className="w-[54.2vw] mx-auto p-6 mt-56 mb-16 bg-[#8181cc] rounded-lg shadow-md">
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

export default COffer
