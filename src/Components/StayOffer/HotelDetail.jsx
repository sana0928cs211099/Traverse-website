import React from "react";
import { useParams, Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    name: "Vedaaranya Haveli - AM Hotel Kollection, Fatehpur, Rajasthan",
    img: "https://promos.makemytrip.com/images/VedaaranyaHaveli-Rajasthan.webp",
    description:
      "A royal heritage haveli offering a blend of tradition and modern luxury in Fatehpur, Rajasthan.",
  },
  {
    id: 2,
    name: "Foxtrail, Sector 42 - AM Hotel Kollection, Gurgaon, Haryana",
    img: "https://promos.makemytrip.com/images/Foxtrail-Gurgaon.webp",
    description:
      "A stylish boutique hotel located in the heart of Gurgaon’s corporate hub.",
  },
  {
    id: 3,
    name: "Amarpreet, Chhatrapati Sambhajinagar - AM Hotel Kollection, Aurangabad, Maharashtra",
    img: "https://promos.makemytrip.com/images/AmarpreetChhatrapatiSambhajinagarMaharashtra.webp",
    description:
      "Located in Aurangabad, this hotel offers world-class comfort with rich cultural vibes.",
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

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = properties.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <h2 className="text-center mt-10 text-red-500">Hotel not found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-6 font-sans text-gray-800">
      {/* Hotel Image */}
      <img
        src={hotel.img}
        alt={hotel.name}
        className="w-full h-80 object-cover rounded-lg shadow-lg"
      />

      {/* Hotel Info */}
      <h1 className="text-3xl font-bold mt-6">{hotel.name}</h1>
      <p className="mt-4 text-gray-700 text-lg">{hotel.description}</p>
      <p className="text-sm text-gray-600 mt-1">📍 Near Golf Course Road</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2 mb-6">
        <span className="text-yellow-500 font-semibold">⭐ 4.4</span>
        <span className="text-sm text-gray-600">(129 reviews)</span>
      </div>

      {/* Room Details */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Deluxe Room with Balcony</h2>
        <p className="text-sm mb-1">👥 Sleeps 2 Adults</p>
        <p className="text-sm mb-1">🕒 Check-in: 11 AM – 5 PM</p>
        <p className="text-sm mb-1">✅ Free cancellation up to 24 hours before check-in</p>
        <p className="text-lg font-bold text-green-600 mt-2">₹1,835 / night</p>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Amenities</h3>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          <li>📶 Wi-Fi</li>
          <li>❄️ Air Conditioning</li>
          <li>🛎️ Room Service</li>
          <li>🔌 Power Backup</li>
          <li>🚗 Parking Facility</li>
          <li>🛗 Elevator/Lift</li>
        </ul>
      </div>

      {/* About Property */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">About Property</h3>
        <p className="text-sm text-gray-700">
          Located in a prime area, Foxtrail offers comfort and simplicity with easy access to Golf Course Road.
        </p>
      </div>

      {/* Login Section */}
      <div className="bg-white border p-4 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-semibold mb-2">🔓 Unlock Deals</h3>
        <p className="text-sm mb-2">Enter your mobile number to manage bookings and access exclusive offers.</p>
        <input
          type="tel"
          placeholder="Enter mobile number"
          className="w-full p-2 border rounded mb-2"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Continue
        </button>
      </div>

      {/* Back Link */}
      <Link
        to="/hoteloffer"
        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        ⬅ Back to Hotels
      </Link>
    </div>
  );
};

export default HotelDetail;