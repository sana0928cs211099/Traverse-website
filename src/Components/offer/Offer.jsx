import React, { useState, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const offers = {
  all: [
    { 
      id: 1, 
      category: "Hotels", 
      title: "Hotels, Hotels", 
      description: "Save up to 50% OFF on Hotels & Homestays.", 
      validity: "Valid till 15th Sep'24", 
      img: "https://th.bing.com/th/id/OIP.zkP36OBXHCHnYriSSq2HTQHaEP?rs=1&pid=ImgDetMain",
      link: "/hoteloffer"
    },
    { 
      id: 2, 
      category: "Travel", 
      title: "Bus, Hotels, Hotels, Cabs, Flights", 
      description: "Get up to 50% OFF on Travel Bookings!", 
      validity: "Limited period offer", 
      img: "https://th.bing.com/th/id/R.c262937a4076746eeb5c986126037b24?rik=TN1nujCn1WC9rg&riu=http%3a%2f%2farrowstagelines.com%2fwp-content%2fuploads%2f2018%2f08%2fCharter-Bus-Hotel-Transportation-Shuttle-Bus-Hilton-Bus-1.jpg&ehk=%2bQcxASiqJiI%2fwElM9Usg2ZlInWKrMXWzlYpAhNJ7Vek%3d&risl=&pid=ImgRaw&r=0",
      link: "/travel"
    },
    { 
      id: 3, 
      category: "Trains", 
      title: "Trains", 
      description: "Secure your seat by paying 25% now, 75% later!", 
      validity: "Limited period offer", 
      img: "https://images.pexels.com/photos/159148/regional-train-rail-cars-platform-deutsche-bahn-159148.jpeg?cs=srgb&dl=pexels-pixabay-159148.jpg&fm=jpg",
      link: "/trains"
    },
    { 
      id: 4, 
      category: "Trains", 
      title: "Trains", 
      description: "Secure your seat by paying 25% now, 75% later!", 
      validity: "Limited period offer", 
      img: "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/train-3448-72edc8c66df509608c1e13f712a1436e@1x.jpg",
      link: "/trains"
    }
  ],
  bankOffers: [],
  flights: [],
  hotels: [
    { 
      id: 1, 
      category: "Hotels", 
      title: "Hotels, Hotels", 
      description: "Save up to 50% OFF on Hotels & Homestays.", 
      validity: "Valid till 15th Sep'24", 
      img: "https://th.bing.com/th/id/OIP.zkP36OBXHCHnYriSSq2HTQHaEP?rs=1&pid=ImgDetMain",
      link: "/hoteloffer"
    }
  ],
  cabs: [],
  bus: [],
  trains: [
    { 
      id: 3, 
      category: "Trains", 
      title: "Trains", 
      description: "Secure your seat by paying 25% now, 75% later!", 
      validity: "Limited period offer", 
      img: "https://images.pexels.com/photos/159148/regional-train-rail-cars-platform-deutsche-bahn-159148.jpeg?cs=srgb&dl=pexels-pixabay-159148.jpg&fm=jpg",
      link: "/trains"
    }
  ]
};

const Offer = () => {
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
    <div className="w-[50vw] h-[55vh] mx-auto p-4 mt-48 mb-16 bg-[#8181cc] pb-10">
      <h1 className="text-4xl font-bold text-center mb-8">Offers For You</h1>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-2 mb-4">
        {Object.keys(offers).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-white text-black border"} rounded`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards with Scroll */}
      <div className="relative">
        <div className="flex justify-between items-center">
          <button onClick={scrollLeft} className="bg-white p-2 rounded-full shadow">
            <FaArrowLeft size={30}/>
          </button>

          <div ref={scrollRef} className="flex space-x-4 overflow-x-auto no-scrollbar px-4">
            {offers[selectedCategory].map(offer => (
              <div 
                key={offer.id} 
                className="min-w-[300px] bg-white w-80 h-80 rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
              >
                <a href={offer.link}>
                  <img src={offer.img} alt={offer.title} className="rounded h-40 w-72 mb-2 object-cover"/>
                </a>
                <h2 className="font-bold">{offer.title}</h2>
                <p>{offer.description}</p>
                <p className={`${offer.validity.includes("Limited") ? "text-red-500" : "text-gray-500"}`}>
                  {offer.validity}
                </p>
              </div>
            ))}
          </div>

          <button onClick={scrollRight} className="bg-white p-2 rounded-full shadow">
            <FaArrowRight size={30}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Offer;
