import React from "react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    name: "Vedaaranya Haveli - AM Hotel Kollection, Fatehpur, Rajasthan",
    img: "https://promos.makemytrip.com/images/VedaaranyaHaveli-Rajasthan.webp",
  },
  {
    id: 2,
    name: "Foxtrail, Sector 42 - AM Hotel Kollection, Gurgaon, Haryana",
    img: "https://promos.makemytrip.com/images/Foxtrail-Gurgaon.webp",
  },
  {
    id: 3,
    name: "Amarpreet, Chhatrapati Sambhajinagar - AM Hotel Kollection, Aurangabad, Maharashtra",
    img: "https://promos.makemytrip.com/images/AmarpreetChhatrapatiSambhajinagarMaharashtra.webp",
  },
  {
    id: 4,
    name: "The Summer House by AM Hotel Kollection, Pachmarhi",
    img: "https://promos.makemytrip.com/images/TheSummerHousebyAMHotelKollectionPachmarhi.webp",
  },
  {
    id: 5,
    name: "WelcomHeritage Ramgarh, Chandigarh",
    img: "https://promos.makemytrip.com/images/WelcomHeritageRamgarhChandigarh.webp",
  },
  {
    id: 6,
    name: "Jasmnin South Goa - AM Hotel Kollection",
    img: "https://promos.makemytrip.com/images/JasminnSouthGoaAMHotelKollection.webp",
  },
  {
    id: 7,
    name: "Anamiva Goa By AM Hotel Kollection",
    img: "https://promos.makemytrip.com/images/AnamivaGoaByAMHotelKollection.webp",
  },
  {
    id: 8,
    name: "Golden Rock - AM Hotel Kollection, Dharamshala",
    img: "https://promos.makemytrip.com/images/GoldenRockAMHotelKollectionDharamshala.webp",
  },
  {
    id: 9,
    name: "De Garland Palolem - AM Hotel Kollection, Goa",
    img: "https://promos.makemytrip.com/images/DeGarlandPalolemAMHotelKollectionGoa.webp",
  },
  {
    id: 10,
    name: "Fort Tiracol Heritage Hotel, Vengurla",
    img: "https://promos.makemytrip.com/images/FortTiracolHeritageHotelVengurla.webp",
  },
  {
    id: 11,
    name: "Vedaaranya Haveli, Ramgarh by AM Hotel Kollection, Fatehpur, Rajasthan",
    img: "https://promos.makemytrip.com/images/VedaaranyaHaveliRajasthan.webp",
  },
];

const HotelOffer = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://4.bp.blogspot.com/-m7RsYeI7e7s/VGc9ZCeWd4I/AAAAAAAAqe0/ZEX7KQhiuKA/s1600/Crown%2BMetropol%2BPerth-766492.jpg"
          alt="Hotel Background"
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-35">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Enjoy Unparalleled Services & Hospitality <br />
            at <span className="text-blue-300">AM HOTEL Kollection!</span>
          </h1>
        </div>
      </div>

      {/* Sub Text */}
      <div className="text-center py-6">
        <p className="text-gray-800 text-lg">
          Enjoy personalised services & world-class amenities, all on your stay
          at AM Hotel Kollection!
        </p>
      </div>

      {/* Offer Card */}
      <div className="flex justify-center pb-12">
        <div className="flex items-center bg-blue-200 shadow-xl rounded-xl p-4 w-11/12 md:w-7/12 lg:w-5/12">
          {/* Left Image */}
          <img
            src="https://th.bing.com/th/id/OIP.SNMcqIBSHC5iSuU4inkIOAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Hotel Offer"
            className="w-80 h-48 rounded-lg object-cover"
          />

          {/* Right Text */}
          <div className="ml-7">
            <h2 className="text-3xl font-bold text-blue-700">
              Here’s Up to 40% OFF*
            </h2>
            <p className="text-gray-700 font-medium text-lg">
              on AM Hotel Kollection.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-bold text-blue-800">Booking Validity:</span>{" "}
              21st Sept – 25th Sep 2025
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-blue-800">Stay Validity:</span>{" "}
              Till 5th Nov 2025
            </p>
          </div>
        </div>
      </div>

      <hr className="w-full h-2  bg-gray-100 border-0 md:min-w-min dark:bg-[#a8cee6]"></hr>

      {/* Properties Grid */}
      <div className="bg-gray-50 px-6 mb-7 mt-11 py-10 max-w-7xl rounded-lg shadow-lg mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          Choose from these charming properties:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((hotel) => (
            <div
              key={hotel.id}
              className="flex flex-col items-center text-center"
            >
              <Link to={`/hotel/${hotel.id}`}>
                <img
                  src={hotel.img}
                  alt={hotel.name}
                  className="w-80 h-56 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="mt-3 text-sm font-medium text-gray-800">
                {hotel.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HotelOffer;
