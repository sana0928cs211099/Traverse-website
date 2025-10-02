import React from 'react'
import { FaPlane } from 'react-icons/fa';

const PopularFl = () => {
  const flights = [
    {
      image: "https://th.bing.com/th/id/OIP.7YK_sRTqodfNQ96q7T8F-QHaFj?rs=1&pid=ImgDetMain",
      title: "Lucknow to Kathmandu",
      date: "Sep 10 - Sep 17 · Round-trip",
      alt: "Boudhanath Stupa in Kathmandu"
    },
    {
      image: "https://th.bing.com/th/id/OIP.xuhzWmWcL1UzEcy3AuebswHaE8?rs=1&pid=ImgDetMain",
      title: "Lucknow to Bangkok",
      date: "Sep 16 - Sep 23 · Round-trip",
      alt: "Wat Arun in Bangkok"
    },
    {
      image: "https://th.bing.com/th/id/OIP.mIc85Z7OdHvpttd-IABQBQHaE7?rs=1&pid=ImgDetMain",
      title: "Lucknow to Malé",
      date: "Sep 11 - Sep 18 · Round-trip",
      alt: "Aerial view of Malé"
    }
  ];

  return (
    <div className="flex flex-col items-center mx-auto p-4 mt-16 pb-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Popular International Flights For You</h1>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 p-6 border border-gray-300 bg-white w-[51vw] rounded-lg shadow-lg hover:shadow-gray-500 transition-shadow duration-300">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-72 shadow-lg rounded-lg p-3 hover:shadow-gray-500 transition-shadow duration-300"
          >
            <img
              src={flight.image}
              alt={flight.alt}
              className="rounded-lg mb-2 w-72 h-48 object-cover"
            />
            <h2 className="font-bold text-lg text-center">{flight.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{flight.date}</p>
            <FaPlane className="text-blue-500 text-2xl" />
          </div>
        ))}
      </div>

      <a
        href="/flight"
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        See more...
      </a>
    </div>
  );
};

export default PopularFl;
