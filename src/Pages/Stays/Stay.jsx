import React from 'react';
import { FaUsers, FaBed, FaBeer } from 'react-icons/fa';
import Browse from '../../Components/Browse/Browse';
import SOffer from '../../Components/StayOffer/SOffer';
import Deal from '../../Components/HotelDeal/Deal';
import Staysp from '../../Components/stays/Staysp';

const Stay = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://www.propeterra.com/hubfs/montage.jpg#keepProtocol"
          alt="Scenic view"
          className="w-full h-[55vh] object-cover"
        />

        {/* Stay Search Box */}
        <div className="absolute w-[34vw] h-auto bottom-0 left-96 pr-20 transform -translate-x-1/3 translate-y-1/2 bg-white p-6 border-blue-400 border-8 rounded-xl shadow-lg">
          <div className="space-y-4">
            {/* Location Type */}
            <div className="flex space-x-6 font-semibold">
              <label className="flex items-center">
                <input type="radio" name="location" className="mr-2" />
                India
              </label>
              <label className="flex items-center">
                <input type="radio" name="location" className="mr-2" />
                International
              </label>
            </div>

            {/* Destination Input */}
            <div>
              <label className="block text-gray-700 mb-1">Where</label>
              <input
                type="text"
                placeholder="e.g. Area, Landmark or Property"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Dates */}
            <div className="flex justify-between text-center">
              <div>
                <label className="block text-gray-700">Check-in</label>
                <div className="font-semibold">Sep 11, 2024</div>
              </div>
              <div>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  1 Night
                </span>
              </div>
              <div>
                <label className="block text-gray-700">Check-out</label>
                <div className="font-semibold">Sep 12, 2024</div>
              </div>
            </div>

            {/* Guests and Preferences */}
            <div className="flex justify-between items-center">
              <div>
                <label className="block text-gray-700">Guests & Rooms</label>
                <div className="font-semibold">
                  <FaUsers className="inline mr-1" /> 2 Adults |{' '}
                  <FaBed className="inline mr-1" /> 1 Room
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Preferences</label>
                <div className="flex space-x-2 mt-1">
                  <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200">
                    Couples
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200">
                    goStays
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="absolute left-[37%] ml-16 bottom-[-2%]">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
            Search Here
          </button>
        </div>
      </div>

      {/* Latest Updates Box */}
      <div className="bg-white p-6 rounded-xl mr-32 mt-16 mx-auto shadow-lg border border-gray-300 max-w-[30vw]">
        <h2 className="font-bold mb-4 text-lg">Latest Updates</h2>
        <div className="flex">
          <img
            src="https://th.bing.com/th/id/OIP.2unAur3isClWZ8Sp2YT6YQHaE8?rs=1&pid=ImgDetMain"
            alt="Vacation"
            className="rounded w-28 h-24 object-cover mr-4"
          />
          <div>
            <p className="font-bold text-gray-800">Go for a good time, not a long time</p>
            <p className="text-sm text-gray-600">
              Finish your year with a mini break. Save 15% or more when you book and stay by January 7, 2025.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-2 flex items-center text-sm">
              <FaBeer className="mr-2" /> Find Late Escape Deals
            </button>
          </div>
        </div>
      </div>

      {/* Other Stay Components */}
      <div className="mt-16">
        <Browse />
        <SOffer />
        <Deal />
        <Staysp />
      </div>
    </div>
  );
};

export default Stay;
