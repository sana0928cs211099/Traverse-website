import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const packages = [
  { name: "Thailand", price: "₹80,000", image: "https://th.bing.com/th/id/OIP.3ZEJ5Y0Vdo1Pux6ZlCmHCwHaFV?rs=1&pid=ImgDetMain" },
  { name: "Rajasthan", price: "₹13,800", image: "https://th.bing.com/th/id/R.45b96685b7a1ea38ce911cb1680e7d8d?rik=7Sz0DJ7LeR%2fWdg&riu=http%3a%2f%2fgeringerglobaltravel.com%2fwp-content%2fuploads%2f2015%2f02%2fDSCN4900-Hawa-mahal-copy.jpg&ehk=b%2fzrdHMXZah81ripior%2fh2GPVvAkUBxHQoUKmWRbo2A%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Goa", price: "₹7,500", image: "https://th.bing.com/th/id/OIP.RGpdb3FKmZ07rSFIvoaEtAHaE8?rs=1&pid=ImgDetMain" },
  { name: "Kerala", price: "₹15,700", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=1200&h=1200&s=1" },
  { name: "South India", price: "₹15,700", image: "https://pbs.twimg.com/media/C2IMzjJUkAA1xU6.jpg" },
  { name: "Kashmir", price: "₹25,400", image: "https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg" },
  { name: "North-East", price: "₹9,400", image: "https://th.bing.com/th/id/OIP.cODBgXqoZPkDY-IckIrqDwHaE8?w=612&h=408&rs=1&pid=ImgDetMain" },
  { name: "Andaman", price: "₹12,500", image: "https://th.bing.com/th/id/OIP.jjK7Ah_eSEhDQ5tgK3zI9wHaEo?rs=1&pid=ImgDetMain" }
];

const DestiCard = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef(null);
  
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        setScrollPosition(scrollContainerRef.current.scrollLeft - 200);
      }
    };
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        setScrollPosition(scrollContainerRef.current.scrollLeft + 200);
      }
    };

  return (
    <div className="flex flex-col items-center justify-center mx-auto pb-10 p-2 bg-white">
    <div className="bg-white p-4 mt-6 mb-4 pb-28 border border-gray-300 w-[54vw]  rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500 relative">
      <h1 className="text-4xl font-bold mb-4">Nearby Destinations</h1>
      <p className="text-xl mb-6">Get Flat 45% Off! Use code: VOYAGE72</p>
      <div className="absolute top-4 right-4 flex space-x-2">
        <button onClick={scrollLeft} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaChevronRight />
        </button>
      </div>
      <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4">
        {packages.map((pkg, index) => (
          <div key={index} className="flex-shrink-0 w-48">
            <div className="relative">
              <img src={pkg.image} alt={pkg.name} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <h2 className="text-white text-lg font-semibold">{pkg.name}</h2>
                <p className="text-white text-sm">Starting at {pkg.price}<br />Per person</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default DestiCard
