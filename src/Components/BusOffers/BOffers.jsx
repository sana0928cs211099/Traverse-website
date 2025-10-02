import React, { useState, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const offers = {
    all: [
      
      { id: 1, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://th.bing.com/th/id/OIP.gmm0fsazc8RT4lqUokdR3QHaDt?rs=1&pid=ImgDetMain" },
      { id: 2, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://gos3.ibcdn.com/exclusive-bus-lp-1573024399.jpg" },
      { id: 3, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_1500,h_844,r_0,c_crop/q_80,w_455,dpr_1,f_auto,fl_progressive,c_limit/wonderla-bhubaneswar/Wonderla_Odisha_Mo_Bus_offer_Banner_1500_x_844_px" },
      { id: 4, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://th.bing.com/th/id/R.cc0d34fa1117771d3664cfae62aeb72a?rik=t1mMu%2bBYiQbGEA&riu=http%3a%2f%2fwww.flybus.in%2fimages%2fb2.jpg&ehk=U0Zizkf5PwfKRbsTk%2ffLEhbrHFkgXQNCASYBxzWxmJY%3d&risl=&pid=ImgRaw&r=0" },
      { id: 5, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://i.pinimg.com/originals/0b/ee/b0/0beeb02a4c42e33caac930fab039e8d7.png" },
      { id: 6, category: "Flight", title: "Flight", description: "Secure your seat by paying 25% now, 75% later!", validity: "Limited period offer", img: "https://gos3.ibcdn.com/img-1636968467.jpg" }
      
    ]
  };


const BOffer = () => {

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef(null);
  

  return (
    <div className="w-[54.2vw] mx-auto p-6 mt-48 mb-16 bg-[#8181cc] rounded-lg shadow-md">
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

export default BOffer
