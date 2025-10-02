import React from 'react';
import { FaPlane } from 'react-icons/fa';

const FlightRoutes = () => {
  return (
    <div className="flex flex-col items-center  mx-auto p-4 mt-16 pb-10">
    <div className="flex space-x-6 p-8 mt-6 mb-4 border border-gray-300 bg-[white] w-[55vw] rounded-lg shadow-slate-300  shadow-lg hover:shadow-gray-500">
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Popular Flight Routes</h2>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Delhi Flights</span>
            <p>From: <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Pune</a>, <a href="#" className="text-blue-500">Bangalore</a>, <a href="#" className="text-blue-500">Goa</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Goa Flights</span>
            <p>From: <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Pune</a>, <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Indore</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Pune Flights</span>
            <p>From: <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Kolkata</a>, <a href="#" className="text-blue-500">Nagpur</a>, <a href="#" className="text-blue-500">Bangalore</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Ahmedabad Flights</span>
            <p>From: <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Bangalore</a>, <a href="#" className="text-blue-500">Pune</a></p>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Mumbai Flights</span>
            <p>From: <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Ahmedabad</a>, <a href="#" className="text-blue-500">Bangalore</a>, <a href="#" className="text-blue-500">Chennai</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Jaipur Flights</span>
            <p>From: <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Ahmedabad</a>, <a href="#" className="text-blue-500">Pune</a>, <a href="#" className="text-blue-500">Bangalore</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Hyderabad Flights</span>
            <p>From: <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Kolkata</a>, <a href="#" className="text-blue-500">Bangalore</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Patna Flights</span>
            <p>From: <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Bangalore</a>, <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Kolkata</a></p>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Banglore Flights</span>
            <p>From: <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Ahmedabad</a>, <a href="#" className="text-blue-500">Bangalore</a>, <a href="#" className="text-blue-500">Chennai</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Kolkata Flights</span>
            <p>From: <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Ahmedabad</a>, <a href="#" className="text-blue-500">Pune</a>, <a href="#" className="text-blue-500">Bangalore</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Chennai Flights</span>
            <p>From: <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Kolkata</a>, <a href="#" className="text-blue-500">Bangalore</a></p>
          </div>
          <div className="mb-2">
            <FaPlane className="inline mr-2" />
            <span className="font-semibold">Lucknow Flights</span>
            <p>From: <a href="#" className="text-blue-500">Delhi</a>, <a href="#" className="text-blue-500">Bangalore</a>, <a href="#" className="text-blue-500">Mumbai</a>, <a href="#" className="text-blue-500">Kolkata</a></p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FlightRoutes;
