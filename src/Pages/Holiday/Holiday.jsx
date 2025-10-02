import React, { useState } from 'react';
import { FaSuitcase, FaChevronDown } from 'react-icons/fa';
import PackageH from '../../Components/packageH/PackageH';
import HolidayThemes from '../../Components/HolidayOffer/HolidayThemes';
import Des from '../../Components/HolidayOffer/Des'

const Holiday = () => {
  const [destination, setDestination] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [travelDate, setTravelDate] = useState('15 Sep, 2024');
  const [travellers, setTravellers] = useState('2 Adults, 1 Child');

  return (
    <div className=" ">
      {/* Banner Image */}
      <div className="relative mb-40">
        <video className=" inset-0 w-full h-[70vh] object-cover" autoPlay muted loop>
          <source src="https://www.pexels.com/download/video/15708467/" type="video/mp4" />
        </video>

        {/* Search Box */}
        <div className="absolute w-[60vw] h-auto bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Plan Your Perfect Holiday</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Departure City */}
            <div>
              <label className="block text-gray-500 mb-1">From</label>
              <input
                type="text"
                placeholder="Enter departure city"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-gray-500 mb-1">To</label>
              <input
                type="text"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>

            {/* Travel Date */}
            <div className="relative">
              <label className="block text-gray-500 mb-1">Travel Date</label>
              <input
                type="text"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full border rounded p-2"
              />
              <FaChevronDown className="absolute right-2 top-8 text-gray-500" />
            </div>

            {/* Travellers */}
            <div className="relative">
              <label className="block text-gray-500 mb-1">Travellers</label>
              <input
                type="text"
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                className="w-full border rounded p-2"
              />
              <FaChevronDown className="absolute right-2 top-8 text-gray-500" />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600">
              <FaSuitcase className="inline mr-2" /> Search Holidays
            </button>
          </div>
        </div>
      </div>
      
      <HolidayThemes/>
      <br/>
      <PackageH/>
      <br/>
      <Des/>
      
    </div>
  );
};

export default Holiday;
